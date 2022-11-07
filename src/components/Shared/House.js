import { Link } from 'react-router-dom';
import styles from './House.module.css'
import { integer_to_thousands, getSpaceDetails } from '../../utils';





function ImgDisplay({ photo }) {
    let img_src = "https://www.femtoscientific.com/wp-content/uploads/2014/12/default_image_01.png"
    if (photo && photo.hasOwnProperty("href")) img_src = photo.href
    
    return (
        <div className={styles.img_container}>
            <img className={styles.img_style} src={img_src}/>
        </div>
    )
}

function Description({ house_obj, houseId }) {
    const link = `/housing-list/${houseId}` 
    // <Link to={link}>see more</Link>
    console.log(house_obj)
    return (
        <ul className={styles.ul_styles}>
            <li>${integer_to_thousands(house_obj.list_price)}</li>
            <li>{getSpaceDetails(house_obj)}</li>
        </ul>
    )
}

export default function House({ house_obj, houseId }) {
    return (
        <div>
            <ImgDisplay photo={house_obj.primary_photo}/>
            <Description house_obj={house_obj} houseId={houseId}/>
        </div>
    )
}