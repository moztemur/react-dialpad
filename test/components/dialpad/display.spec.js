import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Display from '../../../src/components/dialpad/display';
import BackButton from '../../../src/components/dialpad/back-button';

describe('<Display/>', function () {
  it('should have an input and a BackButton', function () {
    const wrapper = shallow(<Display/>);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('BackButton')).to.have.length(1);
  });

  it('should have props for onPressed', function () {
    const wrapper = shallow(<Display/>);
    expect(wrapper.props().value).to.be.defined;
    expect(wrapper.props().onBackButtonPressed).to.be.defined;
  });
});