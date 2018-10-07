import React, { Component } from 'react';

import CallView from './views/call-view/Index';
import InitialView from './views/initial-view/Index';
import IncomingCallView from './views/incoming-call-view/Index';

import { CLASS_PREFIX } from '../../util/constants';
import STATES from '../../util/states';
import ACTIONS from '../../util/actions';

class ReactDialpad extends Component {
  constructor() {
    super();
    this.state = {
      state: STATES.DEFAULT,
      timer: null,
      startTime: null,
      contact: {}
    };
    this.onCallPressed = this.onCallPressed.bind(this);
    this.onCallEndPressed = this.onCallEndPressed.bind(this);
    this.onCallReplyPressed = this.onCallReplyPressed.bind(this);
    this.onCallRejectPressed = this.onCallRejectPressed.bind(this);

    this.setRinging = this.setRinging.bind(this);
    this.setOnCall = this.setOnCall.bind(this);
    this.setIncomingCall = this.setIncomingCall.bind(this);
    this.endCall = this.endCall.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { onStateChanged } = this.props;

    if (prevState.state !== this.state.state) {
      if (onStateChanged) {
        onStateChanged(this.state.state);
      }
    }
  }

  onCallPressed(number) {
    const { onActionInvoked } = this.props;

    this.setState({
      state: STATES.CALLING,
      contact: {
        avatar: null,
        name: number, // TODO: Replaced with the real contact name in provided addressbook
        number: number
      }
    });

    if (onActionInvoked) {
      onActionInvoked(ACTIONS.CALL_STARTED, { number });
    }
  }

  onCallEndPressed() {
    const { onActionInvoked } = this.props;

    this.setState({
      state: STATES.ENDING
    });

    if (onActionInvoked) {
      onActionInvoked(ACTIONS.CALL_ENDED);
    }
  }

  onCallReplyPressed() {
    if (this.state.state !== STATES.INCOMING_CALL) {
      throw new Error('Call can be replied only on INCOMING_CALL state');
    }
    const { onActionInvoked } = this.props;

    this.setState({
      state: STATES.REPLYING
    });

    if (onActionInvoked) {
      onActionInvoked(ACTIONS.CALL_REPLIED);
    }
  }

  onCallRejectPressed() {
    if (this.state.state !== STATES.INCOMING_CALL) {
      throw new Error('Call can be rejected only on INCOMING_CALL state');
    }
    const { onActionInvoked } = this.props;

    this.setState({
      state: STATES.REJECTING
    });

    if (onActionInvoked) {
      onActionInvoked(ACTIONS.CALL_REJECTED);
    }
  }

  setOnCall() {
    if (this.state.state === STATES.RINGING ||
			this.state.state === STATES.REPLYING ||
			this.state.state === STATES.CALLING) {
      this.setState({
        state: STATES.ON_CALL,
        startTime: Date.now()
      });

      this.timer = setInterval(() => {
        this.setState({
          timer: Math.floor((Date.now() - this.state.startTime) / 1000)
        });
      }, 1000);
    } else {
      throw new Error('ON_CALL state can only be navigated from RINGING, REPLYING or CALLING');
    }
  }

  setRinging() {
    if (this.state.state !== STATES.CALLING) {
      throw new Error('RINGING state can only be navigated CALLING');
    }
    this.setState({
      state: STATES.RINGING
    });
  }

  setIncomingCall(contact) {
    if (this.state.state !== STATES.DEFAULT) {
      throw new Error('Multiple call not supported.');
    }
    this.setState({
      contact,
      state: STATES.INCOMING_CALL
    });
  }

  endCall() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState({
      state: STATES.DEFAULT,
      startTime: null,
      timer: null,
      contact: {}
    });
  }

  render() {
    const { style } = this.props;
    let view;

    if (this.state.state === STATES.DEFAULT) {
      view = <InitialView
        onCallPressed={this.onCallPressed}
      />;
    } else if (this.state.state === STATES.INCOMING_CALL ||
					this.state.state === STATES.REPLYING ||
					this.state.state === STATES.REJECTING) {
      view = <IncomingCallView
        contact={this.state.contact}
        state={this.state.state}
        onCallRejectPressed={this.onCallRejectPressed}
        onCallReplyPressed={this.onCallReplyPressed}
      />;
    } else {
      view = <CallView
        contact={this.state.contact}
        state={this.state.state}
        timer={this.state.timer}
        onCallEndPressed={this.onCallEndPressed}
      />;
    }

    return (
      <div className={`${CLASS_PREFIX}-root`} style={style}>
        {view}
      </div >
    );
  }
}

export default ReactDialpad;
