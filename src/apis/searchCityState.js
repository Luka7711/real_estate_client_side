const axios = require('axios');


export default async function getFullAddress(city, state, neighborhood) {

    const options = {
        method: "GET",
        url: `${process.env.REACT_APP_SERVER_URL}/cities/location-search`,
        params: {
            city: city ?? "",
            state: state ?? "",
            neighborhood: neighborhood ?? ""
        }
    }
    
    const response = await axios.request(options);
    
    if (response.status === 200 && response.data) {
        return response['data']
    }
    return null;
}