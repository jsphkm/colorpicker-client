import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Loginform from './login-form';
import RegistrationPage from './registration-page';
import './header-bar.css';
import ProfileIcon from './profileicon';

export class HeaderBar extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-left">
          <button className="app-title-button">
            <div className="app-title">
              {this.props.title}
              <span className="triangle-container">
                <div className="triangle"></div>
              </span>
            </div>
          </button>
        </div>
        <div className="header-middle"></div>
        <div className="header-right">
          <Link to="/login" className="login-button">Login</Link>
          {/*Enable below when logged in*/}
          {/* <button className="profile-button">
            <ProfileIcon 
              fill="white"
              width={15}
              className="profile_icon"  
            />
            <div className="arrow-down-container">
              <div className="arrow-down"></div>
            </div>
          </button> */}
          
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(HeaderBar);