import uuid from "react-uuid";
import { Link } from 'react-router-dom';


const imgStyle = {
    width: "300px",
    height: '200px',
    objectFit: 'cover',
}

const imgContainer = {
    border: "1px solid lightgrey",
    width: '300px',
    height: '200px',
}


const ulStyle = {
    listStyle: 'none'
}


function ImgDisplay({ photo }) {
    if (photo && photo.hasOwnProperty("href")){
        return (
            <div className="img_container" style={imgContainer}>
                <img style={imgStyle} src={photo.href}/>
            </div>
        )
    }
}

function Description({ data, houseId }) {
    const link = `/housing-list/${houseId}` 
    let description_list = []
    
    for (let key in data) {
        if(data[key]){
            let name = key.replace("_", " ");    
            let value = data[key].toString().replace("_", " ")
            description_list.push( <li key={uuid()}>{name} : {value}</li> )
        }
    }
    return (
        <div>
            <ul style={ ulStyle }>
                { description_list }
                <Link to={link}>see more</Link>
            </ul>
        </div>
    )
}

export default function House({ data, houseId }) {
    return (
        <>
            <ImgDisplay photo={data.primary_photo}/>
            <Description data={data.description} houseId={houseId}/>
        </>
    )
}