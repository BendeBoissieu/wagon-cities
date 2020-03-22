import React, { Component } from 'react';
import { connect } from "react-redux";

class ActiveCity extends Component {
  render(){
    let displayCity = null;

    if(this.props.selectedCity){
      const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
      displayCity =
        <div>
          <h1>{this.props.selectedCity.name}</h1>
          <p>{this.props.selectedCity.address}</p>
          <img src={url} alt={this.props.selectedCity.name} width= "100%"/>
        </div>
    }

    return(
      <div>
        {displayCity}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps) (ActiveCity);
