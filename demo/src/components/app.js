import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dialpad } from '../../../dist/bundle';

class App extends Component {
  render() {
    const style = {
      width: '400px',
      height: '630px'
    };

    return (
      <div className="App">
        <Dialpad style={style} />
      </div>
    );
  }
}

export default App;