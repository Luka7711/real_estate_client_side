import { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUserGeolocation } from '../../actions';





const Home = ({ location, fetchUserGeolocation }) => {
    
    useEffect(() => {
        window.addEventListener('load', fetchUserGeolocation);
        return () => {
            window.removeEventListener('load', fetchUserGeolocation);
        }
    },[])


    return <h1>Home Page</h1>
}







const mapStateToProps = state => {
    return {
        location: state.userGeolocation
    }
}

export default connect(mapStateToProps, { fetchUserGeolocation })(Home);