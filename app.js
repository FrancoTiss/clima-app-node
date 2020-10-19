const lugarLatLng = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(dir) => {

    try {

        let lugarLatLon = await lugarLatLng.getLugarLatLng(dir);

        let climaLugar = await clima.getClima(lugarLatLon.lat, lugarLatLon.lng);

        return `El clima de ${ dir } es de ${ climaLugar }°C`;

    } catch (error) {

        return `No se pudo determinar el clima de ${ argv.direccion }, ${ error }`;

    }

};

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));