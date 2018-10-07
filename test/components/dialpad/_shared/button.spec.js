import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../../../../src/components/dialpad/_shared/button/Index';

test('Button without subvalue to have 1 divs', () => {
  const wrapper = shallow(<Button className="digit" value={1} />);
  expect(wrapper.find('div').length).toBe(1);
});

test('Button with subvalue to have 2 divs', () => {
  const wrapper = shallow(<Button className="digit" value={2} subvalue={'abc'} />);
  expect(wrapper.find('div').length).toBe(2);
});

test('Button with subvalue 2 to have call onPress with 2', () => {
  const onPressed = jest.spyOn(Button.prototype, 'onPressed');
  const mck = jest.fn();
  const wrapper = shallow(<Button className="digit" value={2} subvalue={'abc'} onPressed={mck} />);
  wrapper.find('div').first().prop('onClick')();
  expect(onPressed).toHaveBeenCalledWith(2);
  expect(mck).toHaveBeenCalled();
});


test('Button with subvalue 2 to have call onPress with 2', () => {
  const onPressed = jest.fn();
  const wrapper = shallow(<Button className="digit" value={2} subvalue={'abc'} onPressed={onPressed} />);
  wrapper.find('div').first().prop('onClick')();
  expect(onPressed).toHaveBeenCalledWith(2);
});

test('Button with subvalue 2 and enabler states excluding call state does not call onPressed', () => {
  const onPressed = jest.fn();
  const wrapper = shallow(<Button className="digit" value={2} subvalue={'abc'} onPressed={onPressed} enablerStates={['ON_CALL']} callState={'RINGING'} />);
  wrapper.find('div').first().prop('onClick')();
  expect(onPressed).not.toHaveBeenCalled();
});