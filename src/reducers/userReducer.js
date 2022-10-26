


export const geolocationReducer = (state = null, action) => {
    if (action.type === "FETCH_USER_GEOLOCATION") {
        return action.payload
    }
    return state
}
