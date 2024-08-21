import React, { useState } from 'react';
import './CSS/Login.css';
import loginIllustration from '../assets/loginIllustration.jpg';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle email and password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully');
      navigate('/dashboard'); // Redirect to dashboard or another page
    } catch (error) {
      alert('Error logging in: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Logged in with Google');
      navigate('/dashboard'); // Redirect to dashboard or another page
    } catch (error) {
      alert('Error logging in with Google: ' + error.message);
    }
  };

  // Handle forgot password (functionality not yet implemented)
  const handleForgotPassword = () => {
    alert('Forgot Password functionality not implemented');
  };

  // Redirect to signup page
  const handleCreateAccount = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Log in to Your Account</h1>
        <p>Welcome back! Select a method to log in:</p>
        <div className="social-login">
          <button
            className="google-login"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Log in with Google'}
          </button>
          <button
            className="facebook-login"
            disabled
          >
            Log in with Facebook
          </button>
        </div>
        <p className="or">or continue with email</p>
        <form onSubmit={handleEmailLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button
              type="button"
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <p className="create-account">
          Don't have an account?{' '}
          <button
            className="create-account-btn"
            onClick={handleCreateAccount}
          >
            Create an account
          </button>
        </p>
      </div>
      <div className="login-illustration">
        <img src={loginIllustration} alt="Login illustration" />
        <p>
          Connect with every application. Everything you need in an easily customizable dashboard.
        </p>
      </div>
    </div>
  );
}

export default Login;
