import { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUserGeolocation } from '../../actions';
import { fetchHouses } from "../../actions";
import Carousel from "../Shared/Carousel";
import HousingList from "./HousingList";



/* Display static houses */

const Home = ({ 
        location, 
        fetchUserGeolocation, 
        fetchHouses,
        houses
    }) => {

    useEffect(() => {
        window.addEventListener('load', () => {
            fetchUserGeolocation();
        })
        
        if (location) fetchHouses(location.city, location.state);

        return () => {
            window.removeEventListener('load', fetchUserGeolocation);
        }
    }, [location]);

    const renderedHouses = houses.slice(0, 9);

    return (
            <Carousel>
                <HousingList houses={renderedHouses}/>
            </Carousel>
    )
}







const mapStateToProps = state => {
    return {
        location: state.userGeolocation,
        houses: state.houses
    }
}

export default connect(mapStateToProps, { fetchUserGeolocation, fetchHouses })(Home);