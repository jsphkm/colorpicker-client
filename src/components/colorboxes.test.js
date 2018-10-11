import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Colorbox from './colorboxes';

Enzyme.configure({adapter: new Adapter()})

describe('<Colorbox />', () => {
  it('Renders without crashing', () => {
      Enzyme.shallow(<Colorbox />);
  });
})