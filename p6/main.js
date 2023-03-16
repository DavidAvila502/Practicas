let personas = [
  {
    nombre: "Manuel",
    edad: 23,
    hijos: [
      { nombre: "Manuela", edad: 12 },
      { nombre: "Manueloouiuu", edad: 6 },
    ],
  },
];

//Mostrar cuantas letras vocales tienen los nombres de los hijos de manuel.

// const encontrarVocales = (array) => {
//   let todasVocales = 0;
//   // Itera personas
//   array.forEach((persona) => {
//     //Itera hijos
//     persona.hijos.forEach((hijo) => {
//       let nvocales = 0;

//       //Itera letras de los nombres de los hijos
//       hijo.nombre.split("").forEach((letter) => {
//         if (
//           letter === "a" ||
//           letter === "e" ||
//           letter === "i" ||
//           letter === "o" ||
//           letter === "u"
//         ) {
//           nvocales += 1;
//         }
//       });

//       todasVocales += nvocales;
//       console.log(`${hijo.nombre} tiene ${nvocales} vocales.`);
//     });
//   });

//   console.log(`Todas las vocales contadas son: ${todasVocales}`);
// };

// encontrarVocales(personas);

// Retornando

const encontrarVocales = (array) => {
  let datosHijos = [];

  // Itera personas
  array.forEach((persona) => {
    //Itera hijos
    persona.hijos.forEach((hijo) => {
      let nvocales = 0;

      //Itera letras de los nombres de los hijos
      hijo.nombre.split("").forEach((letter) => {
        if (
          letter === "a" ||
          letter === "e" ||
          letter === "i" ||
          letter === "o" ||
          letter === "u"
        ) {
          nvocales += 1;
        }
      });

      datosHijos.push({ nombre: hijo.nombre, numeVocales: nvocales }); // Añade a un array un objeto con los datos
    });
  });

  return datosHijos; //Retorna array final.
};

let resultado = encontrarVocales(personas);

console.log(resultado);
