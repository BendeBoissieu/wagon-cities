import React, { Component } from 'react';

class ActiveCity extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.selectedCity.name}</h1>
        <p>{this.props.selectedCity.address}</p>
      </div>
    );
  }
}

export default ActiveCity
