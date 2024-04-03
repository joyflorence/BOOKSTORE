// import React, { useContext, useState } from 'react';
// import { userContext } from '../../App';
// import { updateProfile } from 'firebase/auth';

// const Profile = () => {
 
//   const authenticatedUser = useContext(userContext);
//   const [name, setName] = useState(authenticatedUser?.displayName || '');
//   const [email, setEmail] = useState(authenticatedUser?.email || '');
//   const [shippingAddress, setShippingAddress] = useState(
//     authenticatedUser?.shippingAddress || ''
//   );

//   const handleUpdateProfile = () => {
//     const user = authenticatedUser;
//     updateProfile(user, { displayName: name })
//       .then(() => {
//         console.log('Profile updated successfully!');
//       })
//       .catch((error) => {
//         console.error('Error updating profile:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Profile</h1>
//       <form>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email Address:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="shippingAddress">Shipping Address:</label>
//           <textarea
//             id="shippingAddress"
//             value={shippingAddress}
//             onChange={(e) => setShippingAddress(e.target.value)}
//           ></textarea>
//         </div>
//       </form>
//       <button onClick={handleUpdateProfile}>Update Profile</button>
//     </div>
//   );
// };

// export default Profile;



import React, { useContext, useState } from 'react';
import { userContext } from '../../App';

import { updateProfile } from 'firebase/auth';
import './profile.css'
import Navbar from '../../Components/Layouts/navbar/Navbar';

const Profile = () => {
  const authenticatedUser = useContext(userContext);
  const [name, setName] = useState(authenticatedUser?.displayName || '');
  const [email, setEmail] = useState(authenticatedUser?.email || '');
  const [shippingAddress, setShippingAddress] = useState(
    authenticatedUser?.shippingAddress || ''
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = () => {
    const user = authenticatedUser;
    updateProfile(user, { displayName: name })
      .then(() => {
        console.log('Profile updated successfully!');
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div>
     <Navbar darktheme={true}/>
     
      {isEditing ? (
        <form >
          
          <div className='group'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className='form-input'
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='group'>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              className='form-input'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='group'>
            <label htmlFor="shippingAddress">Shipping Address:</label>
            <textarea
              id="shippingAddress"
              className='form-input'
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handleUpdateProfile}>Update Profile</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div className='add'>
          <p>
            <strong>Name:</strong> {name}</p>
          <p>
            <strong>Email Address:</strong> {email}</p>
          <p>
            <strong>Shipping Address:</strong> {shippingAddress} </p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>

        </div>
      )}
    </div>
  );
};

export default Profile;

