import FilterBtn from "../../Buttons/FilterBtn";
import uuid from "react-uuid";
import './styles/Main.scss';


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
        <div className="filterWrapper">
            { filterBtns }
        </div>
    )
}