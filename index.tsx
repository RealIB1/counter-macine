import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
