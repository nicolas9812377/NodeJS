//FUNCION FLECHA getnombre
let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Nicolas");
        }, 3000);

    });
}

// AWAIT = se maneja dentro de una funcion asincrona , 
//si la promesa se cumpla me retorna el resultado del resolve
// ASYNC= devuelve una promesa, 

let saludo = async() => {
        //se espera al retorno de la funcion flecha getnombre
        let nombre = await getNombre();
        return `Hola ${nombre}`;
    }
    //invocamos la funcion saludo  e imprime
saludo().then(mensaje => {
    console.log(mensaje);
})