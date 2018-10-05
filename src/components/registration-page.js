import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './registration-page.css';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/user/dashboard" />;
  }

  return (
    <div className="registrationform-container">
      <h2>Create an Account</h2>
      <p className="register-subheader">You can create and collect all your palettes with an account</p>
      <RegistrationForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);