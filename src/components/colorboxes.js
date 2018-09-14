import React from 'react';

const Colorbox = function(props) {
  const {checked, onChange, onChecked, _id} = props;
  return (
    <div className="colorbox">
      <input
        className="colorbox-radio"
        type="radio"
        name="colorbox"
        checked={checked}
        onChange={onChecked}
        id={"radio" + _id}   
        />
      <label
        htmlFor={"radio" + _id}
      >
      </label>
    </div>
  );
}

export default class Colorboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {checked: false}
      ]
    };
  }

  onChecked(idx){
    //let boxes = Object.assign({}, this.state.boxes);
    const boxes = this.state.boxes;
    boxes[idx].checked = !boxes[idx].checked;
    console.log(idx);
    this.setState({
      boxes
    });
  }

  addBox(){
    const boxes = [...this.state.boxes, {checked: false}];
    this.setState({boxes});
  }

  deleteBox(){
    debugger;
    this.setState({
      boxes: this.state.boxes.filter((e,i) => !e.checked)
    });
  }

  render(){
    return(
      <div>
        <div className="colorboxcontainer">
          {this.state.boxes.map((box, idx) => {
            return (
              <Colorbox 
                key={idx}
                checked={box.checked}
                _id={idx}
                onChecked={
                  () => this.onChecked(idx)
                }
                onChange={
                  () => this.onChecked(idx)
                }
              />
            )
          })}
        </div>
        <button onClick={() => this.deleteBox()}>Minus</button>
        <button onClick={() => this.addBox()}>Add</button>
      </div>
    )
  }
}
          