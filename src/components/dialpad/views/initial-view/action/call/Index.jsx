import React from 'react';
import Button from '../../../../_shared/button';

class Call extends React.Component {
	render() {
		const { ...otherProps } = this.props;

		return <Button className="call" {...otherProps} />;
	}
}

export default Call;
