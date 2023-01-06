import Price from "./Price"
import SearchBar from '../SearchBar';
import FilterBtn from "../../Buttons/FilterBtn";
import uuid from "react-uuid";

export default function Main() {
    
    const filterOptions = [
        "For Sale",
        "Price",
        "Beds & Baths",
        "Home Type",
        "More"
    ];

    const filterBtns = filterOptions.map(option => {
        return <FilterBtn name={option} key={uuid()}/>
    });

    return (
        <div>
            <SearchBar/>
            { filterBtns }
        </div>
    )
}