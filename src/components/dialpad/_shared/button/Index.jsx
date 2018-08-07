import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			internalClassName: ''
		};
		this.onPressed = this.onPressed.bind(this);
	}

	onPressed(value) {
		const { onPressed } = this.props;

		this.setState({
			internalClassName: 'clicked'
		});
		setTimeout(() => {
			this.setState({
				internalClassName: ''
			});
		}, 500);
		onPressed(value);
	}
	render() {
		const { value, subvalue, className } = this.props;

		return (
			<div
				className={`button ${className} ${!subvalue ? 'no-sub' : ''} ${this.state.internalClassName}`}
				onClick={() => this.onPressed(value)}>
				{value}
				{
					subvalue && <div className="sub-digit">
						{subvalue}
					</div>
				}
			</div>
		);
	}
}

export default Button;
