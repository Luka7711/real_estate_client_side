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

const btnLeft = {
    position: 'absolute',
    width: "40px",
    height: 'relative',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0,0.3)',
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(null);
    const next = "next";
    const prev = "prev";

    useEffect(() => {
        setLength(children.props.houses.length);
    }, [children]);


    function handleSlide(direction) {
        if ( direction === next && currentIndex < (length - 3) ) {
            setCurrentIndex(prevState => prevState + 1);
            console.log('next')
        }
         else if (direction === prev && currentIndex > 0) {
            setCurrentIndex(prevState => prevState -1);
            console.log("previous")
        }
    }
    
    return (
        <div style={housingAlbumContainer}> 
            <SlideBtn icon={faArrowLeft} style={btnLeft} btnVal={prev} handleSlide={handleSlide}/>
            <div style={
                {
                    display: 'flex', 
                    flexDirection: 'row', 
                    width: 8 * 340 + "px",
                    transform: `translateX(-${currentIndex * 300}px)`,
                    transition: '0.3s'
                }} 
                className="carousel_child"
            > 
                { children } 
            </div>
            <SlideBtn icon={faArrowRight} style={btnRight} btnVal={next} handleSlide={handleSlide}/>
        </div>
    )
}




