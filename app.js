//requiere paquetes
const argv = require("./config/yargs").argv
const { crearArchivo, listarTabla } = require("./multiplicar");

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite)

        break;
    case 'crear':
        console.log("hay q crear el archivo");
        crearArchivo(base)
            .then((mensaje) => console.log(mensaje))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('comando no valido!');
}