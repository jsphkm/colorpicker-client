import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Colorboxes} from './colorboxes';

Enzyme.configure({adapter: new Adapter()})

describe('<Colorboxes />', () => {
  it('Renders without crashing', () => {
    const colorOptions = ['red','white', 'blue']
    shallow(<Colorboxes
      colorOptions={colorOptions}
    />);
  });

  it('Renders the add button initially', () => {
    const colorOptions = ['red','white', 'blue']
    const wrapper = shallow(<Colorboxes 
      colorOptions={colorOptions} />);
    expect(wrapper.find('.add-button').hasClass('add-button')).toEqual(true);
  });

  it('Renders the remove button initially', () => {
    const colorOptions = ['red','white', 'blue']
    const wrapper = shallow(<Colorboxes 
      colorOptions={colorOptions} />);
    expect(wrapper.find('.remove-button').hasClass('remove-button')).toEqual(true);
  });
})