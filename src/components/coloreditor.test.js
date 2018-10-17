import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Coloreditor} from './coloreditor';

Enzyme.configure({adapter: new Adapter()})
  describe('<Coloreditor />', () => {
    let editor = {colorOptions: [
      {
        checked: true,
        color: {
          hue: 27,
          saturation: 38,
          lightness: 15
      }
      },
      {
        checked: false,
        color: {
          hue: 27,
          saturation: 38,
          lightness: 15
        }
      },
      {
        checked: false,
        color: {
          hue: 27,
          saturation: 38,
          lightness: 15
        }
      }
    ]}
    let checkedColor = {
      checked: true,
      color: {
        hue: 27,
        saturation: 38,
        lightness: 15
      }
    }
    let checkedColorIndex = 0;
    let authToken = 'authToken';
    let store = {
      editor: 'editor',
      checkedColor: 'checkedColor',
      checkedColorIndex: 'checkedColorIndex',
      authToken: 'authToken'
    }

  it('Renders without crashing', () => {
    const dispatch = jest.fn().mockImplementation(() =>
      Promise.resolve({colors: ['foo', 'bar']})
    );
    shallow(<Coloreditor
      editor={editor}
      checkedColor={checkedColor}
      checkedColorIndex={checkedColorIndex}
      authToken={authToken}
      dispatch={dispatch}
      match={{params: 1}}
    />);
  });
});