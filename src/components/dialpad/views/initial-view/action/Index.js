import React, { Component } from 'react';

import Back from './back/Index';
import Call from './call/Index';

class Action extends Component {
  constructor() {
    super();
    this.onBackPressed = this.onBackPressed.bind(this);
    this.onCallPressed = this.onCallPressed.bind(this);
  }

  onBackPressed() {
    const { onBackPressed } = this.props;

    onBackPressed();
  }

  onCallPressed() {
    const { onCallPressed } = this.props;

    onCallPressed();
  }

  render() {
    let buttons = <div className="action buttons">
      <Call onPressed={this.onCallPressed} />
      <div className="button-spacer">
      </div>
      <Back onPressed={this.onBackPressed} />
    </div>;

    return buttons;
  }
}

export default Action;
