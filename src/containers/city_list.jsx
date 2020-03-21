import React, { Component } from 'react';
import City from './city';
import App from '../components/app';

class CityList extends Component {
  render(){
    return(
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City city={city} key={city.name} selectedCity= {this.props.selectedCity} selectCity={this.props.selectCity} />
        })}
      </div>);
  }
}

export default CityList
