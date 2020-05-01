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

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];
//funcion flecha con promesa
//resolve cuando es exitoso
//reject cuando devuelve un error
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        //find funcion q devuelve si encontro un valor en un vector
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            //retorna mensaje con error
            reject(`No existe un empleado con id ${id}`);
        } else {
            //retorna el objeto empleado
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        //find funcion q devuelve si encontro un valor en un vector
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            //retorna mensaje con error
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            //retorna el objeto empleado
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }

    });
}

// Promesas en cadena
//invocar funcion flecha con promesa
getEmpleado(1).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
});