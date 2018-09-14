import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './login';
import './app.css';
import Colorboxes from './colorboxes';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to='/login'>
            Login
          </Link>
          <h1 className="app-title">Collection Title</h1>
        </header>
        <main>
          <h1 className="app-title">Color Editor</h1>
          <Colorboxes/>
          <div className="divider"></div>
          <div className="subMenuContainer">
            <button className="subMenu">Values</button>
            <button className="subMenu">Adjustments</button>
          </div>
          
          <div>HSL</div>
          <div>RGB</div>
          <div className="slidecontainer">
            <input type="range" min="0" max="360" className="slider-hsl-h slider" id="myRange"></input>
            <input type="range" min="0" max="360" className="slider-hsl-s slider" id="myRange"></input>
            <input type="range" min="0" max="360" className="slider-hsl-l slider" id="myRange"></input>
          </div>
        </main>
      </div>
    </Router>
  );
}
