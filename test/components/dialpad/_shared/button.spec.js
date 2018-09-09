import React from 'react';
import Button from '../../../src/components/dialpad/_shared/button';
import renderer from 'react-test-renderer';

test('Button', () => {
  const component = renderer.create(
    <Button className="digit" value={2} subvalue={'abc'} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});