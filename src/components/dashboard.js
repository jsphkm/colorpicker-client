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
        <h1>Dashboard</h1>
        <Link to="/user/editor" className="newpalette">Create a New Palette</Link>
        <div className="divider"></div>
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