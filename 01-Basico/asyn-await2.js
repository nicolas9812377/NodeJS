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


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe empleado ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario = salarios.find(salario => salario.id === empleado.id);

        if (!salario) {
            reject(`No hay salario para ${empleado.nombre} `)
        } else {
            resolve({ nombre: empleado.nombre, salario: salario.salario });
            //console.log("Si bajo 1");
            //resolve({ nombre: empleado.nombre, salario: salario.salario });
            //console.log("Si bajo 2");
            //resolve({ nombre: empleado.nombre, salario: salario.salario });
            //console.log("Si bajo 3");
        }
    });
}
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `El salario de ${resp.nombre} es de ${resp.salario}`;
}
getInformacion(2).then(mensaje => {
    console.log(mensaje);
}).catch(erro => console.log(err))