import { useState } from "react"
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Icon from "../Shared/Icons";
import './styles/FilterBtn.scss';


export default function FilterBtn({name}) {

    const [active, setActive] = useState(false);
    const dropdownIcon = active ? faCaretUp : faCaretDown;


    return (
            <button className="filterBtn" onClick={() => setActive(!active)}>
                {name}
                <Icon icon={dropdownIcon} style={{"padding": "0 10px"}}/>
            </button>
    )
}