import React from "react"
import uuid from "react-uuid";
import { nFormatter } from "../../../utils";
import { integerToThousands } from "../../../utils";


function PriceRange({priceNumbers, formatter}) {
    const priceList = priceNumbers.map(price => {
        return <li key={uuid()}>{formatter(price, 2)}</li>
    });

    return (
        <React.Fragment>
            <input placeholder=""/>
            <ul key={uuid()}>
                {priceList}
            </ul>
        </React.Fragment>
    )
}


function PriceForm() {

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
        <div>
            <h5>Price Range</h5>
            <form>
                <PriceRange priceNumbers={minPriceRange} formatter={integerToThousands}/>
                <PriceRange priceNumbers={maxPriceRange} formatter={nFormatter}/>
            </form>
        </div>
    )
}

export default function Price() {
    return (
        <React.Fragment>
            {/* <FilterBtn/> */}
            <PriceForm/>
        </React.Fragment>
    )
}