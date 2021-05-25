import  NestedTable  from "./index"
import React from 'react';

import { shallow, configure, mount } from 'enzyme';

  
it('renders proper page', () => {
    
    const wrapper = shallow(<NestedTable role="DO" />);

    // Let's check what wrong in our instance
   
    // Expect the wrapper object to be defined
    expect(wrapper.find('.nestedTable')).toBeDefined();
    // expect(wrapper.find('.item')).toHaveLength(items.length);
  });
  it('renders Nested table properly', () => {
    
    const wrapper = shallow(<NestedTable role="DO" />);

    // Let's check what wrong in our instance

    // Expect the wrapper object to be defined
    expect(wrapper.find('.nestedTableBody')).toBeDefined();
});
it('Checking sort functionality', () => {
    
    const wrapper = shallow(<NestedTable role="DO" />);

    // Let's check what wrong in our instance
    wrapper.find("#sort-button").simulate("click")
    wrapper.find("#sort-div").hasClass("filterHovered")
});
it('Checking filter functionality', () => {
    
    const wrapper = shallow(<NestedTable role="DO" />);

    // Let's check what wrong in our instance
    wrapper.find("#filter-button").simulate("click")
    expect(wrapper.find("#filter-div").hasClass("filterHovered"))
});
it('Checking Expanded Table functionality', () => {
    
    const wrapper = shallow(<NestedTable role="DO" />);

    // Let's check what wrong in our instance
    wrapper.find("#expand-button").simulate("click")
    expect(wrapper.find("#expand-row")).toBeDefined()
});