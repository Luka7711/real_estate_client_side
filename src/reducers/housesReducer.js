const housingReducer = (state = [], action) => {
    switch (action.type) {
        
        case "FETCH_HOUSES":
            return action.payload

        case "FILTER_BY_PRICE":

            let filteredHouses = action.payload.houses.filter(house => {
            
                if (house.list_price) {
            
                    return house.list_price >= action.payload.minPrice 
                            && 
                           house.list_price <= action.payload.maxPrice;
                } 
            });

            if (filteredHouses) {
                return filteredHouses;
            } else {
                return action.payload.houses
            }

        default:
            return state;
    }
}

export default housingReducer;