import React, { Component } from 'react';

import Digit from './digit/Index';

class Keypad extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [{
        value: '1'
      }, {
        value: '2',
        letters: 'abc'
      }, {
        value: '3',
        letters: 'def'
      }, {
        value: '4',
        letters: 'ghi'
      }, {
        value: '5',
        letters: 'jkl'
      }, {
        value: '6',
        letters: 'mno'
      }, {
        value: '7',
        letters: 'pqrs'
      }, {
        value: '8',
        letters: 'tuv'
      }, {
        value: '9',
        letters: 'wxyz'
      }, {
        value: '*'
      }, {
        value: '0'
      }, {
        value: '#'
      }]
    };
    this.onDigitPressed = this.onDigitPressed.bind(this);
  }

  onDigitPressed(value) {
    const { onDigitPressed } = this.props;

    onDigitPressed(value);
  }

  render() {
    return (
      <div className="keypad buttons">
        {
          this.state.buttons.map((button) => {
            return <Digit onPressed={this.onDigitPressed}
              key={button.value}
              value={button.value}
              letters={button.letters}
            />;
          })
        }
      </div>
    );
  }
}

export default Keypad;
