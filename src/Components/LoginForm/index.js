import React from 'react';
import { LoginForm as LoginFormComponent} from './LoginForm';
import { connect } from 'react-redux';
import { login } from 'Redux/Actions/user';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
  user: state.user,
});

const actions = {
  login,
}

const WrappedLoginFormComponent = withRouter(props => <LoginFormComponent {...props}/>);

export const LoginForm = connect(mapStateToProps, actions)(WrappedLoginFormComponent);
