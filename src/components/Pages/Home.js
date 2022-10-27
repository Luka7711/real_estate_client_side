import { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUserGeolocation } from '../../actions';
import { fetchHouses } from "../../actions";
import HousingList from "./HousingList";

/* Display static houses */

const Home = ({ location, fetchUserGeolocation, fetchHouses }) => {
    const apiLimit = 8;

    useEffect(() => {
        window.addEventListener('load', async() => {
            await fetchUserGeolocation();
        });
        return () => {
            window.removeEventListener('load', fetchUserGeolocation);
        }
    })
    
    useEffect(() => {
        if (location) {
            fetchHouses(location.city, location.state, apiLimit);
        }
    }, [location])

    return (
        <> 
            <HousingList/>
        </>
    )
}







const mapStateToProps = state => {
    return {
        location: state.userGeolocation,
        houses: state.houses
    }
}

export default connect(mapStateToProps, { fetchUserGeolocation, fetchHouses })(Home);