import React, { Component } from 'react';

import CallEnd from './call-end/Index';
// import Camera from './camera';
// import Microphone from './microphone';
// import Speaker from './speaker';
// import Keypad from './keypad';

import STATES from '../../../../../util/states';

class Action extends Component {
  constructor() {
    super();
    this.onCallEndPressed = this.onCallEndPressed.bind(this);
  }

  onCallEndPressed() {
    const { onCallEndPressed } = this.props;

    if (onCallEndPressed) {
      onCallEndPressed();
    }
  }

  render() {
    const { state } = this.props;

    let buttons = <div className="buttons">
      <div className="button-spacer">
      </div>
      <CallEnd
        onPressed={this.onCallEndPressed}
        callState={state}
        enablerStates={[STATES.CALLING, STATES.RINGING, STATES.ON_CALL]}
      />
      {/* <Camera />
			<Microphone />
			<Speaker />
			<Keypad /> */}
    </div>;

    return buttons;
  }
}

export default Action;
