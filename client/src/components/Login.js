import React from 'react';
import axios from 'axios';

import LoginForm from './LoginForm';

const Login = ({ history }) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const loginRequest = credentials => {
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/bubbles')
      })
      .catch(console.log);
  }
  return (
    <>
      <LoginForm subFun={loginRequest} />
    </>
  );
};

export default Login;
