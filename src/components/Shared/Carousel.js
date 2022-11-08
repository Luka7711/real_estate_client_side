
const housingAlbumContainer = {
    width: "900px",
    overflow: 'hidden',
    margin: '20px auto'
}

const childContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 8*340 + "px",
}



export default function Carousel({children}) {
    return (
        <div style={housingAlbumContainer}> 
            <div style={childContainer}>
                {children}
            </div>
        </div>
    )
}