const clima = require('./controlador/clima')
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        descripcion: 'Nombre de la Ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfor = async(ciudad) => {
    try {
        const temp = await clima.getClima(ciudad);
        return `El clima de la ciudad ${   ciudad  } es de ${  temp    }`;
    } catch (e) {
        return `No se pudo obtener el clima de la ciudad ${ ciudad  }`;
    }
}

getInfor(argv.ciudad).then(console.log).catch(console.log);