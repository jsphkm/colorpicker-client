import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationForm from './registration-form';

Enzyme.configure({adapter: new Adapter()})

describe('<RegistrationForm />', () => {
  it('Renders without crashing', () => {
      Enzyme.shallow(<RegistrationForm onSubmit={false}/>);
  });
})