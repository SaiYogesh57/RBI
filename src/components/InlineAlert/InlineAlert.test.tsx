import InlineAlert, { TestProps } from "./index"
import React from 'react';

import { shallow, configure } from 'enzyme';
  
it('renders proper page', () => {
    
    const wrapper = shallow(<InlineAlert alertType={"Warning"} />);

    // Let's check what wrong in our instance
   
    // Expect the wrapper object to be defined
    expect(wrapper.find('.alertMessage')).toBeDefined();
    // expect(wrapper.find('.item')).toHaveLength(items.length);
  });
  it('renders correct warning toast', () => {
    
    const wrapper = shallow(<InlineAlert alertType={"Warning"} />);

    // Let's check what wrong in our instance
   
    // Expect the wrapper object to be defined
    expect(wrapper.find('.alertMessage').text()).toMatch(/Warning/);
    // expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  it('renders correct success toast', () => {
    
    const wrapper = shallow(<InlineAlert alertType={"Success"} />);

    // Let's check what wrong in our instance
    

    // Expect the wrapper object to be defined
    expect(wrapper.find('.alertMessage').text()).toMatch(/Success/);
    
  });
  it('renders correct neutral toast', () => {
    
    const wrapper = shallow(<InlineAlert alertType={"Neutral"} />);

    // Let's check what wrong in our instance
    

    // Expect the wrapper object to be defined
    expect(wrapper.find('.alertMessage').text()).toMatch(/Neutral/);
    
  });