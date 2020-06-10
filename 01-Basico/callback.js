let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Rodrigo",
        id
    }
    if (id == 20) {
        callback(`El usuario con id ${id} no existe`);
    } else {
        callback(null, usuario);
    }
}
getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log("Usuario de la BD:", usuario);
});