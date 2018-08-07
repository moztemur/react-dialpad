import React from 'react';
import Button from '../../../../_shared/button';

class CallEnd extends React.Component {
	render() {
		const { ...otherProps } = this.props;

		return <Button className="call-end" {...otherProps} />;
	}
}

export default CallEnd;
