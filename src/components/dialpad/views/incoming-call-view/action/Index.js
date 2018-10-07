import React, { Component } from 'react';

import CallReject from './call-reject/Index';
import CallReply from './call-reply/Index';
import STATES from '../../../../../util/states';

class Action extends Component {
  constructor() {
    super();
    this.onCallReplyPressed = this.onCallReplyPressed.bind(this);
    this.onCallRejectPressed = this.onCallRejectPressed.bind(this);
  }

  onCallReplyPressed() {
    const { onCallReplyPressed } = this.props;

    if (onCallReplyPressed) {
      onCallReplyPressed();
    }
  }

  onCallRejectPressed() {
    const { onCallRejectPressed } = this.props;

    if (onCallRejectPressed) {
      onCallRejectPressed();
    }
  }

  render() {
    const { state } = this.props;

    return <div className="buttons">
      <CallReject
        onPressed={this.onCallRejectPressed}
        callState={state}
        enablerStates={[STATES.INCOMING_CALL]}
      />
      <div className="button-spacer">
      </div>
      <CallReply
        onPressed={this.onCallReplyPressed}
        callState={state}
        enablerStates={[STATES.INCOMING_CALL]}
      />
    </div>;
  }
}

export default Action;
