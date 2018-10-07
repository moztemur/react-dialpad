import React, { Component } from 'react';

class Name extends Component {
  constructor() {
    super();
  }

  render() {
    const { name } = this.props;

    return (
      <div className="name">
        {name}
      </div>
    );
  }
}

export default Name;
