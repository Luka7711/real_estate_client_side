import { Link } from 'react-router-dom';

const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '3rem'
}

const Navigation = () => {
    return (
        <nav style={navStyle}>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/housing-list'}>Buy</Link></li>
            </ul>
            <ul>
                <li><Link to={'/'}>Zillow</Link></li>
            </ul>
      </nav>
    )
}

export default Navigation;