import React from 'react';
import { shallow } from 'enzyme';

import Root from '../Root';

describe('<Root/>', () => {
  it('should mount', () => {
    const wrapper = shallow(<Root/>);
    expect(wrapper).toBeDefined();
  });
});
