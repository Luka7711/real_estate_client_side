import { defaultUserLocation } from '../data';
import { getStateCity } from '../apis/googleMap';
import { usCities, usStates, usNeighborhoods} from '../data';
import axios from 'axios';

// get state and city data
export const getUserGeolocation = async () => {
    const getCoords = async () => {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    
        return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
        };
    };
    try {
        
        const coords = await getCoords(); 

        if (coords) {
            
            const response = await getStateCity({...coords});
            const locationDetails = { city: null, state: null };
    
            response['results'][0]['address_components'].forEach(component => {
                let city = component['types'].indexOf("locality")
                let state = component['types'].indexOf("administrative_area_level_1");
                
                if (city > -1) {
                    locationDetails['city'] = component['short_name']
                } else if (state > -1) {
                    locationDetails['state'] = component['short_name']
                }
            });
            return locationDetails;
        } 
        
    } catch (error) {
        if (error.message === "User denied geolocation prompt" || error.message === 'User denied Geolocation') {
            return defaultUserLocation;
        } 
        return error;
    }
} 

export function integerToThousands(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export function getSpaceDetails({description}) {
    let house_space_information = ""
    
    house_space_information += `${description.beds ?? 0} bds `
    house_space_information += `| ${description.baths_full ?? 0} ba `
    
    let sqrFeet = description.sqft ? 
        `| ${integerToThousands(description.sqft)} sqft`
        :
        ""; 
    
    house_space_information += sqrFeet
    
    return house_space_information
}

export function getAddress({location}) {
    const keys = ['line', 'city', 'state_code', 'postal_code'];
    let address = "";

    for (let key of keys) {
        address += location['address'][key] + ", "
    }
    return address.slice(0, -2)
}


export async function getCityAndState(params) {
    // return city, state, neighborhood and zipcode
    params = params.replace(/[\[\]&]+/g, '');
    params = params.split(" ");

    // if zip code is presented find City and State
    const zipCode = getZipcode(params);

    if (zipCode) {

        // return City and State of given zipcode from DATABASE
        const url = `${process.env.REACT_APP_SERVER_URL}/cities/${zipCode}`
        const response = await fetch(url);
        const parsedResponse = await response.json()

    } else {
        
        let paramCombination = {
            cityAndState: false,
            onlyCity: false,
            onlyState: false,
            onlyNeighborhood: false
        }
        
        const city = getValidatedParams("cities");
        const state_id = getValidatedParams("state");
        const neighborhood = getValidatedParams("neighborhood");
        
        
        paramCombination['cityAndState'] = city !== null && state_id !== null ;
        paramCombination['onlyCity'] = city !== null && state_id === null;
        paramCombination['onlyState'] = city === null && state_id !== null;
        paramCombination['onlyNeighborhood'] = city === null && state_id === null && neighborhood !== null;
        
        console.log(paramCombination, "param combination")
    }


    function getValidatedParams(dataType) {

        switch (dataType) {
            case "cities":
                
                let foundCity = null;

                params.forEach((param, i) => {
                    
                    let cityIndex = usCities.findIndex(uscity => uscity.toLowerCase() === param.toLowerCase());

                    if(cityIndex > -1) {
                        foundCity = usCities[cityIndex];
                        params.splice(i, 1)
                    }

                });
                return foundCity;
            
            case "state":
                
                let foundState = null;

                params.forEach((param, i) => {
                    let stateIndex = usStates.findIndex(usState => usState.toLowerCase() === param.toLowerCase());
                    
                    if (stateIndex > -1) {
                        foundState = usStates[stateIndex];
                        params.splice(i, 1);
                    }
                })

                return foundState;
            
            default:
                
                return null;

        }
    }

    function getZipcode(params) {
        let [zip] = params.filter(param => {
            return typeof(parseInt(param)) === "number" && param.length === 5;
        });

        return zip;
    };

}