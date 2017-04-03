import React, { Component } from 'react';

class DialpadButton extends Component {
	constructor() {
		super();
		this.onPressed = this.onPressed.bind(this);
	}

	onPressed(value) {
		const { onPressed } = this.props;

		onPressed(value);
	}

	render() {
		const { value, letters } = this.props;

		return (
			<div className="button" onClick={() => this.onPressed(value)}>{value}
				<div className="sub-dig">
					{letters}
				</div>
			</div>
		);
	}
}

export default DialpadButton;
