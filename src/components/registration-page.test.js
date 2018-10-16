import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {RegistrationPage} from './registration-page';

Enzyme.configure({adapter: new Adapter()})

describe('<RegistrationPage />', () => {
  it('Renders without crashing', () => {
      shallow(<RegistrationPage />);
  });
})