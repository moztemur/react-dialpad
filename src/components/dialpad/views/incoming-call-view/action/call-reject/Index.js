import React from 'react';
import Button from '../../../../_shared/button/Index';

class CallReject extends React.Component {
  render() {
    const { ...otherProps } = this.props;

    return <Button def="Reject" className="call-reject" {...otherProps} />;
  }
}

export default CallReject;
