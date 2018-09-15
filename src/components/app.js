import React from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
//import Login from './login';
import './app.css';

import Coloreditor from './coloreditor';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to='/login'>
            Login
          </Link>
        </header>
        <main>
          <Coloreditor />
        </main>
      </div>
    </Router>
  );
}
