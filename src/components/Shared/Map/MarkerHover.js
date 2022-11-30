import { markerStyle, markerStyleHover } from './Hover_style';
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
        alignItems: 'center'
    }

    const priceContainer = {
        fontWeight: '400',
    }

    // const style= hover ? markerStyleHover : markerStyle;
    

    const housePrice = zoom > defaultZoom ? <div style={priceContainer}> { house.list_price } </div> : null;
    const currentMarkerStyle = zoom > defaultZoom ? expandedMarkerWrapper : markerStyle;

    return (
        <div style={currentMarkerStyle}>
            {housePrice}
        </div>
    )
}
