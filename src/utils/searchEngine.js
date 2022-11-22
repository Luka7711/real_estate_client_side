import { usCities, usStates, usNeighborhoods} from '../data';
import getFullAddress from '../apis/searchCityState';

export async function getCityAndState(params) {

    const params_string = params.replace(/[\[\]&]+/g, '');
    const splitted_params_string = params.split(" ");
    const zipCode = getZipcode(splitted_params_string);

    if (zipCode) {

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/cities/${zipCode}`)
        const parsedResponse = await response.json();

    } else {
        
        const city = getMatchedCity(usCities, params_string);
        const state_id = getMatchedLocation(usStates, splitted_params_string);
        const neighborhood = getMatchedLocation(usNeighborhoods, splitted_params_string);

        if (city && state_id) {

            return { city, state_id } 

        } else if (!city && !state_id && !neighborhood) {

            const response = await getFullAddress(city, state_id, neighborhood);
            return response;

        }

        return null;
    }



    function getMatchedCity(locationData, userInput) {
        
        let matchedCity = locationData.filter(city => {

            let searchedCityRegex = new RegExp(`${city}`, 'gi');
            
            let match = userInput.match(searchedCityRegex);

            return match && city.toLowerCase() === match[0].toLowerCase()

        });

        if (matchedCity.length) return matchedCity[0];

        return null;
    };



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