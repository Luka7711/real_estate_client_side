import { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUserGeolocation } from '../actions';

const Home = () => {
    
    useEffect(() => {
        window.addEventListener('load', fetchUserGeolocation)
    }, [])

    return <div>Home</div>
}

export default connect(null, fetchUserGeolocation)(Home);