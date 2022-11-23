import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { cleanupSearchLocation } from "../../actions";
import fetchHouses from "../../apis/housing"
import HousingList from "./HousingList"


const Buy = ({ houses, searchLocation, cleanupSearchLocation }) => {

    const [renderedHouses, setRenderedHouses] = useState([]);
    
    useEffect(() => {

        if (searchLocation) {

            updateRenderedHouses();

        } else {

            setRenderedHouses(houses);

        }

        return () => {
            cleanupSearchLocation();
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
        searchLocation: state.searchLocation,
        houses: state.houses
    }

}

export default connect(mapStateToProps, { fetchHouses, cleanupSearchLocation })(Buy)