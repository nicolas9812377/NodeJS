const fs = require("fs");
const colors = require('colors');
let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log("No es numero");
        return;
    }
    console.log(`Tabla de multiplicar ${base}`.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i}= ${base * i}`.green);
    }
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        // validar que la base sea un numero
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es valido`);
            return;
        }
        let data = "";
        for (let i = 1; i <= 10; i++) {
            data += `${base} x ${i}= ${base * i}\n`;
        }
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            console.log(`El archivo de la tabla ${base} ha sido guardado!`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};
//npm init
//npm i yargs --save