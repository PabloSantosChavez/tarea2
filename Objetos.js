/*
Objetos
💡
Subir cada ejercicio a un repositorio creado en GitHub y avisarle al ayudante que revise el repositorio.
Ejercicios
Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
Ejemplo
Crear un objeto llamado computador y definir sus propiedades, las cuales son:
Teclado
Pantalla
Mouse
Marca
Enciende?
Precio
const computador = {
		teclado: "Redragon Kurama",
		mouse: "Logitech G203",
		marca: "ASUS",
		enciende: true,
		precio: 450000
}

console.log(computador); // {teclado: 'Redragon Kurama', mouse: 'Logitech G203', marca: 'ASUS', enciende: true, precio: 450000}
console.log(computador.teclado); // Redragon Kurama
console.log(computador.mouse); // Logitech G203
console.log(computador.marca); // ASUS
console.log(computador.enciende); // true
console.log(computador.precio); // 450000
console.log(typeof computador); // object
console.log(typeof computador.teclado); // string
console.log(typeof computador.mouse); // string
console.log(typeof computador.marca); // string
console.log(typeof computador.enciende); // boolean
console.log(typeof computador.precio); // number
*/

// 1. Crear un objeto de persona
const persona = {
    nombre: "Pablo",
    edad: 22,
    genero: "masculino"
  };
  
  // Mostrar la información de la persona por la consola
  console.log("Información de la persona:");
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Género:", persona.genero);
  
  // 2. Crear un objeto llamado caja
  const caja = {
    cuadernos: 7,
    lapices: 24,
    papel: "Carta",
    fotografias: ["foto1.jpg", "foto2.jpg"],
    estado: "Buen estado"
  };
  

  console.log("\nObjeto caja completo:");
  console.log(caja);
  
 
  console.log("\nPropiedades de caja y sus tipos de datos:");
  console.log("Cuadernos:", caja.cuadernos, "-", typeof caja.cuadernos);
  console.log("Lápices:", caja.lapices, "-", typeof caja.lapices);
  console.log("Papel:", caja.papel, "-", typeof caja.papel);
  console.log("Fotografías:", caja.fotografias, "-", typeof caja.fotografias);
  console.log("Estado:", caja.estado, "-", typeof caja.estado);
  