import React, { Component } from 'react';

import DefaultAvatar from './avatar.png';

class Avatar extends Component {
  constructor() {
    super();
  }

  render() {
    const { avatar } = this.props;

    return (
      <div className="avatar">
        <img src={avatar || DefaultAvatar} />
      </div>
    );
  }
}

export default Avatar;
