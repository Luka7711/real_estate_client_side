const housingReducer = (state = [], action) => {
    if (action.type === "FETCH_HOUSES") {
        return action.payload
    } 
    return state;
}

export default housingReducer;