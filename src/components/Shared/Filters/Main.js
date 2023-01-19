import {useState} from 'react';
import { useEffect } from 'react';
import FilterBtn from "../../Buttons/FilterBtn";
import uuid from "react-uuid";
import './styles/Main.scss';
import PriceForm from './PriceForm';



export default function Main() {

    const [currentOption, setCurrentOption] = useState(null);

    const filterOptions = [
        {
            name: "For Sale",
            compon: null
        },
        {
            name: "Price",
            compon: <PriceForm/>
        },
        {
            name: "Beds & Baths",
            compon: null
        },
        {
            name: "Home Type",
            compon: null
        }, 
        {
            name: "More",
            compon: null
        }
    ];


    const BTN_FILTERS = filterOptions.map(option => {

        if (currentOption === option['name']) {

            return (
                <FilterBtn 
                  name={option['name']} 
                  key={uuid()} 
                  setCurrentOption={setCurrentOption}
                  filterForm={option['compon']}
                />
            )
        } else {
            return (
                <FilterBtn 
                  name={option['name']} 
                  key={uuid()} 
                  setCurrentOption={setCurrentOption}
                  filterForm={null}
              />
            )
        } 
    });

    return (
        <div className="filterWrapper">
            { BTN_FILTERS }
        </div>
    )
}