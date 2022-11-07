import { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import fetchHouses from "../../apis/housing"
import HousingList from "./HousingList"


const Buy = () => {
    return (
        <Fragment><HousingList/></Fragment>
    )
}

const mapStateToProps = state => {
    return {
        location: state.userGeolocation
    }
}

export default connect(mapStateToProps, { fetchHouses })(Buy)