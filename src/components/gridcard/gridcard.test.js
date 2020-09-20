import React from 'react';
import { shallow } from 'enzyme';
import Gridcard from './gridcard';

describe('Gridcard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Gridcard />);
    expect(wrapper).toMatchSnapshot();
  });
});
