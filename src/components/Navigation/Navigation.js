import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <nav className={styles.nav_bar}>
            <ul>
                <li className={styles.nav_li}><Link to={'/housing-list'}>Buy</Link></li>
            </ul>
            <ul>
                <li className={styles.logo}><Link to={'/'}><span><FontAwesomeIcon icon={faBuilding}/></span>  real estate </Link></li>
            </ul>
      </nav>
    )
}

export default Navigation;