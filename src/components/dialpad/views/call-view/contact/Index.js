import React, { Component } from 'react';

import Avatar from './avatar/Index';
import Name from './name/Index';
import Number from './number/Index';

class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    const { contact = {} } = this.props;
    const { avatar, name, number } = contact;

    return (
      <div className="contact">
        <Avatar avatar={avatar} />
        <Name name={name} />
        <Number number={number} />
      </div>
    );
  }
}

export default Contact;
