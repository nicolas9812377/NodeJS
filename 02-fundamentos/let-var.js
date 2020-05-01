//var nombre = "Wolverine"
let nombre = "Wolverine";
/* 
al declarar var en la variable nombre cambia su valor al momento de entrar al if
al declarar let en la variable se observa como no cambia de valor en el if
eso quiero decir q let funciona en los ambitos indicados
*/
if (true) {
    /* var nombre = "Magneto"; */
    let nombre = "Magneto";
}
//impresion del nombre
console.log(`hola ${nombre}`);

//bucle con contador
let i;
for (i = 0; i <= 5; i++) {
    console.log(`i = ${i}`);
}
//impresion del ultimo valor
console.log(`valor final de i: ${i}`);