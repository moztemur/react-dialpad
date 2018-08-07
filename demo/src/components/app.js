import React, { Component } from 'react';
import { Dialpad } from '../../../dist/bundle';

class App extends Component {
	constructor() {
		super();
		this.state = {
			call: {}
		};
		this.startCall = this.startCall.bind(this);
	}

	startCall(call) {
		this.setState({
			call: call
		});
		setTimeout(() => {
			this.state.call.onRinging();
		}, 5000);
		setTimeout(() => {
			this.state.call.onCall();
		}, 10000);
	}

	render() {
		const style = {
			width: '100%',
			height: '100%'
		};

		return (
			<div className="app">
				<Dialpad
					style={style}
					onCallPressed={this.startCall}
				/>
			</div>
		);
	}
}

export default App;
