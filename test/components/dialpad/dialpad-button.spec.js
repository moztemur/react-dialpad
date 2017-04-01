import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import DialpadButton from '../../../src/components/dialpad/dialpad-button';

describe('<DialpadButton/>', function () {
  it('should have props for onPressed, value and letters', function () {
    const wrapper = shallow(<DialpadButton/>);
    expect(wrapper.props().onPressed).to.be.defined;
    expect(wrapper.props().onPressed).to.be.value;
    expect(wrapper.props().onPressed).to.be.letters;
  });
});