import React, { Component } from 'react';

import DialpadButton from './dialpad-button';

class MainButtons extends Component {
	constructor() {
		super();
		this.state = {
			buttons: [{
				value: '1'
			}, {
				value: '2',
				letters: 'abc'
			}, {
				value: '3',
				letters: 'def'
			}, {
				value: '4',
				letters: 'ghi'
			}, {
				value: '5',
				letters: 'jkl'
			}, {
				value: '6',
				letters: 'mno'
			}, {
				value: '7',
				letters: 'pqrs'
			}, {
				value: '8',
				letters: 'tuv'
			}, {
				value: '9',
				letters: 'wxyz'
			}, {
				value: '*'
			}, {
				value: '0'
			}, {
				value: '#'
			}]
		};
		this.onButtonPressed = this.onButtonPressed.bind(this);
	}

	onButtonPressed(value) {
		const { onButtonPressed } = this.props;

		onButtonPressed(value);
	}

	render() {
		return (
			<div className="buttons">
				{
					this.state.buttons.map((button) => {
						return <DialpadButton
							onPressed={this.onButtonPressed}
							key={button.value}
							value={button.value}
							letters={button.letters}
						/>;
					})
				}
			</div>
		);
	}
}

export default MainButtons;
