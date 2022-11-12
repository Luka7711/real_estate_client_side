import SearchBar from "./SearchBar";
import ImgMain from '../../images/realestate.jpg'

const main = {
    width: "100%",
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${ImgMain})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const searchWrapper = {
    width: "600px",
    height: "60px",
}

export default function HomeSearchbarHolder() {
    
    /**
     * Validates search params and gets houses
     */
    
    async function validateParamsAndGetHouses(event, address) {
        event.preventDefault();

        try {

            const { city, state } = getCityAndState(address);  

        } catch(err) {

            console.log(err);

        }
    }

    return (
        <main style={main}>
            <section style={searchWrapper}>
                <SearchBar searchHouses={validateParamsAndGetHouses}/>
            </section>
        </main>
    )
}