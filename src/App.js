import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.initValues = [0, 10, 20];
    const initSum = this.initValues.reduce((a,b)=>a+b,0);
    this.state = {
      sum: initSum
    };
  }
  onCounterUpdate = (newValue, previousValue)=>{
    const valueChange = newValue - previousValue;
    this.setState({
      sum: this.state.sum+ valueChange
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Counter caption="first" initValue={this.initValues[0]} onUpdate={this.onCounterUpdate} />
          <Counter caption="second" initValue={this.initValues[1]} onUpdate={this.onCounterUpdate} />
          <Counter caption="third" initValue={this.initValues[2]} onUpdate={this.onCounterUpdate} />
          <h3>Total count: {this.state.sum}</h3>
        </header>
      </div>
    );
  }
}

export default App;
