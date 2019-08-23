import React from 'react';
import axios from 'axios';

import LoginForm from './LoginForm';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const loginRequest = credentials => {
    axios.post('http://localhost:3333/api/login', credentials)
      .then(res => {
        console.log(res)
        // localStorage.setItem('token', res.data.payload);
      })
      .catch(console.log);
  }
  return (
    <>
      <h1>Bubble App</h1>
      <LoginForm subFun={loginRequest} />
    </>
  );
};

export default Login;
