import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './dashboard.css';

export default class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <Link to="/editor" className="newpalette">Create a New Palette</Link>
        <Link className="needtologin" to="/login">Please login to save your palettes</Link>
      </section>
    )
  }
}