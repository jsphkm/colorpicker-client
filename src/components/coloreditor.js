import React from 'react';
import {connect} from 'react-redux';
import Colorboxes from './colorboxes';
import {hueChanged, saturationChanged, lightnessChanged} from '../actions/editor';
import './coloreditor.css';
import requiresLogin from './requires-login';
import {getPalettes, postPalette} from '../actions/palettes';

export class Coloreditor extends React.Component{

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

  printstate(){
    console.log(this.state);
  }

  postPalette(){
    return this.props.dispatch(getPalettes());
  }

  render(){
    return(
      <div>
        <h1 className="app-title">Color Editor</h1>
        <Colorboxes/>
        <div className="divider"></div>
        <div className="subMenuContainer">
          <button className="subMenu">Values</button>
          <button className="subMenu">Adjustments</button>
        </div>

        <div>HSL</div>
        <div className="slidecontainer">
          <div className="sliderInitials">H {this.props.checkedColor.color.hue}</div>
          <div></div>
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
        <button>Discard</button>
        <button onClick={postPalette}>Finish</button>
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
   checkedColorIndex
  }
}

export default requiresLogin()(connect(mapStateToProps)(Coloreditor));