import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import { updateProfile } from 'firebase/auth';
import './adminprofile.css'

import Navbar from '../../../Components/Layouts/navbar/Navbar';

const AdminProfile = () => {
  const authenticatedUser = useContext(userContext);
  const [name, setName] = useState(authenticatedUser?.displayName || '');
  const [email, setEmail] = useState(authenticatedUser?.email || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = () => {
    const user = authenticatedUser;
    updateProfile(user, { displayName: name, email: email })
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
      <Navbar darktheme={true} />
      {isEditing ? (
        <form>
          <div className='group'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className='form-input'
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              required
            />
          </div>
          <button className='adminpro' onClick={handleUpdateProfile}>Update Profile</button> <br/>
          <button className='adminpro' onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>
            <strong >Name:</strong> {name}</p>
          <p>
            <strong >Email Address:</strong> {email}</p>
          <button className='adminpro' onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;


