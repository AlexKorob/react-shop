import React from 'react';
import { LoginForm } from 'Components/LoginForm/index';
import { Layout } from 'UI/Layout/index';

export const Login = (props) => {
  return (
    <Layout content={
      <LoginForm />
    } />
  );
}