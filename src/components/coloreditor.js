import React from 'react';
import {connect} from 'react-redux';
import Colorboxes from './colorboxes';
import {hueChanged, saturationChanged, lightnessChanged} from '../actions';

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
          <input type="range" min="0" max="360" className="slider-hsl-h slider" id="myRange" value={this.props.checkedColor.color.hue}
          onChange={this.hueChanged.bind(this)}></input>
          <input type="range" min="0" max="100" className="slider-hsl-s slider" id="myRange" value={this.props.checkedColor.color.saturation}
          onChange={this.saturationChanged.bind(this)}></input>
          <input type="range" min="0" max="100" className="slider-hsl-l slider" id="myRange" value={this.props.checkedColor.color.lightness}
          onChange={this.lightnessChanged.bind(this)}></input>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const hasChecked = color => color.checked
  const checkedColor = state.editor.colorOptions.find(hasChecked)
  const checkedColorIndex = state.editor.colorOptions.findIndex(hasChecked)
  return {
   editor: state.editor,
   checkedColor,
   checkedColorIndex
  }
}

export default connect(mapStateToProps)(Coloreditor);