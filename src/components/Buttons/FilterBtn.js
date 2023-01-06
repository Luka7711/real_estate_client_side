import { useState } from "react"
import Icon from "../Shared/Icons";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function FilterBtn({name}) {

    const [active, setActive] = useState(false);
    const dropdownIcon = active ? faCaretUp : faCaretDown;

    const btnStyle = {
        padding: "5px 10px"
    }

    return (
            <button style={btnStyle} onClick={() => setActive(!active)}>
                {name}
                <Icon icon={dropdownIcon} style={{"padding": "0 10px"}}/>
            </button>
    )
}