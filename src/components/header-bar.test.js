import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HeaderBar} from './header-bar';

Enzyme.configure({adapter: new Adapter()});

describe('<HeaderBar />', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<HeaderBar />);
  })
})