import React from 'react';
import { shallow } from 'enzyme';
import Categorynav from './categorynav';

describe('Categorynav', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Categorynav />);
    expect(wrapper).toMatchSnapshot();
  });
});
