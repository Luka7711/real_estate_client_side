import { markerStyle, markerStyleHover } from './Hover_style';


export default function MarkerHover({ hover, zoom, house, defaultZoom }) {

    const style= hover ? markerStyleHover : markerStyle;
    
    const housePrice = zoom > defaultZoom ? <div> { house.list_price } </div> : null;

    return (
        <div className='hint' style={style}>
            {housePrice}
            <div style={{width: 80}} className="hint__content">
            </div>
        </div>
    )
}
