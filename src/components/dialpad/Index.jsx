import React, { Component } from 'react';

import CallView from './views/call-view';
import InitialView from './views/initial-view';

import { CLASS_PREFIX } from '../../util/constants';

class Dialpad extends Component {
	constructor() {
		super();
		this.state = {
			state: '',
			call: {},
			contact: {}
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

		this.setState({
			state: 'callling',
			contact: {
				avatar: null,
				name: '<Unnamed>',
				number: number
			}
		});

		if (onCallPressed) {
			onCallPressed(this.state.call);
		}
	}

	onCallEndPressed() {
		const { onCallEndPressed } = this.props;
		const { call } = this.state;

		call.active = false;

		this.setState({
			state: '',
			call
		});

		if (onCallEndPressed) {
			onCallEndPressed(this.state.call);
		}
	}

	onRinging() {
		if (this.state.call.active !== false) {
			this.setState({
				state: 'ringing'
			});
		}
	}

	onCall() {
		if (this.state.call.active !== false) {
			this.setState({
				state: 'call'
			});
		}
	}

	render() {
		const { style } = this.props;
		let view;

		if (this.state.state === '') {
			view = <InitialView
				onCallPressed={this.onCallPressed}
			/>;
		} else {
			view = <CallView
				contact={this.state.contact}
				state={this.state.state}
				call={this.state.call}
				onCall={this.onCall}
				onRinging={this.onRinging}
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

export default Dialpad;
