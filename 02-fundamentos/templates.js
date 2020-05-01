let nombre = "Deadpool";
let real = 'Wade Wilson';
//Impresion de 2 variables concatenadas
console.log(nombre + " " + real);
//Impresion de un template de string
console.log(`${nombre} ${real}`);

//concatenacion
let nombreCompleto = nombre + " " + real;
//template de string
let nombreTemplate = `${nombre} ${real}`;
//impresion de comparacion de la concatenacion y template
console.log(nombreCompleto === nombreTemplate);
//funcion devuelve un template
function getNombre() {
    return `${nombre} ${real}`;
}
//impresion de la funcion con template incrustado
console.log(`El nombre es: ${getNombre()}`);