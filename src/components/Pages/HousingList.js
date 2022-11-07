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


export default function HousingList({ houses }){

    const renderList = houses.map(house => <House key={uuid()} data={house} houseId={house['property_id']}/>)

    return (
        <div style={housingAlbumContainer}>
            {renderList}
        </div>
    )
}
