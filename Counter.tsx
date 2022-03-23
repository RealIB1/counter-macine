import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
      // if (count < 1) {
      //   this.state.count = 0
      // }
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div className="container">
        <header className="header">COUNTER MACHINE </header>
        <div className="count">Counter: {this.state.count}</div>
        <button onClick={() => this.increment()}>Increase</button>
        <button onClick={() => this.decrement()}>Decrease</button>
      </div>
    );
  }
}

export default Hello;
