

const searchReducer = (state = null, action) => {
    
    switch (key.type) {
        case "UPDATE_LOCATION":
            return action.payload;
        default:
            return state;
    }
}

export default searchReducer;