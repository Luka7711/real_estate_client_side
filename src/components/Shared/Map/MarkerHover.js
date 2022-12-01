import { markerStyle } from './Hover_style';
import { nFormatter } from '../../../utils';


const  HintBox = ({ house, boxStyle }) => {

    const defaultImage = house.primary_photo && house['primary_photo'].hasOwnProperty("href") ?
        house['primary_photo']['href']
        :
        "https://www.femtoscientific.com/wp-content/uploads/2014/12/default_image_01.png"


    const wrapperContent = {
        width: '100px',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        alignItems: 'center'
    }

    const imgContainer = {
        width: "30%",
        height: 'inherit',
        backgroundImage: `url(${defaultImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }


    return (
        <div style={boxStyle}>
            <div style={wrapperContent}>
                <div style={imgContainer}></div>
                <ul>
                    <li>{nFormatter(house.list_price)}</li>
                    <li>3bd, 2ba</li>
                    <li>1,190 sqft</li>
                </ul>
            </div>
        </div>
    )
}


export default function MarkerHover({ hover, zoom, house, defaultZoom }) {

    const expandedMarkerWrapper = {
        position: "absolute",
        top: -12,
        left: -14,
        color: 'white',
        cursor: 'pointer'
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
        top: "-10px",
        left: zoom > defaultZoom ? '36px' : "13px", 
        background: 'white',
        color: 'black',
        zIndex: '100',
        borderRadius: '2px',
        padding: '4px'
    }



    const hintBox = hover ? <HintBox boxStyle={hintBoxStyle} house={house}/> : null;    

    const housePrice = zoom > defaultZoom ? <div style={priceContainer}> { nFormatter(house.list_price) } </div> : null;
    const currentMarkerStyle = zoom > defaultZoom ? expandedMarkerWrapper : markerStyle;

    return (
        <div style={currentMarkerStyle}>
            {housePrice}
            {hintBox}
        </div>
    )
}
