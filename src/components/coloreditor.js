import React from 'react';
import Colorboxes from './colorboxes';

export default class Coloreditor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      idx: '',
      boxstate: [],
      h: '',
      s: '',
      l: ''
    }
  }

  updateSel(t){
    let index = t.findIndex(each => each.checked);
    this.setState({
      idx: index,
      boxstate: t[index],
      h: t[index].hsl[0],
      s: t[index].hsl[1],
      l: t[index].hsl[2]
    }, this.checkstate);
  }

  checkstate(){
    console.log(this.state);
    console.log(this.state.h)
    console.log(this.state.s)
    console.log(this.state.l)
  }

  hChanges(e){
    console.log(e.target.value);
    this.setState({
      h: e.target.value
    }, this.printstate);
  }

  sChanges(e){
    console.log(e.target.value);
    this.setState({
      s: e.target.value
    }, this.printstate);
  }

  lChanges(e){
    console.log(e.target.value);
    this.setState({
      l: e.target.value
    }, this.printstate);
  }

  printstate(){
    console.log(this.state);
  }

  update(){
    this.props.update(this.state.h)
  }

  render(){
    return(
      <div>
        <h1 className="app-title">Color Editor</h1>
        <Colorboxes
        onSelectionChange={t => this.updateSel(t)}
        />
        <div className="divider"></div>
        <div className="subMenuContainer">
          <button className="subMenu">Values</button>
          <button className="subMenu">Adjustments</button>
        </div>

        <div>HSL</div>
        <div className="slidecontainer">
          <input type="range" min="0" max="360" className="slider-hsl-h slider" id="myRange" value={this.state.h}
          onChange={this.hChanges.bind(this)}></input>
          <input type="range" min="0" max="100" className="slider-hsl-s slider" id="myRange" value={this.state.s} 
          onChange={this.sChanges.bind(this)}></input>
          <input type="range" min="0" max="100" className="slider-hsl-l slider" id="myRange" value={this.state.l}
          onChange={this.lChanges.bind(this)}></input>
        </div>
      </div>
    )
  }
}

