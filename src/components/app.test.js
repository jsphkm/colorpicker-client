import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({adapter: new Adapter()})

describe('<App />', () => {
  it('Renders without crashing', () => {
      Enzyme.shallow(<App />);
  });
})
