import { combineReducers } from 'redux';
import { geolocationReducer } from './userReducer';
import housingReducer from './housesReducer';
import searchReducer from './searchReducer';



// the object in combineReducers function will return a state
export default combineReducers({
    houses: housingReducer,
    userGeolocation: geolocationReducer,
    searchLocation: searchReducer
})