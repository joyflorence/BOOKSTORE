import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Hotpg from '../../images/showcase.jpg'
import app from '../../firebase/Firebase';
import Navbar from '../../Components/Layouts/navbar/Navbar';
import {getAuth, updateProfile} from 'firebase/auth';

const UserProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      console.log('Profile updated successfully.');
    } catch (error) {
      console.log('Error updating profile:', error);
    }};

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Navbar darktext={true}/>
      
      <div className='signup-img-container'>
      <img src={Hotpg} alt='book'/>
      </div>

      <div className='profile'>
      <div>
        <label>Display Name:</label>
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
      </div>
      <div >
        <label>Email:</label>
        <input type="email" value={email}/>
      </div>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;