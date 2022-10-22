

export const getUserGeolocation = async () => {
    const getCoords = async () => {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    
        return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
        };
    };
    const coords = await getCoords(); 
    return coords;
}