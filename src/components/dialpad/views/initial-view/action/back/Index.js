import React from 'react';
import Button from '../../../../_shared/button/Index';

class Back extends React.Component {
  render() {
    const { ...otherProps } = this.props;

    return <Button className="back" {...otherProps} />;
  }
}

export default Back;
