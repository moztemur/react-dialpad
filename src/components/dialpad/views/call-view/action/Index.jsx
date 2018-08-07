import React, { Component } from 'react';

import CallEnd from './call-end';
// import Camera from './camera';
// import Microphone from './microphone';
// import Speaker from './speaker';
// import Keypad from './keypad';

class Action extends Component {
	constructor() {
		super();
		this.onCallEndPressed = this.onCallEndPressed.bind(this);
	}

	onCallEndPressed() {
		const { onCallEndPressed } = this.props;

		onCallEndPressed();
	}

	render() {
		let buttons = <div className="buttons">
			<div className="button-spacer">
			</div>
			<CallEnd onPressed={this.onCallEndPressed} />
			{/* <Camera />
			<Microphone />
			<Speaker />
			<Keypad /> */}
		</div>;

		return buttons;
	}
}

export default Action;
