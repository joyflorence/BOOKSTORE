

const stripe = require('stripe')('sk_test_51OyA4BRuhMJGUpa1NcWBHkOZSZUHzfp2tnx1u5rcXVnuxygT77NqlkSSo5JYveJlJPpC4KP9GC9Yero65vhc57V000XDdZk5k4');
const express = require('express');
const bodyParser = require('body-parser'); // Import bodyParser to parse JSON data
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); // Parse JSON-encoded bodies

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  // Extract the price ID from the request body
  const { priceId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId, // Use the provided price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    // Send the session URL back to the client
    res.json({ url: session.url });
  } catch (error) {
    // Handle any errors
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.listen(3000, () => console.log('Running on port 3000'));
