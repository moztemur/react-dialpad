import React from 'react';
import Peer from 'peerjs';

import ReactDialpad from '../../../dist/bundle';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			number: '',
		};
		this.peer = null;
		this.call = null;
		this.getUserMedia = this.getUserMedia.bind(this);
		this.registerCallEvents = this.registerCallEvents.bind(this);
		this.registerPeerEvents = this.registerPeerEvents.bind(this);

		this.onActionInvoked = this.onActionInvoked.bind(this);
		this.onStateChanged = this.onStateChanged.bind(this);
		this.onCallStarted = this.onCallStarted.bind(this);
		this.onCallEnded = this.onCallEnded.bind(this);
		this.onCallReplied = this.onCallReplied.bind(this);
		this.onCallRejected = this.onCallRejected.bind(this);
	}

	componentDidMount() {
		const number = Date.now().toString().slice(-5);
		this.setState({
			number
		});
		const that = this;
		this.peer = new Peer(number, { secure: true, port: 443, debug: 3 });
		this.registerPeerEvents(this.peer);
	}

	getUserMedia() {
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		return new Promise((resolve, reject) => {
			navigator.getUserMedia({ video: true, audio: true }, resolve, reject);
		});
	}

	registerCallEvents(call) {
		call.on('stream', (remoteStream) => {
			this.dialpad.setOnCall();
		});
		call.on('close', () => {
			this.dialpad.endCall();
		});
	}

	registerPeerEvents(peer) {
		peer.on('call', (call) => {
			this.call = call;
			this.dialpad.setIncomingCall({
				name: call.peer,
				number: call.peer
			});
		});
	}

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
		console.log('to state', state);
	}

	onCallStarted(number) {
		console.log('Calling...', number);
		this.getUserMedia().then((stream) => {
			this.call = this.peer.call(number, stream);
			this.dialpad.setRinging();
			this.registerCallEvents(this.call);
		}).catch((err) => {
			console.log('Failed to get local stream', err);
		});
	}

	onCallEnded() {
		if (this.call.open) {
			this.call.close();
		} else {
			this.dialpad.endCall();
		}
	}

	onCallReplied() {
		this.getUserMedia().then((stream) => {
			this.call.answer(stream); // Answer the call with an A/V stream.
			this.registerCallEvents(this.call);
		}).catch((err) => {
			console.log('Failed to get local stream', err);
		});
	}

	onCallRejected() {
		if (this.call.open) {
			this.call.close();
		} else {
			this.dialpad.endCall();
		}
	}

	render() {
		const style = {
			margin: '0 30px',
			float: 'left',
		};

		return (
			<div className="app">
				<div style={style}>Your number: {this.state.number}</div>
				<ReactDialpad
					style={style}
					ref={dialpad => (this.dialpad = dialpad)}
					onActionInvoked={this.onActionInvoked}
					onStateChanged={this.onStateChanged}
				/>
			</div>
		);
	}
}

export default App;
