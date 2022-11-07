import { Link } from 'react-router-dom';
import styles from './House.module.css'






function ImgDisplay({ photo }) {
    let img_src = "https://www.femtoscientific.com/wp-content/uploads/2014/12/default_image_01.png"
    if (photo && photo.hasOwnProperty("href")) img_src = photo.href
    
    return (
        <div className={styles.img_container}>
            <img className={styles.img_style} src={img_src}/>
        </div>
    )
}

function Description({ data, houseId }) {
    const link = `/housing-list/${houseId}` 
    // <Link to={link}>see more</Link>

    return (
        <ul className={styles.ul_styles}>
        </ul>
    )
}

export default function House({ house_obj, houseId }) {
    return (
        <div>
            <ImgDisplay photo={house_obj.primary_photo}/>
            <Description data={house_obj.description} houseId={houseId}/>
        </div>
    )
}