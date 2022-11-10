import { useState, useEffect } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SlideBtn from '../Buttons/SlideBtn';


const housingAlbumContainer = {
    width: "900px",
    overflow: 'hidden',
    margin: '20px auto',
    position: 'relative'
}

export default function Carousel({children}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(null);
    const [isCarouselHovered, setCarouselHovered] = useState(false);
    const next = "next";
    const prev = "prev";

    let btnStyle = {
        position: 'absolute',
        width: "40px",
        height: 'relative',
        top: '0',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: '10',
        height: '100%',
        display: isCarouselHovered ? "flex" : "none",
        alignItems: 'center',
    }

    let childCarousel = {
        display: 'flex', 
        flexDirection: 'row', 
        transform: `translateX(-${currentIndex * 300}px)`,
        transition: '0.3s',
        width: (() => {
            let houseImgContainerWidth = getComputedStyle(document.documentElement).getPropertyValue('--carousel-each-house-width');
            houseImgContainerWidth = parseInt(houseImgContainerWidth.replace("px", ""))
            let totalWidth = (houseImgContainerWidth * length) + (length * 10) + "px";
            return totalWidth;
        })(),
        justifyContent: 'space-between'
    }



    
    useEffect(() => {
        setLength(children.props.houses.length);
        hoverBtnEffect();

        return () => {
            if(children.length) {
                const carouselWrapper = document.querySelector(".main_carousel_container");
                carouselWrapper.removeEventListener('mouseover');
                carouselWrapper.addEventListener('mouseout');
            }
        }

    }, [children]);

    function hoverBtnEffect() {
        const carouselWrapper = document.querySelector(".main_carousel_container");
        carouselWrapper.addEventListener('mouseover', () => {
            setCarouselHovered(true)
        });
        carouselWrapper.addEventListener('mouseout', () => {
            setCarouselHovered(false);
        })
    }


    function handleSlide(direction) {
        if ( direction === next && currentIndex < (length - 3) ) {
            setCurrentIndex(prevState => prevState + 1);
        }
         else if (direction === prev && currentIndex > 0) {
            setCurrentIndex(prevState => prevState -1);
        }
    }
    
    return (
        <div style={housingAlbumContainer} className="main_carousel_container"> 
            <SlideBtn icon={faArrowLeft} style={{...btnStyle, left: '0'}} btnVal={prev} handleSlide={handleSlide}/>
            <div style={childCarousel} className="carousel_child"> 
                { children } 
            </div>
            <SlideBtn icon={faArrowRight} style={{...btnStyle, left: "95%"}} btnVal={next} handleSlide={handleSlide}/>
        </div>
    )
}




