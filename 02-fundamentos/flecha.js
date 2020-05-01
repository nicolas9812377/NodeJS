//funcion flecha suma
let sumar = (a, b) => a + b;
//imprimir funcion flecha
console.log(`la suma de 3 + 4 = ${sumar(3,4)}`);

// Forma habitual
/* function saludar() {
    return "Hola chic@s";
} */

//funcion flecha 
let saludo = () => {
        let a = "Nicolas";
        let b = 'Carrasco';
        return `${a} ${b}`;
    }
    //impresion de funcion flecha
console.log(`${saludo()}`);

//objeto con funcion
let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

//impresion de funcion flecha
console.log(deadpool.getNombre());