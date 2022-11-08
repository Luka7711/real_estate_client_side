import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const housingAlbumContainer = {
    width: "900px",
    overflow: 'hidden',
    margin: '20px auto',
    position: 'relative'
}

const childContainer = {
    display: 'flex',
    flexDirection: 'row',
    width: 8*340 + "px",
}

const leftBtn = {
    position: 'absolute',
    width: "40px",
    height: 'relative',
    top: '0',
    left: '0',
    background: "black",
    zIndex: '10',
    height: '100%',
    opacity: '0.5'
}

const rightBtn = {
    position: 'absolute',
    width: "40px",
    height: '100%',
    top: '0',
    left: '95%',
    background: "black",
    zIndex: '10',
    height: '100%',
    opacity: '0.5'
}

function Carousel({children, houses}) {
    const [currentImg, setCurrentImg] = useState(null);
    const [images, setImages] = useState([]);


    const firstImgStyleOnMove = {
        position: 'absolute',
        left: "-300px"
    }



    useEffect(() => {
        const imgs = document.getElementsByClassName("House_container_card__0AHZ9");
        setImages(imgs);
    }, [])


    
    useEffect(() => {
        setCurrentImg(images[0])
    },[images])



    function slideLeft() {
        return;
    }

    function slideRight() {
        return;
    }

    if (houses) {
        return (
            <div style={housingAlbumContainer}> 
                <div style={leftBtn} onClick={slideLeft}></div>
                <div style={childContainer}> 
                    {children} 
                </div>
                <div style={rightBtn} onClick={slideRight}></div>
            </div>
        )
    } else {
        return "Loading"
    }
}




const mapStateToProps = state => {
    return {
        houses: state.houses
    }
}

export default connect(mapStateToProps)(Carousel)