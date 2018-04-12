import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const API = 'b2680d43ae8a0c7b35dab5ccf32e3bcd';
// const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric';

const Miasto = (props) => (<p>{props.name}</p>);

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      count: 1,
      weather: null,
      miasto: "Warszawa",
      url : "http://api.openweathermap.org/data/2.5/weather?q=Warszawa&units=metric",
    }
  }

  componentDidMount() {
    axios.get(this.state.url, {params: {APPID: API}}).then(resp => {
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
    return (<p>Temperatura w {weather.name} to {weather.main.temp} [Celcius]</p>);
  }

  zmianaLokacji(city) {
    this.setState({miasto: city});
    const adres = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    this.setState({url: adres});
  }
  
  render() { 
    const { count, weather } = this.state;
 
    return (
      <div className="App">
        <header>
         
        </header>
        <h1 >
        <Miasto name={this.state.miasto} />
        </h1>
        {!!weather ? this.displayWeaterTemp() : null}
        <div>{count}</div>
        <button onClick={() => this.incrementCount()}> TOUCH ME </button>
        <button onClick={() => this.zmianaLokacji("London")}> Londyn </button>
        <button onClick={() => this.zmianaLokacji("Warszawa")}> Warszawa </button>
        
        <h2> URL = {this.state.url} </h2>
        {/* <h2> Temperatura w = {this.weather.main.temp} </h2> */}
      </div>
    );
  }
}

export default App;
