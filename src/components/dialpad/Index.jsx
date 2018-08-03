import React, { Component } from 'react';
import CallView from './views/call-view';
import InitialView from './views/initial-view';

class Dialpad extends Component {
	constructor() {
		super();
		this.state = {
			state: '',
			call: {}
		};
		this.onDigitPressed = this.onDigitPressed.bind(this);
		this.onBackPressed = this.onBackPressed.bind(this);
		this.onCallPressed = this.onCallPressed.bind(this);
		this.onCallEndPressed = this.onCallEndPressed.bind(this);
		this.onRinging = this.onRinging.bind(this);
		this.onCall = this.onCall.bind(this);
	}

	onDigitPressed(value) {
		const { onDigitPressed } = this.props;

		if (onDigitPressed) {
			onDigitPressed(value);
		}
	}

	onBackPressed() {
		const { onBackPressed } = this.props;

		if (onBackPressed) {
			onBackPressed();
		}
	}

	onCallPressed(number) {
		const { onCallPressed } = this.props;
		const call = {

		};

		this.setState({
			state: 'callling',
			call: call
		});

		if (onCallPressed) {
			onCallPressed(call);
		}
	}

	onCallEndPressed() {
		const { onCallEndPressed } = this.props;

		this.setState({
			state: ''
		});

		if (onCallEndPressed) {
			onCallEndPressed();
		}
	}

	onRinging() {
		this.setState({
			state: 'ringing'
		});
	}

	onCall() {
		this.setState({
			state: 'call'
		});
	}

	render() {
		const { style } = this.props;
		let view;
		let contact = {
			avatar: null,
			name: 'John Doe',
			number: '+1234567890'
		};

		if (this.state.state === '') {
			view = <InitialView
				onCallPressed={this.onCallPressed}
			/>;

		} else {
			view = <CallView
				contact={contact}
				state={this.state.state}
				call={this.state.call}
				onCall={this.onCall}
				onRinging={this.onRinging}
				onCallEndPressed={this.onCallEndPressed}
			/>;
		}

		return (
			<div className='dialpad' style={style}>
				{view}
			</div >
		);
	}
}

export default Dialpad;
