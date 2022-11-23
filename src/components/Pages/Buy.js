import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import fetchHouses from "../../apis/housing"
import HousingList from "./HousingList"


const Buy = ({ houses, geolocation, searchLocation }) => {

    const [renderedHouses, setRenderedHouses] = useState([]);
    
    useEffect(() => {

        if (searchLocation) {

            updateRenderedHouses();

        } else {

            setRenderedHouses([houses]);
            
        }

    }, []);
    

    const updateRenderedHouses = async() => {
        const response = await fetchHouses(searchLocation.city, searchLocation.state_id);
        setRenderedHouses(response);
    }
    

    return (
        <Fragment>
            <HousingList houses={renderedHouses}/>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        geolocation: state.userGeolocation,
        searchLocation: state.searchLocation,
        houses: state.houses
    }
}

export default connect(mapStateToProps, { fetchHouses })(Buy)