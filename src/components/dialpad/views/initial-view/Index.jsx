import React, { Component } from 'react';
import Display from './display';
import Keypad from './keypad';
import Action from './action';

class InitialView extends Component {
	constructor() {
		super();
		this.state = {
			display: ''
		};
		this.onDigitPressed = this.onDigitPressed.bind(this);
		this.onBackPressed = this.onBackPressed.bind(this);
		this.onCallPressed = this.onCallPressed.bind(this);
	}

	onDigitPressed(value) {
		const { onDigitPressed } = this.props;
		const currentDisplay = this.state.display;

		this.setState({
			display: currentDisplay + value
		});
		if (onDigitPressed) {
			onDigitPressed(value);
		}
	}

	onBackPressed() {
		const { onBackPressed } = this.props;
		const currentDisplay = this.state.display;

		this.setState({
			display: currentDisplay.slice(0, -1)
		});
		if (onBackPressed) {
			onBackPressed();
		}
	}

	onCallPressed() {
		const { onCallPressed } = this.props;

		if (onCallPressed) {
			onCallPressed(this.state.display);
		}
	}

	render() {
		const { style } = this.props;

		return (
			<div className='initial-view' style={style}>
				<Display
					value={this.state.display}
				/>
				<Keypad onDigitPressed={this.onDigitPressed} />
				<Action
					onBackPressed={this.onBackPressed}
					onCallPressed={this.onCallPressed}
				/>
			</div >
		);
	}
}

export default InitialView;
