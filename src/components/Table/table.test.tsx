import  RestaurantTable  from "./index"
import React from 'react';

import { shallow, configure, mount } from 'enzyme';

  
it('renders proper page', () => {
    
    const wrapper = shallow(<RestaurantTable  />);

    // Let's check what wrong in our instance
   
    // Expect the wrapper object to be defined
    expect(wrapper.find('.restaurantTable')).toBeDefined();
    // expect(wrapper.find('.item')).toHaveLength(items.length);
  });
  it('renders table properly', () => {
    
    const wrapper = shallow(<RestaurantTable  />);

    // Let's check what wrong in our instance

    // Expect the wrapper object to be defined
    expect(wrapper.find('.restaurantTableBody')).toBeDefined();
});
it('Checking sort functionality', () => {
    
    const wrapper = shallow(<RestaurantTable  />);

    // Let's check what wrong in our instance
    wrapper.find("#sort-button").simulate("click")
    wrapper.find("#sort-div").hasClass("filterHovered")
});
it('Checking filter functionality', () => {
    
    const wrapper = shallow(<RestaurantTable  />);

    // Let's check what wrong in our instance
    wrapper.find("#filter-button").simulate("click")
    wrapper.find("#filter-div").hasClass("filterHovered")
});