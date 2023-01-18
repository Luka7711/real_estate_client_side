import {useState, useEffect} from 'react';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { nFormatter } from "../../../utils";
import uuid from "react-uuid";
import Icon from "../Icons";
import './styles/Price.scss';



export default function PriceRangeInput({
    priceNumbers, 
    formatter, 
    priceType,
    initialVal
   }) {
   
   const [numPrice, setNumPrice] = useState("");
   const [stringPrice, setStringPrice] = useState(initialVal);



   useEffect(() => {
     setStringPrice(nFormatter(numPrice, 2));
   }, [numPrice])




   const priceList = priceNumbers.map(numPrice => {
       const formattedPrice = "$" + formatter(numPrice, 2)
       return (
           <li className="priceNumber" onClick={() => setNumPrice(numPrice)} key={uuid()}>
               { formattedPrice }
           </li>
       )
   });


   const handleChange = (e) => {
        setStringPrice(e.target.value)
   }

   return (
       <div className="priceRangeWrapper">
           <div className="labelPrice">
               <label>{priceType}</label>
           </div>

           <div className="inputWrapper">
               <input 
                   className="inputPrice"
                   key={uuid()} 
                   type="string" 
                   placeholder={stringPrice} 
                   value={stringPrice}
                   onChange={(e) => handleChange(e)}
               />
               <Icon icon={faArrowDown}/>
           </div>

           <section>
               <ul>
                   {priceList}
               </ul>
           </section>
       </div>
   )
}