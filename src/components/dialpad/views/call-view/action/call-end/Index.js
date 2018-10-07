import React from 'react';
import Button from '../../../../_shared/button/Index';

class CallEnd extends React.Component {
  render() {
    const { ...otherProps } = this.props;

    return <Button def="Call End" className="call-end" {...otherProps} />;
  }
}

export default CallEnd;
