import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      internalClassName: ''
    };
    this.animationTimer;
    this.onPressed = this.onPressed.bind(this);
  }

  componentWillUnmount() {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
    this.animationTimer = null;
  }

  onPressed(value) {
    const { def = 'this', onPressed, callState, enablerStates = [] } = this.props;

    if (enablerStates.length > 0 && callState && enablerStates.indexOf(callState) < 0) {
      console.error(`${callState} state is not enabler for ${def} button, so no action invoked`);
      return;
    }

    this.setState({
      internalClassName: 'clicked'
    });
    this.animationTimer = setTimeout(() => {
      this.setState({
        internalClassName: ''
      });
    }, 500);

    if (onPressed) {
      onPressed(value);
    }
  }
  render() {
    const { value, subvalue, className } = this.props;

    return (
      <div
        className={`button ${className} ${!subvalue ? 'no-sub' : ''} ${this.state.internalClassName}`}
        onClick={() => this.onPressed(value)}>
        {value}
        {
          subvalue && <div className="sub-digit">
            {subvalue}
          </div>
        }
      </div>
    );
  }
}

export default Button;
