

const stripe = require('stripe')('sk_test_...');
const express = require('express');
const app = express();


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_6027c238adde1b26d1611f5433676b4f30813ba516a009c0199c8129c185bd93";

router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    console.log('Webhook verified')
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`)
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event


  // Return a 200 response to acknowledge receipt of the event
  response.send().end;
});

app.listen(4242, () => console.log('Running on port 4242'));