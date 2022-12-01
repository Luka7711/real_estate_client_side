import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Icon from "./Icons"
import React, { useState, useEffect } from "react";




const formContainer = {
    width: "100%",
    height: "inherit",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 15px",
    background: "#fff",
    borderRadius: "5px",
    fontSize: "1.3rem"
}

const iconContainer = {
    width: "10%",
    height: "inherit",
    display: "flex",
    alignItems: 'center',
    justifyContent: "flex-end",
    color: '#bbb9b9'
}

const inputBox = {
    width: '90%',
    height: 'inherit',
    border: "none"
}




export default function SearchBar({searchHouses}) {
    const [address, setAddress] = useState("")

    function handleChange(event) {
        setAddress(event.target.value)
    }

    function disableFocus(event) {
        event.target.style.outline = "none"
    }

    useEffect(() => {
        return () => setAddress("");
    }, [])

    return (
            <React.Fragment>
                <form 
                    style={formContainer} 
                    onSubmit={(event) => searchHouses(event, address)}
                >
                    <input 
                        className='searchmain' 
                        onFocus={disableFocus} 
                        style={inputBox} 
                        type="text" 
                        placeholder="Enter city, state, neighborhood or zip code" 
                        value={address}
                        onChange={handleChange}
                    />
                    <span style={iconContainer}>
                        <Icon icon={faMagnifyingGlass} />
                    </span>
                </form>
            </React.Fragment>
    )
}