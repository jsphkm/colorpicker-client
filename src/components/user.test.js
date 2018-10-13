import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import User from './user';

Enzyme.configure({adapter: new Adapter()})

describe('<User />', () => {
  it('Renders without crashing', () => {
      Enzyme.shallow(<User />);
  });
})