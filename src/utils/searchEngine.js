import { usCities, usStates, usNeighborhoods} from '../data';


export async function getCityAndState(params) {
    // return city, state, neighborhood and zipcode
    params = params.replace(/[\[\]&]+/g, '');
    params = params.split(" ");

    // if zip code is presented find City and State
    const zipCode = getZipcode(params);

    if (zipCode) {

        // return City and State of given zipcode from DATABASE
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/cities/${zipCode}`)
        const parsedResponse = await response.json();

    } else {
        
        const city = getMatchedLocation(usCities, params);
        const state_id = getMatchedLocation(usStates, params);
        const neighborhood = getMatchedLocation(usNeighborhoods, params);

        const noResults = !city && !state_id && !neighborhood ? true : false;
        const isCityAndStateFound = city && state_id ? true : false;

        if (isCityAndStateFound) return { city, state_id } 
        
        else if (!noResults) {

            const response = await getSearchLocation(city, state_id, neighborhood);
            return response;
        } 

        else {
            return null;
        }
    }



    function getMatchedLocation(locationData, userInput) {

        let foundLocation = null;

        userInput.forEach((inputStr, index) => {
            
            let matchedLocationIndex = locationData.findIndex(location => location.toLowerCase() === inputStr.toLowerCase());

            if (matchedLocationIndex > -1) {
                foundLocation = locationData[matchedLocationIndex];
                userInput.splice(index, 1)
            }

        });

        return foundLocation;
    
    }



    function getZipcode(params) {
        let [zip] = params.filter(param => {
            return !isNaN(parseFloat(param)) && param.length === 5;
        });

        return zip;
    };

}