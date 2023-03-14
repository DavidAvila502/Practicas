//Iteraciones

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Usando Foreach
numeros.forEach((item) => console.log(item));

// Usando Map

let newArray = numeros.map((item) => item + 1);

console.log(newArray);

// Usando filter

let otherNewArray = numeros.filter((item) => item > 6);

console.log(otherNewArray);

// Usos versatiles

function sumar(array) {
  return array.map((item) => item + 1);
}

console.log(sumar([1, 2, 3, 4, 5, 6]));
