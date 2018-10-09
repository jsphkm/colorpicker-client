import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Headerbar from './header-bar';
import LoginForm from './login-form';
import './landing-page.css';

export default function LandingPage(props) {

  return (
    <div>
      <Headerbar title="Colorpicker"/>
      <div className="spacer"></div>
      <main>
        <h1>Landing Page</h1>
        <div className="divider"></div>
        Display a bunch of public palettes here...
      </main>
    </div>
  );
}