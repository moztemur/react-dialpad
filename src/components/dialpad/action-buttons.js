import React, { Component } from 'react';

import BackButton from './back-button';

class ActionButtons extends Component {
	constructor() {
		super();
		this.onBackButtonPressed = this.onBackButtonPressed.bind(this);
	}

	onBackButtonPressed() {
		const { onBackButtonPressed } = this.props;

		onBackButtonPressed();
	}

	render() {
		return (
			<div className="buttons">
				<div className="button-double-spacer">
				</div>
				<div className="button-double-spacer">
				</div>
				<BackButton onPressed={this.onBackButtonPressed} />
			</div>
		);
	}
}

export default ActionButtons;
