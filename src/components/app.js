import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router, 
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import './app.css';

import LoginPage from './login-page';
import RegistrationPage from './registration-page';
import LandingPage from './landing-page';
import User from './user';
import NotFound from './notfound';

export class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={RegistrationPage} />
            {/* <PrivateRoute path="/@user" component={User} /> */}
            <Route path="/user" component={User} />
            <Route component={NotFound} />
          </Switch>
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
