/*
Arrays
💡
Subir cada ejercicio a un repositorio creado en GitHub y avisarle al ayudante que revise el repositorio.
Ejercicios
Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
Ejemplo
const numeros = [1, 2, 3, 4, 5]
// Agregar un elemento al final del arreglo
numeros.push(6)
console.log(numeros) // [1, 2, 3, 4, 5, 6]

// Eliminar el ultimo elemento del arreglo
numeros.pop()
console.log(numeros) // [0, 1, 2, 3, 4, 5]
*/


// 1. Crear una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function sumarNumeros(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  }
  
  const numeros1 = [1, 2, 3, 4, 5];
  console.log(sumarNumeros(numeros1)); 
  
  // 2. Crear una función que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
  function promedioNumeros(array) {
    if (array.length === 0) return 0;
    const suma = sumarNumeros(array);
    return suma / array.length;
  }
  
  const numeros2 = [10, 20, 30, 40, 50];
  console.log(promedioNumeros(numeros2)); 
  
  // 3. Crear una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
  function convertirStringsMayusculas(array) {
    const nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
      nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
  }
  
  const palabras = ["forest", "troll", "durotar"];
  console.log(convertirStringsMayusculas(palabras)); 
  
  // 4. Crear una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
  function filtrarNumerosPares(array) {
    const nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        nuevoArray.push(array[i]);
      }
    }
    return nuevoArray;
  }
  
  const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filtrarNumerosPares(numeros3));
  