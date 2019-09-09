import React from 'react';
import { mount } from 'enzyme';
import OnOffSwitch from './OnOffSwitch';

describe('OnOffSwitch', () => {
  test('renders correctly', () => {
    const wrapper = mount(<OnOffSwitch />);
    expect(wrapper.exists()).toBe(true);
  });

  test('change active state on clicking', () => {
    const wrapper = mount(<OnOffSwitch />);

    expect(wrapper.text()).toBe('No');

    wrapper.simulate('click');

    expect(wrapper.text()).toBe('Yes');
  });

  // Dummy example for fetching data
  // test('fetching data', () => {
  // import apiCall from "./apiCall"
  // jest.mock("apiCall", () => jest.fn())
  //   const wrapper = mount(<OnOffSwitch />);
  //   wrapper.simulate('click');

  //   expect(apiCall).toHaveBeenCalledTimes(1);
  //   expect(apiCall).toHaveBeenCalledWith({ id: 123, key: '1'})

  //   expect(wrapper.text()).toBe('Loading');
  //   expect(wrapper.find('button').prop('disabled')).toBe(true);
  // });
});
