import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dialpad } from '../../../dist/bundle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dialpad />
      </div>
    );
  }
}

export default App;