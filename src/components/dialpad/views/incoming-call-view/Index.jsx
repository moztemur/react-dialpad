import React, { Component } from 'react';

import Contact from './contact';
import Status from './status';
import Action from './action';

class IncomingCallView extends Component {
	constructor() {
		super();
		this.onCallRejectPressed = this.onCallRejectPressed.bind(this);
		this.onCallReplyPressed = this.onCallReplyPressed.bind(this);
	}

	onCallRejectPressed() {
		const { onCallRejectPressed } = this.props;

		if (onCallRejectPressed) {
			onCallRejectPressed();
		}
	}

	onCallReplyPressed() {
		const { onCallReplyPressed } = this.props;

		if (onCallReplyPressed) {
			onCallReplyPressed();
		}
	}

	render() {
		const { style, contact, state } = this.props;

		return (
			<div className='incoming-call-view' style={style}>
				<Contact contact={contact} />
				<Status state={state} />
				<Action
					state={state}
					onCallRejectPressed={this.onCallRejectPressed}
					onCallReplyPressed={this.onCallReplyPressed}
				/>
			</div >
		);
	}
}

export default IncomingCallView;
