import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './dashboard.css';
import requiresLogin from './requires-login';
import PalettesList from './paletteslist';

export class Dashboard extends React.Component {

  render() {
    return (
      <section className="dashboard-section">
        <div className="dashboard-header">
          <h1>Palettes</h1>
          <Link to="/user/editor/new" className="newpalette-link">
            <span className="newpalette-plus">+</span>
            {/* <span className="newpalette-text">New palette</span> */}
          </Link>
        </div>
        <PalettesList />
      </section>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    email: state.auth.currentUser.email,
    name: `${currentUser.firstName} ${currentUser.lastName}`
  }
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));