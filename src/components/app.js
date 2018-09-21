import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import './app.css';

import Coloreditor from './coloreditor';
import Dashboard from './dashboard';
import Loginform from './login-form';
import RegistrationPage from './registration-page';
import LandingPage from './landing-page';
import Headerbar from './header-bar';

export class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="app">
          <Headerbar title="Colorpicker"/>
          {/* <div className="divider"></div> */}
          <div className="spacer"></div>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signin" component={Loginform} />
            <Route exact path="/editor" component={Coloreditor} />
            <Route exact path="/createaccount" component={RegistrationPage} />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
