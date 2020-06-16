const clima = require('./controlador/clima')
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        descripcion: 'Nombre de la Ciudad para obtener el clima',
        demand: true
    },
    opciones: {
        alias: 'o',
        descripcion: 'Opcion para escoger Humedad (H) o Presion Atmosferica (P)',
    }
}).argv;

const getInfor = async(ciudad, opciones = '') => {
    try {
        const rs = await clima.getClima(ciudad);
        let op = (opciones.toLowerCase() === 'h') ? `con una Humedad de ${rs.humidity}` : (opciones.toLowerCase() === 'p') ? `con una Presion Atomosferica de ${rs.pressure}` : '';
        return `El clima de la ciudad ${   ciudad  } es de ${  rs.temp    } ${op}`;
    } catch (e) {
        return `No se pudo obtener el clima de la ciudad ${ ciudad  }`;
    }
}

getInfor(argv.ciudad, argv.opciones).then(console.log).catch(console.log);