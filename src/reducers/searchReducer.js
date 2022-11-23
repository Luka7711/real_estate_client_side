

export const searchReducer = (state = null, action) => {
    
    switch (action.type) {
        case "UPDATE_LOCATION":
            return action.payload;
        case "CLEANUP_SEARCH":
            return null;
        default:
            return state;
    }
}

