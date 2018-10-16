import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from './login-form';

Enzyme.configure({adapter: new Adapter()});

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    Enzyme.shallow(<LoginForm />);
  })
})