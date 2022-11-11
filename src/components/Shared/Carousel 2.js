import { faCropSimple } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


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

export default function Carousel({children}) {
    const [currentImg, setCurrentImg] = useState(null);
    const [imageIndex, setImageIndex] = useState(null);
    const [position , setPosition] = useState(null);

    function slide(direction) {
        const housesDivs = document.getElementsByClassName('House_container_card__0AHZ9');

        if (direction === "left") {
            
            if (imageIndex !== null && imageIndex < housesDivs.length - 4) {
                setImageIndex(imageIndex + 1);
                setCurrentImg( housesDivs[imageIndex + 1] );

            } else if (imageIndex === null) {
                setImageIndex(0)
                setCurrentImg( housesDivs[0] )
            }
            setPosition (-300);

        } else if (direction === 'right') {
         
            if (imageIndex >= 0) {
                setImageIndex(imageIndex - 1);
                setCurrentImg( housesDivs[imageIndex - 1] )
                setPosition (300)
            } 
        } 
    }
    

    function moveBox(range) {
        const housesDivs = document.getElementsByClassName('House_container_card__0AHZ9')
        console.log(imageIndex)
        if (range < 0) {
            currentImg.style.position = 'absolute';
            currentImg.style.left = range + 'px';
        }
        else if (range > 0) {
            housesDivs[imageIndex + 4].style.position = "absolute";
            housesDivs[imageIndex + 4].style.right = -range + 'px';
            housesDivs[imageIndex - 1].style.position = 'initial';
            housesDivs[imageIndex - 1].style.left = '0';

        }
    }

    useEffect(() => {
        if (currentImg) {
            moveBox(position)
        }
    }, [currentImg])

    // useEffect(() => console.log(imageIndex))


    return (
        <div style={housingAlbumContainer}> 
            <div style={leftBtn} onClick={() => slide("right")}></div>
            <div style={childContainer}> 
                {children} 
            </div>
            <div style={rightBtn} onClick={() => slide("left")}></div>
        </div>
    )
}




