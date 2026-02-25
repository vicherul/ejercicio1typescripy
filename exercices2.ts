// 1. Creamos la interfaz con las reglas del contrato
interface PerfilUsuario {
  username: string;   // Obligatorio
  email: string;      // Obligatorio
  edad: number;       // Obligatorio
  biografia?: string; // OPCIONAL (con ?)
  telefono?: number;  // OPCIONAL (con ?)
}

// 2. Objeto con TODOS los datos (completo)
const usuario1: PerfilUsuario = {
  username: "soydalto",
  email: "contacto@ejemplo.com",
  edad: 25,
  biografia: "Desarrollador aprendiendo TypeScript",
  telefono: 123456789
};

// 3. Objeto con SOLO los datos obligatorios
const usuario2: PerfilUsuario = {
  username: "coder123",
  email: "pro@code.com",
  edad: 30,
  // biografia y telefono no son necesarios aquí
};

console.log(usuario1);
console.log(usuario2);