import React from 'react';

const Colorbox = function(props) {
  const {checked, onChange, _id, color} = props;
  return (
    <div className="colorbox" style={{backgroundColor: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`}}>
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

export default class Colorboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          checked: true,
          hsl: [
            Math.floor(Math.random() * 360),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
          ]
        }
      ]
    };
  }

  checkedEvent(idx){
    let boxes = Array.from(this.state.boxes, x => x);
    for (let i = 0; i < boxes.length; i++){
      if (i === idx){
        boxes[idx].checked = true;
      }
      else {
        boxes[i].checked = false;
      }
    }
    this.setState({boxes}, this.aftersetState);
  }

  deleteBox(){
    let clickedIndex;

    let boxes = Array.from(this.state.boxes, x => x).filter((e, i) => {
      if (!e.checked) {
        return true
      }
      else {
        clickedIndex = i;
        return false
      }
    });

    if (clickedIndex < boxes.length){
      boxes[clickedIndex].checked = true;
    }
    else {
      boxes[clickedIndex - 1].checked = true;
    }

    this.setState({boxes}, this.aftersetState);
    
  }

  addBox(){
    const boxes = [
      ...this.state.boxes,
      {
        checked: false,
        hsl: [
          Math.floor(Math.random() * 360),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100)
        ]
      }
    ];
    this.setState({boxes});
  }

  aftersetState(){
    this.props.onSelectionChange(this.state.boxes);
  }

  componentDidMount(){
    this.props.onSelectionChange(this.state.boxes);
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
                onChange={
                  () => this.checkedEvent(idx)
                }
                color={box.hsl}
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
          