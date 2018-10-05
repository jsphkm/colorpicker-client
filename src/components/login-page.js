import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './login-page.css';
import LoginForm from './login-form';

export function LoginPage(props) {
  if (props.hasAuthToken) {
    return <Redirect to="/user/dashboard" />;
  }

  return (
    <section className="loginform-container">
      <h2 className="login-title">Log in to Colorpicker</h2>
      <LoginForm/>
    </section>
  )
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LoginPage);