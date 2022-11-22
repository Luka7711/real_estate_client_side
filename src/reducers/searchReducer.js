

export const searchReducer = (state = null, action) => {
    
    switch (action.type) {
        case "UPDATE_LOCATION":
            return action.payload;
        default:
            return state;
    }
}

