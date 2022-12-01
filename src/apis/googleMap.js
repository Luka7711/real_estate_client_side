export const getStateCity = async({lat, lng}) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=postal_code&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`;
    try {
        let response = await fetch(url);
        response = await response.json();
        return response
    } catch (error) {
        throw new Error("Something went wrong API from google maps")
    }
}

