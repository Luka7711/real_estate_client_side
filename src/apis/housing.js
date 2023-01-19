import { houseData } from '../data';

export default async function fetchData(city, state){
    /*
        use static data, unless need to use 3rd party API
        data from Rapid API
    */
    const houseData = null;

    if (houseData) {

        return houseData

    } else {
        console.log("FFFFFETCHING")
        const url = `https://us-real-estate.p.rapidapi.com/for-sale?offset=0&limit=200&state_code=${state}&city=${city}&sort=newest`
        
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
            
            return response.data.results

        } catch(err) {

            throw new Error(err)
            
        }
    }
}



