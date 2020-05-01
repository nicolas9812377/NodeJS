let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

// Opcion 1:
//impresion de la funcion
console.log(deadpool.getNombre());

let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

// Opción 2: destructuracion
let { nombre: primerNombre, apellido, poder } = deadpool;
//impresion de las variables por destructuracion
console.log(primerNombre, apellido, poder);