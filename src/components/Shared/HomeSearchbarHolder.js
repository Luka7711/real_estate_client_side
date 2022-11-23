import { getCityAndState } from "../../utils/searchEngine";
import { updateSearchLocation } from '../../actions/index';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import ImgMain from '../../images/realestate.jpg';

const main = {
    width: "100%",
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${ImgMain})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const searchWrapper = {
    width: "600px",
    height: "60px",
}

function HomeSearchbarHolder({ searchLocation, updateSearchLocation }) {
    
    const navigate = useNavigate();
    
    async function validateParamsAndGetHouses(event, address) {

        event.preventDefault();

        try {


            const response = await getCityAndState(address); 
            updateSearchLocation(response);

            navigate('/housing-list');

        } catch(err) {
            // if no results, display Not found message
            console.log(err);

        }
    }

    return (
        <main style={main}>
            <section style={searchWrapper}>
                <SearchBar searchHouses={validateParamsAndGetHouses}/>
            </section>
        </main>
    )
}


const mapStateToProps = state => {
    return {
        searchLocation: state['searchLocation']
    }
}

export default connect(mapStateToProps, { updateSearchLocation })(HomeSearchbarHolder)