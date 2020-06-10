//esto es un vector

let empleados = [{
        id: 1,
        nombre: "Wendy"
    },
    {
        id: 2,
        nombre: "Santi"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

//funcion

let getEmpleado = (id, callback) => {
    //find: me permite ir recorriendo objeto por objeto
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe empleado ${id} `)
    } else {
        callback(null, empleadoDB);
    }


}
let getSalario = (empleado, callback) => {
    let salario = salarios.find(salario => salario.id === empleado.id);

    if (!salario) {
        callback(`No hay salario para ${empleado.nombre} `)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salario.salario
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    })

});