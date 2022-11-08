
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
    background: "blue",
    zIndex: '10',
    height: '100%'
}

const rightBtn = {
    position: 'absolute',
    width: "40px",
    height: '100%',
    top: '0',
    left: '95%',
    background: "blue",
    zIndex: '10',
    height: '100%'
}

export default function Carousel({children}) {
    return (
        <div style={housingAlbumContainer}> 
            <div style={leftBtn}></div>
            <div style={childContainer}> {children} </div>
            <div style={rightBtn}></div>
        </div>
    )
}