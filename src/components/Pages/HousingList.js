import React from 'react';
import uuid from 'react-uuid';
import House from '../Shared/House';



export default function HousingList({ houses }) {
    console.log(houses.length, "houses length from HOUSING LIST component")
    return houses.map(houseItem => {
        return (
                <React.Fragment key={uuid()}>
                    <House 
                        house_obj={houseItem} 
                        houseId={houseItem['property_id']}
                    />
                </React.Fragment>
        )
    })
}

