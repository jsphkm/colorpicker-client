import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PalettesList} from './paletteslist';

Enzyme.configure({adapter: new Adapter()});

const dispatch = jest.fn().mockImplementation(() =>
      Promise.resolve({colors: ['foo', 'bar']})
    );

describe('<PalettesList />', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<PalettesList 
      palettes={['palettes']}
      authToken={'authToken'}
      loggedIn={true}
      dispatch={dispatch}
    />);
  })
})