//Vector
let empleados = [{
        id: 1,
        nombre: "Santiago"
    },
    {
        id: 2,
        nombre: "Wendy"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];
//Vector
let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];
//funcion flecha getEmpleado
let getEmpleado = (id, callback) => {
        //find funcion q devuelve si encontro un valor en un vector
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            //callback devuelve mensaje de error
            callback(`No existe un empleado con id ${id}`);
        } else {
            //callback devuelve los parametros
            callback(null, empleadoDB);
        }
    }
    //funcion flecha getSalario
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        //callback devuelve mensaje de error
        callback(`No se encontró salario para el empleado ${empleado.nombre}`)
    } else {
        //callback devuelve los parametros
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }
}

//invocar funcion flecha getEmpleado
getEmpleado(2, (err, empleado) => {
    //Captura el error devuelto por el callback
    if (err) {
        return console.log(err);
    }
    //invocar funcion flecha getSalario
    getSalario(empleado, (err, respuesta) => {
        //Captura el error devuelto por el callback
        if (err) {
            return console.log(err);
        }
        //imprime la respuesta enviada por los callbacks
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    })

});