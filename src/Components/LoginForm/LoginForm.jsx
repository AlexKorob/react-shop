import './styles.scss';
import React, { useRef } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const LoginForm = ({login, user, history}) => {
  const username = useRef('');
  const password = useRef('');
  useEffect(() => {
    if (user.isAuth) {
      history.replace('/');
    }
  }, [user.isAuth, history]);

  const onFinish = values => {
    login(values.username, values.password);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h2>Login</h2>
      {user.error && <div className="error">Username or Password Invalid!</div>}
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input
          ref={username}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
          {
            min: 3,
            message: "Your password can't be less then 3 symbols!",
          }
        ]}
      >
        <Input
          ref={password}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/">register now!</Link>
      </Form.Item>
    </Form>
  );
};
