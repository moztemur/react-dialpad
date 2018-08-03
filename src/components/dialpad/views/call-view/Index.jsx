import React, { Component } from 'react';

import Contact from './contact';
import Status from './status';
import Timer from './timer';
import Action from './action';

class CallView extends Component {
	constructor() {
		super();
		this.state = {
			call: {},
			timer: ''
		};
		this.onCallEndPressed = this.onCallEndPressed.bind(this);
		this.onRinging = this.onRinging.bind(this);
		this.onCall = this.onCall.bind(this);
	}

	componentDidMount() {
		const { call } = this.props;

		if (call) {
			call.onCall = this.onCall;
			call.onRinging = this.onRinging;
		}
	}

	onRinging() {
		const { onRinging } = this.props;

		if (onRinging) {
			onRinging();
		}
	}

	onCall() {
		const { onCall } = this.props;

		this.setState({
			timer: '11:22:33'
		});

		if (onCall) {
			onCall();
		}
	}

	onCallEndPressed() {
		const { onCallEndPressed } = this.props;

		if (onCallEndPressed) {
			onCallEndPressed();
		}
	}

	render() {
		const { style, contact, state } = this.props;
		let statusOrTimer;

		if (this.state.timer === '') {
			statusOrTimer = <Status state={state} />;
		} else {
			statusOrTimer = <Timer timer={this.state.timer} />;
		}

		return (
			<div className='call-view' style={style}>
				<Contact contact={contact} />
				{statusOrTimer}
				<Action
					onCallEndPressed={this.onCallEndPressed}
				/>
			</div >
		);
	}
}

export default CallView;
