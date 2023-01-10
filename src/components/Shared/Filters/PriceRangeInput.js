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
   
   const [price, setPrice] = useState("");
   const [stringNum, setStringNum] = useState(initialVal);



   useEffect(() => {
       setStringNum(nFormatter(price, 2));
   }, [price])




   const priceList = priceNumbers.map(price => {
       const formattedPrice = "$" + formatter(price, 2)
       return (
           <li onClick={() => setPrice(price)} key={uuid()}>
               { formattedPrice }
           </li>
       )
   });



   const activateInput = (e) => {
       const inputElement = document.querySelector('.inputPrice');
   }

   const handleChange = () => {
       return;
   }

   return (
       <div className="priceRangeWrapper">
           <div className="labelPrice">
               <label>{priceType}</label>
           </div>

           <div className="inputWrapper" onClick={activateInput}>
               <input 
                   className="inputPrice"
                   key={uuid()} 
                   type="text" 
                   placeholder={stringNum} 
                   value={stringNum}
                   onChange={() => handleChange()}
                   disabled
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