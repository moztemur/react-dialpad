import React from 'react';
import { Dialpad } from '../../../dist/bundle';

class App extends React.Component {
	constructor() {
		super();

		this.onActionInvoked = this.onActionInvoked.bind(this);
		this.onStateChanged = this.onStateChanged.bind(this);
		this.onCallStarted = this.onCallStarted.bind(this);
		this.onCallEnded = this.onCallEnded.bind(this);
		this.onCallReplied = this.onCallReplied.bind(this);
		this.onCallRejected = this.onCallRejected.bind(this);

		this.onRemoteActionInvoked = this.onRemoteActionInvoked.bind(this);
		this.onRemoteCallStarted = this.onRemoteCallStarted.bind(this);
		this.onRemoteCallEnded = this.onRemoteCallEnded.bind(this);
		this.onRemoteCallReplied = this.onRemoteCallReplied.bind(this);
		this.onRemoteCallRejected = this.onRemoteCallRejected.bind(this);
	}

	/*  DIALPAD */
	onActionInvoked(action, data) {
		switch (action) {
			case 'CALL_STARTED':
				this.onCallStarted(data.number);
				break;
			case 'CALL_ENDED':
				this.onCallEnded();
				break;
			case 'CALL_REPLIED':
				this.onCallReplied();
				break;
			case 'CALL_REJECTED':
				this.onCallRejected();
				break;
			default:
				break;
		}
	}

	onStateChanged(state) {
		console.log('stateee', state);
	}

	onCallStarted(number) {
		console.log('Callling...', number);
		setTimeout(() => {
			this.dialpad.setRinging();

			this.remoteDialpad.setIncomingCall({
				name: 'You',
				number: '+1234567890'
			});
		}, 3000);
	}

	onCallEnded() {
		setTimeout(() => {
			this.dialpad.endCall();
			this.remoteDialpad.endCall();
		}, 1000);
	}

	onCallReplied(event) {
		setTimeout(() => {
			this.dialpad.setOnCall();
			this.remoteDialpad.setOnCall();
		}, 1000);
	}

	onCallRejected(event) {
		setTimeout(() => {
			this.dialpad.endCall();
			this.remoteDialpad.endCall();
		}, 1000);
	}

	/* REMOTE DIALPAD */

	onRemoteActionInvoked(action, data) {
		switch (action) {
			case 'CALL_STARTED':
				this.onRemoteCallStarted(data.number);
				break;
			case 'CALL_ENDED':
				this.onRemoteCallEnded();
				break;
			case 'CALL_REPLIED':
				this.onRemoteCallReplied();
				break;
			case 'CALL_REJECTED':
				this.onRemoteCallRejected();
				break;
			default:
				break;
		}
	}

	onRemoteCallStarted(number, event) {
		console.log('Callling...', number);
		setTimeout(() => {
			this.remoteDialpad.setRinging();
			this.dialpad.setIncomingCall({
				name: 'Remote',
				number: '+9012345678'
			});
		}, 3000);
	}

	onRemoteCallEnded(event) {
		setTimeout(() => {
			this.dialpad.endCall();
			this.remoteDialpad.endCall();
		}, 1000);
	}

	onRemoteCallReplied(event) {
		setTimeout(() => {
			this.dialpad.setOnCall();
			this.remoteDialpad.setOnCall();
		}, 1000);
	}

	onRemoteCallRejected(event) {
		setTimeout(() => {
			this.dialpad.endCall();
			this.remoteDialpad.endCall();
		}, 1000);
	}

	render() {
		const style = {
			width: '100%',
			height: '100%'
		};

		return (
			<div className="app">
				<div>You (Local): +1234567890</div>
				<Dialpad
					style={style}
					ref={dialpad => (this.dialpad = dialpad)}
					onActionInvoked={this.onActionInvoked}
					onStateChanged={this.onStateChanged}
				/>
				<div>Remote: +9012345678</div>
				<Dialpad
					style={style}
					ref={dialpad => (this.remoteDialpad = dialpad)}
					onActionInvoked={this.onRemoteActionInvoked}
				/>
			</div>
		);
	}
}

export default App;
