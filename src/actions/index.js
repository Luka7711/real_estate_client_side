import fetchHouseList from "../apis/housing";
import { getUserGeolocation } from '../utils';

// Action creator

/* fetchHouses returns a function and redux thunk middleware checks
    if Action returns a function than process async invokcation 
    and then we dispatching action to the reducers manually 
 */

export const fetchHouses = () => async dispatch => {
    const promise = await fetchHouseList();
    dispatch({ type: "FETCH_HOUSES", payload: promise });
};


export const fetchUserGeolocation = () => async dispatch => {
    const geolocation = await getUserGeolocation();
    dispatch({ type: "FETCH_USER_GEOLOCATION", payload: geolocation });
}


