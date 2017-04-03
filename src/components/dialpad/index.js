import React, { Component } from 'react';
import Display from './display';
import MainButtons from './main-buttons';
import ActionButtons from './action-buttons';

class Dialpad extends Component {
	constructor() {
		super();
		this.state = {
			display: ''
		};
		this.onButtonPressed = this.onButtonPressed.bind(this);
		this.onBackButtonPressed = this.onBackButtonPressed.bind(this);
	}

	onButtonPressed(value) {
		const { onButtonPressed } = this.props;
		const currentDisplay = this.state.display;

		this.setState({
			display: currentDisplay + value
		});
		if (onButtonPressed) {
			onButtonPressed(value);
		}
	}

	onBackButtonPressed() {
		const { onBackButtonPressed } = this.props;
		const currentDisplay = this.state.display;

		this.setState({
			display: currentDisplay.slice(0, -1)
		});
		if (onBackButtonPressed) {
			onBackButtonPressed();
		}
	}

	render() {
		const { style } = this.props;

		return (
			<div className='dialpad' style={style}>
				<Display
					value={this.state.display}
				/>
				<MainButtons onButtonPressed={this.onButtonPressed} />
				<ActionButtons
					onBackButtonPressed={this.onBackButtonPressed}
				/>
			</div >
		);
	}
}

export default Dialpad;
