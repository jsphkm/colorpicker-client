import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './input';

Enzyme.configure({adapter: new Adapter()});

describe('<Input />', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<Input 
    meta={{
      touched: false,
      error: false
    }}
    input={{name: 'name'}}
    />);
  })
})