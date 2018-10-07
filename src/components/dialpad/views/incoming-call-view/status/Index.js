import React, { Component } from 'react';

class Status extends Component {
  constructor() {
    super();
  }

  render() {
    const { state } = this.props;

    return (
      <div className="status">
        {state}
      </div>
    );
  }
}

export default Status;
