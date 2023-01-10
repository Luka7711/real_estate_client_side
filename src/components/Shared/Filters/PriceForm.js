import { nFormatter } from "../../../utils";
import { integerToThousands } from "../../../utils";
import React from "react"
import FilterName from "./FilterName";
import './styles/Price.scss';
import PriceRangeInput from "./PriceRangeInput";




export default function Price() {

    let minPriceRange = [];
    let maxPriceRange = [];

    populateMinMax()
    
    function populateMinMax() {
        let min = Math.pow(10, 5); // min starts at 100K
        let max = Math.pow(10, 6); // max starts at 1M
        
        minPriceRange.push(min);
        maxPriceRange.push(max);
        
        for (let i=0; i < 8; i++) {
            min += minPriceRange[0];
            max += 25/100 * maxPriceRange[0];
            minPriceRange.push(min);
            maxPriceRange.push(max);
        }
    }

    return (
        <div className="mainFormWrapper">
            <FilterName title="Price Range"/>
            <form className="priceForm">
                <PriceRangeInput 
                    priceNumbers={minPriceRange} 
                    formatter={integerToThousands} 
                    priceType="Minimum"
                    initialVal="No Min"
                />
                <PriceRangeInput 
                    priceNumbers={maxPriceRange} 
                    formatter={nFormatter} 
                    priceType="Maximum"
                    initialVal="No Max"
                />
            </form>
        </div>
    )
}

