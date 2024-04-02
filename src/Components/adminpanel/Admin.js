import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase/Firebase';
import { getAuth } from 'firebase/auth';

const Admin = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to the Admin Panel, {user.displayName}!</h1>
      {/* Your admin panel content goes here */}
    </div>
  );
};

export default Admin;