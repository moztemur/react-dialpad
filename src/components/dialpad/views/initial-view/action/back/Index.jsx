import React, { Component } from 'react';

class Back extends Component {
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
				className="button back"
				onClick={this.onPressed}>
			</div>
		);
	}
}

export default Back;
