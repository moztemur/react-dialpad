import React, { Component } from 'react';

class Call extends Component {
	constructor() {
		super();
		this.onPressed = this.onPressed.bind(this);
	}

	onPressed() {
		const { onPressed } = this.props;

		onPressed();
	}

	render() {
		return (
			<div
				className="button call"
				onClick={this.onPressed}>
			</div>
		);
	}
}

export default Call;
