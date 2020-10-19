const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=d072d2bf47c23f961018c17bd97b52c7&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};