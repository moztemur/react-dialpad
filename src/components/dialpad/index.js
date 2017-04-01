import React, { Component } from 'react';
import Display from './display';
import DialpadButton from './dialpad-button';

class Dialpad extends Component {
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
      }],
      display: ''
    }
    this.onButtonPressed = this.onButtonPressed.bind(this);
    this.onDisplayChanged = this.onDisplayChanged.bind(this);
    this.onBackButtonPressed = this.onBackButtonPressed.bind(this);
  }

  onButtonPressed(value) {
    const { onButtonPressed } = this.props;
    const currentDisplay = this.state.display;
    this.setState({
      display: currentDisplay + value
    });
    if (onButtonPressed) {
      onButtonPressed(value);
    }
  }

  onDisplayChanged() {
    const { onDisplayChanged } = this.props;
    if (onDisplayChanged) {
      onDisplayChanged();
    }
  }

  onBackButtonPressed() {
    const { onBackButtonPressed } = this.props;
    const currentDisplay = this.state.display;
    this.setState({
      display: currentDisplay.slice(0, -1)
    });
    if (onBackButtonPressed) {
      onBackButtonPressed();
    }
  }

  render() {
    const { key, letters } = this.props;
    return (
      <div className="dialpad">
        <Display value={this.state.display} onChanged={this.onDisplayChanged} onBackButtonPressed={this.onBackButtonPressed} />
        <div className="button-set">
          {
            this.state.buttons.map((button) => {
              return <DialpadButton onPressed={this.onButtonPressed} key={button.value} value={button.value} letters={button.letters} />;
            })
          }
        </div>
      </div>
    );
  }
}

export default Dialpad;