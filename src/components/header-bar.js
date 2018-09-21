import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class HeaderBar extends React.Component {
  render() {
    return (
      <header className="app-header">
        <button className="app-title-button">
          <div className="app-title">
            {this.props.title}
            <span className="triangle-container">
              <div className="triangle"></div>
            </span>
          </div>
        </button>
        {/* <Link to='/login' style={{textDecoration: 'none'}} className="headerlink">Login</Link> */}
      </header>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(HeaderBar);