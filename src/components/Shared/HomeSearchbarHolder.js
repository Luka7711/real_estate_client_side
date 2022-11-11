import SearchBar from "./SearchBar";
import ImgMain from '../../images/realestate.jpg'

const main = {
    width: "100%",
    height: "350px",
    backgroundImage: `url(${ImgMain})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

export default function HomeSearchbarHolder() {
    return (
        <main style={main}>
            <SearchBar/>
        </main>
    )
}