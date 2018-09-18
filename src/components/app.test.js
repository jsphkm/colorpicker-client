import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './app';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const dispatch = jest.fn();
  shallow(<App title="Foo" dispatch={dispatch} />);
});
