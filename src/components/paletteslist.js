import React from 'react';
import {connect} from 'react-redux';
import {getPalettes, renderPalettes} from '../actions/palettes';
import './paletteslist.css';

const Colorpalette = function(props) {
  const {_id, colors} = props;
  console.log(_id);
  return (
    colors.map((color, idx) => (
      <div className="colorbox-palette" style={{
        backgroundColor: 
        `hsl(
          ${color.hue}, 
          ${color.saturation}%, 
          ${color.lightness}%
        )`
      }}
      key={idx}
      ></div>
    ))
  )
}

export class PalettesList extends React.Component {
  componentDidMount() {
    return this.props
      .dispatch(getPalettes())
      .then(results => {
        this.props.dispatch(renderPalettes(results))
      })
  }
  render() {

    console.log(this.props.palettes)
    const palettesList = this.props.palettes.map((palette, idx) => (
      <Colorpalette 
        key={idx}
        _id={palette.id}
        colors={palette.colors}
      />
    ))

    return (
      <div>
        <div>{palettesList}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  palettes: state.main.dashboard.palettes
});

export default connect(mapStateToProps)(PalettesList);