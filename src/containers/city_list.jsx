import React, { Component } from 'react';
import City from './city';
import App from '../components/app';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities(); //it trigger an action setCities
  }

  render(){
    return(
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City city={city} key={city.name} />
        })}
      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities }, dispatch );
};


//The reduxState can go directly to the react props then we can have access to this.props.cities
function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CityList);
