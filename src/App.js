import React, { Component } from 'react';
import axios from 'axios';
import { map, filter } from 'lodash';
import './App.css';
import cityList from './cityList';

const API = 'b2680d43ae8a0c7b35dab5ccf32e3bcd';

const Miasto = (props) => (<p>{props.name}</p>);


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      count: 1,
      weather: null,
      city: "Warszawa",
      list: this.prepareCities(cityList),
    }
  }

  prepareCities(list) {
    return map(list, city => ({ id: city.id, name: city.name }));
  }

  zapytanieOPogode(city){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(url, {params: { APPID: API }}).then(resp => {
      this.setState({ weather: resp.data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { city } = this.state;
    if (prevState.city !== city) this.zapytanieOPogode(city);
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
    this.setState({ city });
  }

  onChangeCity(inputedCity) {
    this.setState ({inputedCity});
  }

  filteredCity(val, list) {
    console.log(val);
    return filter(map(list, ({ name }) => name), n => n.indexOf(val) > -1);
  }
  
  render() { 
    const { count, weather, city, inputedCity, list } = this.state;
    return (
      <div className="App">
        <header>
        
        </header>
        <h1 >
        <Miasto name={city} />
        </h1>
        {!!weather ? this.displayWeaterTemp() : null}
        <div>{count}</div>
        <button onClick={() => this.incrementCount()}> TOUCH ME 1 </button>
        <button onClick={() => this.zmianaLokacji("London")}> Londyn </button>
        <button onClick={() => this.zmianaLokacji("Warszawa")}> Warszawa </button>
        <span> wybierz miasto </span>
        <input value={ inputedCity || '' } onChange={(e) => this.onChangeCity(e.target.value)} />
        <br />
        <div> {this.filteredCity(inputedCity, list)} </div>
        
      </div>
    );
  }
}

export default App;
