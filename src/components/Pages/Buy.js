import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { cleanupSearchLocation } from "../../actions";
import fetchHouses from "../../apis/housing"
import HousingList from "./HousingList"

const housingListContainer = {
    display: "flex",
    width: "610px",
    flexWrap: "wrap",
    gap: "10px",
    padding: "10px"
}

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
        <div style={housingListContainer} className="housingListContainer">
            <HousingList houses={renderedHouses}/>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        searchLocation: state.searchLocation,
        houses: state.houses
    }

}

export default connect(mapStateToProps, { fetchHouses, cleanupSearchLocation })(Buy)