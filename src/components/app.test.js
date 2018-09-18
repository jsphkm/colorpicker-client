import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './app';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const dispatch = jest.fn();
  shallow(<App title="Foo" lists={[]} dispatch={dispatch} />);
});
