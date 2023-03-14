// Pasar funcion como parametro a otra funcion

let multiplicar = (a, b) => {
  return a * b;
};

function sumar(a, b, c) {
  return (a + b) * c(a, b);
}

console.log(sumar(6, 6, multiplicar));
