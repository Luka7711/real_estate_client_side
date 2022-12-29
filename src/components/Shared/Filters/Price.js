import React, {useState, useEffect} from "react"
import uuid from "react-uuid";
import { nFormatter } from "../../../utils";
import { integerToThousands } from "../../../utils";


function PriceRange({
     priceNumbers, 
     formatter, 
     priceType,
     initialVal
    }) {
    
    const [price, setPrice] = useState(initialVal);

    useEffect(() => {

    }, [])



    const priceList = priceNumbers.map(price => {

        const formattedPrice = formatter(price, 2)

        return (
            <li onClick={() => setPrice(price)} key={uuid()}>
                { formattedPrice }
            </li>
        )
    });


    return (
        <>
            <label>{priceType}</label>
            <input key={uuid()} type="text" placeholder={price} value={price}/>
            <section>
                <ul>
                    {priceList}
                </ul>
            </section>
        </>
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
                <PriceRange 
                    priceNumbers={minPriceRange} 
                    formatter={integerToThousands} 
                    priceType="Minimum"
                    initialVal="No Min"
                />
                <PriceRange 
                    priceNumbers={maxPriceRange} 
                    formatter={nFormatter} 
                    priceType="Maximum"
                    initialVal="No Max"
                />
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