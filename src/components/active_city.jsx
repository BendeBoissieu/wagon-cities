import React, { Component } from 'react';
import { connect } from "react-redux";

class ActiveCity extends Component {
  render(){
    let displayCity = null;

    if(this.props.selectedCity){
      displayCity =
        <div>
          <h1>{this.props.selectedCity.name}</h1>
          <p>{this.props.selectedCity.address}</p>
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
