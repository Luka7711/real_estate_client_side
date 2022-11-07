import React from 'react';
import uuid from 'react-uuid';
import House from '../Shared/House';


const housingAlbumContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 300px)",
    gridTemplateRows: "auto-fill minmax(200px 300px)",
    gap: '2rem',
    justifyContent: "center",
    alignItems: 'center'
}


export default function HousingList({ houses }){

    const renderList = houses.map(house => <House key={uuid()} house_obj={house} houseId={house['property_id']}/>)

    return (
        <div style={housingAlbumContainer}>
            {renderList}
        </div>
    )
}
