const chicagoCoord = { lat: 418781, long:876298 }

export const geolocationReducer = (state=chicagoCoord, action) => {
    if (action.type === "FETCH_USER_GEOLOCATION") {
        return action.payload
    }
    return state
}
