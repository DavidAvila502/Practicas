// Cadenas

let nombre = "Manuel de jesus cruz mendiola";

console.log(nombre[0]); // M

nombre.split("").map((item) => console.log(item));

//Concatenacion
let oracion = "perro " + "de " + "manu ";

numero = 23;

console.log(`${oracion} 😎😉😉🤞 ${numero}`);

// Extraer cadena

let subCadena = nombre.slice(0, 11);

subCadena += "perro"; // Manuel de jperro

console.log(subCadena);
