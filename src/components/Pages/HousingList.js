import React from 'react';
import uuid from 'react-uuid';
import House from '../Shared/House';



export default function HousingList({ houses }){
    return houses.map(house => {
        return (
                <React.Fragment key={uuid()}>
                    <House 
                        house_obj={house} 
                        houseId={house['property_id']}
                    />
                </React.Fragment>
        )
    })
}

