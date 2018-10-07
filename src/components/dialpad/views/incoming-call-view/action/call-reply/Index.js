import React from 'react';
import Button from '../../../../_shared/button/Index';

class CallReply extends React.Component {
  render() {
    const { ...otherProps } = this.props;

    return <Button def="Reply" className="call-reply" {...otherProps} />;
  }
}

export default CallReply;
