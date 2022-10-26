import React from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../../actions';
import uuid from 'react-uuid';
import House from '../Shared/House';

const housingAlbumContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 300px)",
    gridTemplateRows: "auto-fill minmax(200px 300px)",
    gap: '2rem',
    justifyContent: "center",
    alignItems: 'center'
}


class HousingList extends React.Component {

    componentDidMount() {
        console.log(this.props.location, 'location')
        this.props.fetchHouses({ ...this.props.location });
    }

    renderList() {
        if (this.props.houses.length > 0) {
            return this.props.houses.map((data) => <House key={uuid()} data={data} houseId={data.property_id}/> ) 
        }
        else {
            return  "Loading"
        }
    }

    render() {
        return (
            <div style={housingAlbumContainer}>
                { this.renderList() }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        houses: state.houses,
        location: state.userGeolocation
    }
}

export default connect(
    mapStateToProps, 
    { fetchHouses }
)(HousingList);