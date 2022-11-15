const axios = require('axios');


export default async function getSearchLocation(city, state, neighborhood) {
    
    const options = {
        method: "GET",
        url: `${process.env.REACT_APP_SERVER_URL}/cities/location`,
        params: {
            city: city ?? "",
            state: state ?? "",
            neighborhood: neighborhood ?? ""
        }
    }
    
    const response = await axios.request(options);
    const parsedResponse = await response.json();
    return parsedResponse;
}