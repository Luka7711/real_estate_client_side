import fetchHouseList from "../apis/housing";

// Action creator
export const selectSong = song => {
    // Return an action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};

/* fetchHouses returns a function and redux thunk middleware checks
    if Action returns a function than process async invokcation 
    and then we dispatching action to the reducers manually 
 */

export const fetchHouses = () => async dispatch => {
    const promise = await fetchHouseList();
    dispatch({ type: "FETCH_HOUSES", payload: promise });
};



