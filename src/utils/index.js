import { defaultUserLocation } from '../data';
import { getStateCity } from '../apis/googleMap';



export const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
    };
};

// get state and city data
export const getUserGeolocation = async () => {
    
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
