import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RequiresLogin from './requires-login';

Enzyme.configure({adapter: new Adapter()});

describe('<RequiresLogin />', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<RequiresLogin />);
  })
})