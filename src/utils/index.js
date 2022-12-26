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
            lng: pos.coords.longitude,
            lat: pos.coords.latitude,
        };
    };
    try {
        
        const coords = await getCoords(); 

        if (coords) {
            
            const response = await getStateCity({...coords});
            const locationDetails = { city: null, state: null, ...coords };
    
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




export class HouseSpaceDetails {

    static getBeds({ description }) {
        let beds = "beds" in description && description.beds !== null ? description.beds : 0
        return beds;
    }

    static getBath({description}) {
        let baths = "baths_full" in description && description['baths_full'] !== null ? description.baths_full : 0
        return baths;
    }

    static getSqFeet({description}) {
        let sqft = "sqft" in description && description['sqft'] !== null ? integerToThousands(description.sqft) : null;
        
        if (sqft) sqft += " sqft"

        return sqft;
    }

    static formatSpaced(house) {
        
        const beds = this.getBeds(house) + " beds";
        const baths = this.getBath(house) + " ba";
        let sqft = this.getSqFeet(house);
        
        let spaces = [beds, baths];

        if (sqft) spaces = [...spaces, sqft]

        return spaces.join(" | ") 
    }

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







export const checkKeyExist = (ob, key) => {
    const path = [];
    const keyExists = (obj) => {
      if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
        return false;
      }
      else if (obj.hasOwnProperty(key)) {
        return true;
      }
      else if (Array.isArray(obj)) {
        let parentKey = path.length ? path.pop() : "";
  
        for (let i = 0; i < obj.length; i++) {
          path.push(`${parentKey}[${i}]`);
          const result = keyExists(obj[i], key);
          if (result) {
            return result;
          }
          path.pop();
        }
      }
      else {
        for (const k in obj) {
          path.push(k);
          const result = keyExists(obj[k], key);
          if (result) {
            return result;
          }
          path.pop();
        }
      }
      return false;
    };
  
    keyExists(ob);
  
    return path.length > 0
  }
  
  export function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }