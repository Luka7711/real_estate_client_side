import { faCropSimple } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SlideBtn from '../Buttons/SlideBtn';


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

const btnLeft = {
    position: 'absolute',
    width: "40px",
    height: 'relative',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '10',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
}

const btnRight = {
    position: 'absolute',
    width: "40px",
    height: 'relative',
    top: '0',
    left: '95%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '10',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
}


export default function Carousel({children}) {

    function handleSlide(direction) {
        const carousel_container = document.querySelector('.carousel_child');
    }
    
    return (
        <div style={housingAlbumContainer}> 
            <SlideBtn icon={faArrowLeft} style={btnLeft} btnVal={'prev'} handleSlide={handleSlide}/>
            <div style={childContainer} className="carousel_child"> 
                { children } 
            </div>
            <SlideBtn icon={faArrowRight} style={btnRight} btnVal={'next'} handleSlide={handleSlide}/>
        </div>
    )
}




