// let mensaje: string = "Hola Mundo";
// let conteo = 5

// console.log(mensaje);
// console.log(conteo);

// const saludar = (saludo: string): void => {
//     return console.log(saludo);
// }

// saludar("Hola TypeScript");

// interface Persona {
//     id: number;
//     nombre: string;
//     email: string;
//     premium?: string;
// }

// const newUser: Persona = {
//     id: 1,
//     nombre: "Juan",
//     email: "algo@algo.com",
//     premium: "true"
// }
// console.log(newUser);


// ejercicio 2

// let nameOne: string = "Juan";
// let ageOne: number = 30;
// const Character: { nameCharacter: string; ageCharacter: number } = {nameCharacter : nameOne, ageCharacter: ageOne};

// console.log(Character);

// ejercicio 3

// 1. Definimos el molde (Interfaz)
interface Heroe {
  nombre: string;
  artesMarciales: string[]; // Esto significa "un arreglo de textos"
}

// 2. Creamos el objeto usando el molde
const batman: Heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

console.log(batman);