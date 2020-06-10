const axios = require('axios');

const getClima = async(ciudad) => {
    const ciudadURL = encodeURI(ciudad);
    const rep = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL},ECU&appid=a458d975acab37655b6515df299ab099&units=metric`)
    return rep.data.main.temp;
}

module.exports = {
    getClima
}