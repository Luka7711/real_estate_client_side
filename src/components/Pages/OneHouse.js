import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';


const OneHouse = ({ houses }) => {
    const { houseId } = useParams()
    const house = houses.find(house => house.property_id === houseId);

    return (
        <div>
            <img src={house.primary_photo.href}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        houses: state.houses
    }
}

export default connect(mapStateToProps)(OneHouse);