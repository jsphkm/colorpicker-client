import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import Coloreditor from './coloreditor';
import Dashboard from './dashboard';
import Headerbar from './header-bar';

export default class User extends React.Component{
  render(){
    return (
        <div>
          <Headerbar title="Colorpicker"/>
          <div className="spacer"></div>
          <main>
            <Route exact path="/user/dashboard" component={Dashboard} />
            <Route exact path="/user/editor" component={Coloreditor} />
          </main>
        </div>
    );
  }
}