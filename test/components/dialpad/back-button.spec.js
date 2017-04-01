import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import BackButton from '../../../src/components/dialpad/back-button';

describe('<BackButton/>', function () {
  it('should have a div', function () {
    const wrapper = shallow(<BackButton/>);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should have props for onPressed', function () {
    const wrapper = shallow(<BackButton/>);
    expect(wrapper.props().onPressed).to.be.defined;
  });
});