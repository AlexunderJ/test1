import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const API = 'b2680d43ae8a0c7b35dab5ccf32e3bcd';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=London';



class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      count: 1,
      weather: null,
    }
  }

  componentDidMount() {
    axios.get(url, {params: {APPID: API}}).then(resp => {
      this.setState({weather: resp.data});
    });
  }

  shouldComponentUpdate() {
    return this.state.count<10;
  }

  incrementCount() {
    const item = this.state.count + 1;
    this.setState({count: item});
  }

  displayWeaterTemp() {
    const { weather } = this.state;
    return (<p>Temperatura w {weather.name} to {weather.main.temp} [in retard unit]</p>);
  }
  
  render() { 
    const { count, weather } = this.state;
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {!!weather ? this.displayWeaterTemp() : null}
        <div>{count}</div>
        <button onClick={() => this.incrementCount()}> TOUCH ME </button>
      </div>
    );
  }
}

export default App;
