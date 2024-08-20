import React from 'react';
import './CSS/Login.css';
import loginIllustration from '../assets/loginIllustration.jpg'; // Replace with the correct path to your image

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Log in to your Account</h1>
        <p>Welcome back! Select method to log in:</p>
        <div className="social-login">
          <button className="google-login">Google</button>
          <button className="facebook-login">Facebook</button>
        </div>
        <p className="or">or continue with email</p>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Log in</button>
        </form>
        <p className="create-account">
          Don't have an account? <a href="#">Create an account</a>
        </p>
      </div>
      <div className="login-illustration">
        <img src={loginIllustration} alt="Login illustration" />
        <p>Connect with every application. Everything you need in an easily customizable dashboard.</p>
      </div>
    </div>
  );
}

export default Login;
