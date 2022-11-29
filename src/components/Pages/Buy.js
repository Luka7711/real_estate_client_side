import { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { cleanupSearchLocation } from "../../actions";
import Pagination from "../Shared/Pagination";
import fetchHouses from "../../apis/housing"
import HousingList from "./HousingList"
import Map from "../Shared/Map/Map";


const searchPageListContainer = {
    width: "45%",
    display: 'flex',
    flexDirection: "column",
    gap: "20px",
    padding: "0 10px",
    boxShadow: "3px 3px 3px 3px grey",
    zIndex: '1000'
}
const housingListContainer = {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center"
}

const buttonContainer = {
    width: "80%",
    margin: '0 auto'
}

const searchPageContainer = {
    display: 'flex',
    flexDirection: 'row'
}

const searchPageMapContainer = {
    width: "55%",
    height: "700px"
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
        <div style={searchPageContainer}>
            <div style={searchPageMapContainer}><Map/></div>
            <div style={searchPageListContainer}>
                <div style={housingListContainer}>
                    <HousingList houses={currentTableData}/>
                </div>
                <div style={buttonContainer}>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={renderedHouses.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
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