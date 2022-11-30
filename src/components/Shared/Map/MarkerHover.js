import { markerStyle, markerStyleHover } from './Hover_style';
import { nFormatter } from '../../../utils';
import { useEffect } from 'react';
import { marker_size } from './Hover_style';


export default function MarkerHover({ hover, zoom, house, defaultZoom }) {

    const expandedMarkerWrapper = {
        position: "absolute",
        top: -12,
        left: -14,
        color: 'white',
    }
    
    const priceContainer = {
        background: 'red',
        borderRadius: '10px',
        fontWeight: '400',
        width: '34px',
        height: '17px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    let hintBoxStyle = {
        position: 'absolute',
        width: '100px',
        height: '50px',
        top: "-10px",
        left: zoom > defaultZoom ? '36px' : "13px", 
        background: 'white',
        color: 'black',
        zIndex: '100',
        borderRadius: '2px',
        padding: '3px'
    }



    const hintBox = hover ? <div style={hintBoxStyle}>BOX CONTAINER</div> : null;    
    const housePrice = zoom > defaultZoom ? <div style={priceContainer}> { nFormatter(house.list_price) } </div> : null;
    const currentMarkerStyle = zoom > defaultZoom ? expandedMarkerWrapper : markerStyle;

    return (
        <div style={currentMarkerStyle}>
            {housePrice}
            {hintBox}
        </div>
    )
}
