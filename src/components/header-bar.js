import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
import './header-bar.css';

export class HeaderBar extends React.Component {
  signout(){
    clearAuthToken();
    this.props
      .dispatch(clearAuth())
  }

  render() {
    return (
      <header className="app-header">
        <div className="header-left">
          <div className="app-title-button">
            <div className="app-title">
              <Link to="/" className="home-link">{this.props.title}</Link>
            </div>
          </div>
        </div>
        <div className="header-middle"></div>
        <div className="header-right">
          {this.props.loggedIn ? (
            <button className="logout-button" onClick={this.signout.bind(this)}
            >Log out</button>
            ) : (
              <Link to="/login" className="login-button">Log in</Link>
            )
          }
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(HeaderBar);