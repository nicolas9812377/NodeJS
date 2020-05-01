//funcion flecha con callbacks
let getUsuarioById = (id, nickname, callback) => {
        let n = nickname + " perez"
        let usuario = {
            nombre: n,
            id
        }

        if (id === 20) {
            //callback devuelve mensaje de error
            callback(`El usuario con id ${id} no existe!`);
        } else {
            //callback devuelve los parametros
            callback(null, usuario, 25);
        }


    }
    //la invocamos la funcion flecha
getUsuarioById(10, 'pepito', (err, usuario, edad) => {
    if (err) {
        return console.log(err);
    }

    console.log("Usuario de la BD:", usuario, `edad: ${edad}`);
});