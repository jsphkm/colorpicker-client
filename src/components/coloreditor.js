import React from 'react';
import {connect} from 'react-redux';
import Colorboxes from './colorboxes';
import {hueChanged, saturationChanged, lightnessChanged,  getOnePalette, renderOnePalette} from '../actions/editor';
import './coloreditor.css';
import requiresLogin from './requires-login';
import {postPalette, putPalette, deletePalette} from '../actions/palettes';
import {Link, withRouter} from 'react-router-dom';

export class Coloreditor extends React.Component{
  constructor(props) {
    super(props);
    this.props.dispatch(renderOnePalette([{
      checked: true,
      color: {
        hue: Math.floor(Math.random() * 360),
        saturation: Math.floor(Math.random() * 100),
        lightness: Math.floor(Math.random() * 100)
      }
    }]))
  }

  componentDidMount(){
    if (this.props.match.params.paletteid !== 'new') {
      const data = {authToken: this.props.authToken, id: this.props.match.params.paletteid}
      this.props
        .dispatch(getOnePalette(data))
        .then(onepalette => {
          const mappedpalette = onepalette.colors.map((color, idx) => {
            return idx === 0 ? {checked: true, color} : {checked: false, color};
          })
          this.props.dispatch(renderOnePalette(mappedpalette));
        })
    }
  }

  savePalette(){
    const colorlist = this.props.editor.colorOptions.map(e => {
      return e.color;
    })
    if (this.props.match.params.paletteid === 'new') {
      const data = {authToken: this.props.authToken, palette: colorlist};
      this.props
        .dispatch(postPalette(data))
        .then(res => {
          this.props.history.push("/user/dashboard");
        })
    }

    else {
      const data = {
        authToken: this.props.authToken,
        palette: colorlist,
        id: this.props.match.params.paletteid
      };
      this.props
        .dispatch(putPalette(data))
        .then(res => {
          this.props.history.push("/user/dashboard");
        })
    }
    
  }

  deletePalette(){
    const data = {authToken: this.props.authToken, id: this.props.match.params.paletteid}
    this.props
      .dispatch(deletePalette(data))
      .then(res => {
        this.props.history.push("/user/dashboard")
      })
  }

  hueChanged(e){
    this.props.dispatch(hueChanged({
      hueValue: e.target.value, 
      colorIndex: this.props.checkedColorIndex
    }));
  }

  saturationChanged(e){
    this.props.dispatch(saturationChanged({
      saturationValue: e.target.value, 
      colorIndex: this.props.checkedColorIndex
    }));
  }

  lightnessChanged(e){
    this.props.dispatch(lightnessChanged({
      lightnessValue: e.target.value, 
      colorIndex: this.props.checkedColorIndex
    }));
  }

  render(){
    return(
      <div>
        <h1 className="editor-title">Color Editor</h1>
        <Colorboxes />
        <div className="divider"></div>
        <div className="subMenuContainer">
          <div className="subMenu">HSL Sliders</div>
        </div>
        <div className="slidecontainer">
          <div className="sliderInitials">H {this.props.checkedColor.color.hue}</div>
          <input type="range" min="0" max="360" className="slider-hsl-h slider" id="myRange"
          value={this.props.checkedColor.color.hue}
          onChange={this.hueChanged.bind(this)}
          style={{background: `linear-gradient(to right,
            hsl(0,${this.props.checkedColor.color.saturation}%, ${this.props.checkedColor.color.lightness}%),
            hsl(60,${this.props.checkedColor.color.saturation}%, ${this.props.checkedColor.color.lightness}%),
            hsl(120,${this.props.checkedColor.color.saturation}%, ${this.props.checkedColor.color.lightness}%),
            hsl(180,${this.props.checkedColor.color.saturation}%, ${this.props.checkedColor.color.lightness}%),
            hsl(240,${this.props.checkedColor.color.saturation}%, ${this.props.checkedColor.color.lightness}%),
            hsl(300,${this.props.checkedColor.color.saturation}%, ${this.props.checkedColor.color.lightness}%),
            hsl(360,${this.props.checkedColor.color.saturation}%, ${this.props.checkedColor.color.lightness}%))
            `}}
          ></input>
          <div className="sliderInitials">S {this.props.checkedColor.color.saturation}</div>
          <input type="range" min="0" max="100" className="slider-hsl-s slider" id="myRange" 
          value={this.props.checkedColor.color.saturation}
          onChange={this.saturationChanged.bind(this)}
          style={{background: `linear-gradient(to right, 
            hsl(${this.props.checkedColor.color.hue},0%,${this.props.checkedColor.color.lightness}%), 
            hsl(${this.props.checkedColor.color.hue},100%,${this.props.checkedColor.color.lightness}%))
            `}}
          ></input>
          <div className="sliderInitials">L {this.props.checkedColor.color.lightness}</div>
          <input type="range" min="0" max="100" className="slider-hsl-l slider" id="myRange"
          value={this.props.checkedColor.color.lightness}
          onChange={this.lightnessChanged.bind(this)}
          style={{background: `linear-gradient(to right,
            hsl(${this.props.checkedColor.color.hue}, ${this.props.checkedColor.color.saturation}%,0%),
            hsl(${this.props.checkedColor.color.hue}, ${this.props.checkedColor.color.saturation}%,50%),
            hsl(${this.props.checkedColor.color.hue}, ${this.props.checkedColor.color.saturation}%,100%))
            `}}
          ></input>
        </div>
        <div className="discardsave-container" >
          <button className="delete-button" onClick={this.deletePalette.bind(this)}>Delete</button>
          <Link to="/user/dashboard" className="cancel-button">Cancel</Link>
          <button onClick={this.savePalette.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const hasChecked = color => color.checked;
  const checkedColor = state.main.editor.colorOptions.find(hasChecked);
  const checkedColorIndex = state.main.editor.colorOptions.findIndex(hasChecked);
  return {
   editor: state.main.editor,
   checkedColor,
   checkedColorIndex,
   authToken: state.auth.authToken
  }
}

export default requiresLogin()(connect(mapStateToProps)(withRouter(Coloreditor)));