import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Dashboard} from './dashboard';

Enzyme.configure({adapter: new Adapter()});

describe('<Dashboard/>', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<Dashboard />);
  });
});