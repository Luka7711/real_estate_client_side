import React from 'react';
import uuid from 'react-uuid';
import House from '../Shared/House';



export default function HousingList({ houses }){

    const renderList = houses.map(house => <House key={uuid()} house_obj={house} houseId={house['property_id']}/>)

    return (
        <>
            { renderList }
        </>
    )
}
