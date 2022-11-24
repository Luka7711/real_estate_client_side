import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { cleanupSearchLocation } from "../../actions";
import PageSwitcher from "../Shared/PageSwitcher";
import fetchHouses from "../../apis/housing"
import HousingList from "./HousingList"


const mainContainer = {
    width: "620px",
    display: 'flex',
    flexDirection: "column",
    gap: "20px",
    padding: "10px"
}
const housingListContainer = {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    gap: "10px",
}

const buttonContainer = {
    width: "80%"
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
        <div style={mainContainer}>

            <div style={housingListContainer}>
                <HousingList houses={renderedHouses}/>
            </div>

            <div style={buttonContainer}>
                <PageSwitcher/>
            </div>
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