import { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUserGeolocation } from '../../actions';
import { getStateCity } from "../../apis/googleMap";

const Home = ({coord}) => {
    
    useEffect(() => {
        window.addEventListener('load', fetchUserGeolocation);
    }, [])

    return <h1>Home Page</h1>
}

const mapStateToProps = state => {
    return {
        coord: state.userGeolocation
    }
}

export default connect(mapStateToProps, { fetchUserGeolocation })(Home);