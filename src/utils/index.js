import { defaultUserLocation } from '../data';
import { getStateCity } from '../apis/googleMap';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';


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
    if (number) return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return " N/A"
}





export function getSpaceDetails({ description }) {

    let beds = "beds" in description && description.beds !== null ? description.beds : 0;
    let baths = "baths_full" in description ? description.baths_full : 0;
    let space = "sqft" in description && description['sqft'] !== null ? ` | ${integerToThousands(description.sqft)} sqft` : "";
    let houseDetails = "".concat(beds, " beds | ", baths, " ba ", space)

    return houseDetails;

}

export function getAddress({location}) {

    const keys = ['line', 'city', 'state_code', 'postal_code'];
    let address = "";

    for (let key of keys) {

        if (key in location['address']) {

            address += location['address'][key] + ", "

        }
    }

    return address.slice(0, -2)

}






