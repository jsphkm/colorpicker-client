import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Headerbar from './header-bar';
import './landing-page.css';

export function LandingPage(props) {
  const hasNoError = !props.error;
  if (props.hasAuthToken && props.loggedIn && hasNoError) {
    return <Redirect to="/user/dashboard" />;
  }

  return (
    <div>
      <Headerbar title="Colorpicker"/>
      <div className="spacer"></div>
      <main>
        <div className="landingpage-contents">
          <h1 className="landing-header">Welcome to Colorpicker</h1>
          <p>To create and view your palettes, please <Link to="/login">log in</Link></p>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error
})

export default connect(mapStateToProps)(LandingPage);