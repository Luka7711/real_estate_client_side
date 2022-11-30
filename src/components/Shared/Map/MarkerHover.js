import { markerStyle, markerStyleHover } from './Hover_style';
import { nFormatter } from '../../../utils';
import { useEffect } from 'react';
import './Map.scss';

export default function MarkerHover({ hover, zoom, house, defaultZoom }) {

    const expandedMarkerWrapper = {
        width: '32px',
        height: '17px',
        padding: '4px',
        background: 'red',
        borderRadius: '10px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const priceContainer = {
        fontWeight: '400',
    }

    const hintBoxStyle = {
        position: 'absolute'
    }

    useEffect(() => {
        console.log(hover, 'hover effect')
    })

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
