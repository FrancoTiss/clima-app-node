const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${ encodeURL }`,
        headers: { 'X-RapidAPI-Key': 'da6409ca27msh6bf380dad052645p17b657jsnf2ac2c983e02' }
    });

    try {

        const resp = await instance.get();

        const data = resp.data

        const direccion = data.name;
        const lat = data.coord.lat;
        const lng = data.coord.lon;

        return {
            direccion,
            lat,
            lng
        };

    } catch (error) {

        throw new Error(`No hay resultados para ${ dir }, ${error}`);

    };


};

module.exports = {
    getLugarLatLng
}