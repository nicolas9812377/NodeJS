let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        // validar que la base sea un numero
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es valido`);
        }
        resolve('Es un numero');
    });
};
crearArchivo('5sdsd').then(datos => console.log(datos));