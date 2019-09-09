import React from 'react';
import { mount } from 'enzyme';
import OnOffSwitchClass from './OnOffSwitchClass';

describe('OnOffSwitchClass', () => {
  test('renders correctly', () => {
    const wrapper = mount(<OnOffSwitchClass />);
    expect(wrapper.exists()).toBe(true);
  });

  test('change active state on clicking', () => {
    const wrapper = mount(<OnOffSwitchClass />);

    // expect(wrapper.text()).toBe('No');
    expect(wrapper.state().isActive).toBe(false);

    wrapper.simulate('click');

    // expect(wrapper.text()).toBe('Yes');
    expect(wrapper.state().isActive).toBe(true);
  });
});
