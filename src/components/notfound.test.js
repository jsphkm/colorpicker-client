import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './notfound';

Enzyme.configure({adapter: new Adapter()});

describe('<NotFound />', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<NotFound 
    location={{pathname: 'pathname'}}
    />)
  })
})