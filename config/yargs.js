//variables a utilizar
let op = {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }
    //comandos para el yargs
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', op)
    .command('crear', 'Imprime en consola la tabla de multiplicar', op)
    .help()
    .argv;

//exportas modulos
module.exports = {
    argv
};