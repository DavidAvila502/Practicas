// Arreglos y objetos

let animales = ["Perro", "Gato", "Conejo", "Mangosta"];

console.log(animales);

animales.push("Dragon");

console.log(animales);

// Posiciones

console.log(animales[3]);

// imprimir el ultimo valor
console.log(animales[animales.length - 1]); // Dragon
console.log(animales.length); // 5

// Objetos *****************

let persona = {
  nombre: "Manuel",

  edad: 22,

  altura: 1.85,

  mascotas: ["gato", "conejo"],

  hijos: [
    { nombre: "Manuela", edad: 12 },
    { nombre: "Manuelo", edad: 15 },
  ],
};

console.log(persona.nombre); // Manuel

console.log(persona["edad"]); // 22

console.log(persona["mascotas"][1]); // conejo

console.log(persona["hijos"][1].edad); // edad: 15
