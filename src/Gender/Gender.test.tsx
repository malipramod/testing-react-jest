import * as React from 'react';
import { shallow } from 'enzyme';
import { Gender } from './Gender';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<Gender male="Male" female="Female" />);

  // Interaction demo
  expect(checkbox.text()).toEqual('Female');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('Male');

  // Snapshot demo
//   console.log(checkbox);
  expect(checkbox).toMatchSnapshot();
});