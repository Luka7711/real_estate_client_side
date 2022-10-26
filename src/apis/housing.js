import { houseData } from '../data';

export default async function fetchData(){
    /*
        use static data, unless need to use 3rd party API
        data from Rapid API
    */
    if (houseData) {
        return houseData
    } else {
        const url = "https://us-real-estate.p.rapidapi.com/v2/for-sale?offset=0&limit=42&state_code=MI&city=Detroit&sort=newest";
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_REALESTATE_KEY,
                'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
            }
        };
        try {
            let response = await fetch(url, options);
            response = await response.json();
            return response.data.home_search.results
    
        } catch(err) {
            throw new Error("Something went wrong on API call")
        }
    }
}



