import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginPage} from './login-page';

Enzyme.configure({adapter: new Adapter()});

describe('<LoginPage />', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<LoginPage />);
  })
})