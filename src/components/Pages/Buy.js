import { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { cleanupSearchLocation } from "../../actions";
import Pagination from "../Shared/Pagination";
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

let PageSize = 10;

const Buy = ({ houses, searchLocation, cleanupSearchLocation }) => {

    const [renderedHouses, setRenderedHouses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        return renderedHouses.slice(firstPageIndex, lastPageIndex);

    }, [currentPage, renderedHouses]);
    
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
                <HousingList houses={currentTableData}/>
            </div>

            <div style={buttonContainer}>
                <Pagination/>
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