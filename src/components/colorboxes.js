import React from 'react';
import {connect} from 'react-redux';
import {addBox, removeBox, checkedBox} from '../actions/editor';
import './colorboxes.css';

const Colorbox = function(props) {
  const {checked, onChange, _id, color} = props;
  return (
    <div className="colorbox" style={{backgroundColor: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`}}>
      <input
        className="colorbox-radio"
        type="radio"
        name="colorbox"
        checked={checked}
        onChange={onChange}
        id={"radio" + _id}   
        />
      <label
        htmlFor={"radio" + _id}
      >
      </label>
    </div>
  );
}

export class Colorboxes extends React.Component {

  addBox() {
    this.props.dispatch(addBox());
  }

  removeBox() {
    let clickedIndex;
    let colorOptions = Array.from(this.props.colorOptions, x => x).filter((e, i) => {
      if (!e.checked) {
        return true
      }
      else {
        clickedIndex = i;
        return false
      }
    });
    
    if (clickedIndex < colorOptions.length){
      colorOptions[clickedIndex].checked = true;
    }
    else {
      colorOptions[clickedIndex - 1].checked = true;
    }
    this.props.dispatch(removeBox(colorOptions));
  }

  checkedBox(idx) {
    let colorOptions = Array.from(this.props.colorOptions, x => x);
    for (let i = 0; i < colorOptions.length; i++){
      if (i === idx){
        colorOptions[idx].checked = true;
      }
      else {
        colorOptions[i].checked = false;
      }
    }
    this.props.dispatch(checkedBox(colorOptions));
  }

  render(){
    console.log(this.props);
    const colorOptionsList = this.props.colorOptions.map((coloroption, idx) => (
      <Colorbox 
        key={idx}
        checked={coloroption.checked}
        _id={idx}
        onChange={() => this.checkedBox(idx)}
        color={coloroption.color}
      />
    ));

    return(
      <div>
        <div className="colorboxcontainer">
          {colorOptionsList}
        </div>
        <div className="addremove-container">
          <button onClick={() => this.removeBox()}>Remove</button>
          <button onClick={() => this.addBox()}>Add</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  colorOptions: state.main.editor.colorOptions
})

export default connect(mapStateToProps)(Colorboxes);
          