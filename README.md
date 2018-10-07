# React Dialpad #

![npm](https://img.shields.io/npm/v/react-dialpad.svg) ![travis](https://img.shields.io/travis/mhmtztmr/react-dialpad.svg)

React Dialpad provides you a simple UI independent of communication platform to create calls and handle incoming calls.

[Demo](https://mhmtztmr.github.io/react-dialpad/demo/) using [Peer.js](https://peerjs.com/)

Open demo on two browser windows to see peer-to-peer behaviour.

## Install ##

`npm i react-dialpad`

## Features ##

Component interaction is achieved in two ways:

	- Prop of `onActionInvoked` in order to listen actions invoked by user via UI buttons
	- Component methods in order to update component

## Props ##

### onActionInvoked(action, data) ###

Called when an action is invoked by the user by pressing buttons

Params:
  - action: One of the following actions
    - CALL_STARTED: Invoked when Call button is pressed
    - CALL_ENDED: Invoked when the Call End button pressed
    - CALL_REPLIED: Invoked when the Call Reply button pressed
    - CALL_REJECTED: Invoked when the Call Reject button pressed
  - data: Data related to action. e.g. called number for CALL_STARTED action

### onStateChanged(state) ###

Called when any state change has occured. Just for loggin purpose

States:
- DEFAULT:
- CALLING:
- RINGING:
- ON_CALL:
- INCOMING_CALL:
- REPLYING:
- REJECTING:
- ENDING

## Methods ##

Methods can be accessed using [Refs](https://reactjs.org/docs/refs-and-the-dom.html)

### setRinging() ###

- Navigates to RINGING state.

### setOnCall() ###

- Navigates to ON_CALL state.

### endCall() ###

- Resets to DEFAULT state.

### setIncomingCall(contact) ###

- Navigates to INCOMING_CALL state. contact: {	name, number }

## Inspired by ##

https://dribbble.com/shots/2280148-Day-003-Animated-Dial-Pad
https://codepen.io/anon/pen/mWvymM

## Example Usage ##

```JavaScript
import React from 'react';
import Peer from 'peerjs';

import ReactDialpad from 'react-dialpad';

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
```
