import { combineReducers } from 'redux';
import housingReducer from './housesReducer';



// the object in combineReducers function will return a state
export default combineReducers({
    houses: housingReducer
})