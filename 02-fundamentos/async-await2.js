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
//funcion flecha getempleado
let getEmpleado = async(id) => {
        //find funcion q devuelve si encontro un valor en un vector
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            //lanza error con mensaje
            throw new Error(`No existe un empleado con id ${id}`);
        } else {
            //retorna objeto
            return empleadoDB;
        }
    }
    //funcion flecha getsalario
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
    //funcion flecha q invoca a getempleado y a getsalario y retorna un mensaje
let getInformacion = async(id) => {
        let empleado = await getEmpleado(id);
        let resp = await getSalario(empleado);
        return `El salario de ${resp.nombre} es de ${resp.salario}`;
    }
    //invoca a la funcion getinformacion con id 3
getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));