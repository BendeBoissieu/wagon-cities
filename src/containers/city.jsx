import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
    if(this.props.selectCity){this.props.selectCity(this.props.city);}
  }
  render(){
    let classes = "city";
    if (this.props.city == this.props.selectedCity) {
      classes += " selected"
    }
    return(<div className= {classes} onClick= {this.handleClick}>{this.props.city.name}</div>);
  }
}

export default City
