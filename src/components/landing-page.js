import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Headerbar from './header-bar';

import LoginForm from './login-form';

export default function LandingPage(props) {

  return (
    <div>
      <Headerbar title="Colorpicker"/>
      <div className="spacer"></div>
      <main>
        <p>Landing Page</p>
        Display a bunch of public palettes here...
      </main>
    </div>
  );
}