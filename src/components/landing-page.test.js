import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LandingPage} from './landing-page'

Enzyme.configure({adapter: new Adapter()});

describe('<LandingPage />', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<LandingPage />);
  })
})