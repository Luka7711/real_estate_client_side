import Icon from "./Icons"
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import React from "react";



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




export default function SearchBar() {
    return (
            <React.Fragment>
                <form style={formContainer} >
                    <input style={inputBox} autofocus="autofocus" type="text" placeholder="city" value="" onChange={() => ""}/>
                    <span style={iconContainer}>
                        <Icon icon={faMagnifyingGlassLocation} />
                    </span>
                </form>
            </React.Fragment>
    )
}