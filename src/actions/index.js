import cities from '../cities';

export function setCities() {
  //api call
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function selectCity(city){
  return {
    type: 'SELECT_CITY',
    payload: city
  }
}
