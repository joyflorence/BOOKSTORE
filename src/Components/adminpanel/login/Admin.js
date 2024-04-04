import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import app from '../../../firebase/Firebase';
import Navbar from '../../Layouts/navbar/Navbar';

const adminPasscode = '09042003'; // Replace with your secret admin passcode

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe');

    if (storedRememberMe === 'true' && storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  
  const handleLogin = (event) => {
    event.preventDefault();
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('rememberMe', rememberMe.toString());
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          localStorage.removeItem('rememberMe');
        }
        navigate('/dashboard');
      })
      .catch((err) => {
        setError('Invalid email or password.');
        console.log(err);
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const auth = getAuth(app);

    if (passcode !== adminPasscode) {
      setError('Invalid passcode');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          // Set display name for the user
          updateDisplayName(user, username);
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        setError('Error signing up. Please try again.');
        console.log(err);
      });
  };

  const updateDisplayName = (user, displayName) => {
    updateProfile(user, {
      displayName: displayName,
    })
      .then(() => {
        console.log('Display name updated successfully');
      })
      .catch((err) => {
        console.log('Error updating display name:', err);
      });
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setError(''); // Reset error message when toggling between signup and login
  };


  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
      <Navbar darktheme={true} />

      {isSignup ? (
        <form onSubmit={handleSignup}>
          <div className="group">
            <label>Username</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />

            
          <div className="form-group">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>
          </div>
          <div className="group">
            <label>Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="group">
            <label>Admin Passcode</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter the admin passcode"
              value={passcode}
              onChange={(event) => setPasscode(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input type="submit" className="button-primary" value="Sign Up" />
          </div>

          <p>
            Already have an account?{' '}
            <button type="button" className="link-button" onClick={toggleSignup}>
              Login
            </button>
          </p>

          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="group">
            <label>Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
              autoComplete="on"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            </div>

          <div className="form-group">
            <input type="submit" className="button-primary" value="Login" />
          </div>

          <p>
            Don't have an account?{' '}
            <button type="button" className="linkbutton" onClick={toggleSignup}>
              Sign Up
            </button>
          </p>

          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Admin;