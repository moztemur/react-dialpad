import React, { Component } from 'react';

class Number extends Component {
  constructor() {
    super();
  }

  render() {
    const { number } = this.props;

    return (
      <div className="number">
        {number}
      </div>
    );
  }
}

export default Number;
