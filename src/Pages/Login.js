// src/Pages/Login.js
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <h3>Or continue with:</h3>
      <button className="facebook-login-button">
        <FontAwesomeIcon icon={faFacebook} /> Continue with Facebook
      </button>
      <FacebookLogin
        appId="YOUR_APP_ID"
        autoLoad={false}
        callback={responseFacebook}
        textButton="Continue with Facebook"
      />
    </div>
  );
}

export default Login;
