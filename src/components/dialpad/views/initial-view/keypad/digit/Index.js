import React from 'react';
import Button from '../../../../_shared/button/Index';

class Digit extends React.Component {
  render() {
    const { value, letters, ...otherProps } = this.props;

    return <Button className="digit" value={value} subvalue={letters} {...otherProps} />;
  }
}

export default Digit;
