import React from 'react';
import {connect} from 'react-redux';
import {getPalettes, renderPalettes} from '../actions/palettes';
import {Link} from 'react-router-dom';
import './paletteslist.css';

const Colorpalette = function(props) {
  const {_id, colors} = props;
  const eachpalette = colors.map((color, idx) => (
    <div className="color-div" style={{
      backgroundColor: 
      `hsl(
        ${color.hue}, 
        ${color.saturation}%, 
        ${color.lightness}%
      )`
    }}
    key={idx}
    id={_id}
    ></div>
  ));

  return (
    <li>
      {/* <Link to={`/user/editor?v=${_id}`}  */}
      <Link to={{
        pathname: `/user/editor/${_id}`,
        query: `${_id}`
      }} 
      className="palette-div"
      >{eachpalette}</Link>
    </li>
    
  )
}

export class PalettesList extends React.Component {
  componentDidMount() {
    this.props
      .dispatch(getPalettes(this.props.authToken))
      .then(results => {
        this.props.dispatch(renderPalettes(results))
      })
  }
  render() {
    let palettesList;
    if (this.props.palettes) {
      palettesList = this.props.palettes.map((palette, idx) => (
        <Colorpalette 
          key={idx}
          _id={palette.id}
          colors={palette.colors}
        />
      ))
    }
    else {
      palettesList = <div>No saved palettes</div>
    }

    return (
      <div>
        <ul>{palettesList}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  palettes: state.main.dashboard.palettes,
  authToken: state.auth.authToken,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(PalettesList);