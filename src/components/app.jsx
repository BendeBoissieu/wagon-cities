import React, { Component } from 'react';
import CityList from '../containers/city_list'
import ActiveCity from './active_city'

// TODO: remove this line and use Redux
const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCity: cities[1]
    };
  }

  selectCity = (city) => {
    this.setState({selectedCity: city});
  }

  render(props){
    return (
      <div className="app">
        <CityList cities= {cities} selectedCity= {this.state.selectedCity} selectCity={this.selectCity} />
        <ActiveCity selectedCity={this.state.selectedCity} />
      </div>
    );
  }

}

export default App;
