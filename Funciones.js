/*Funciones
💡
Subir cada ejercicio a un repositorio creado en GitHub y avisarle al ayudante que revise el repositorio.
Ejercicios
1.-Crea una función que reciba un string y retorne el string en mayúsculas.
2.-Crea una función que reciba un string y retorne el string en minúsculas.
3.-Crear una función que reciba como parámetro 2 números y los reste.
4.-Crear una función que reciba como parámetro 2 números y los divida.
5.-Crear una función que reciba como parámetro 2 números y los multiplique.
6.-Crear una función que reciba un string y devuelva la longitud del string.

Ejemplo
function suma (numero1, numero2) {
  return numero1 + numero2
}

  const resultado = suma(10, 20)
  console.log(resultado) // 30
  */

  // 1. Crear una función que reciba un string y retorne el string en mayúsculas.
function convertirMayusculas(texto) {
    return texto.toUpperCase();
  }
  
  console.log(convertirMayusculas("GumballWaterson")); 
  
  // 2. Crear una función que reciba un string y retorne el string en minúsculas.
  function convertirMinusculas(texto) {
    return texto.toLowerCase();
  }
  
  console.log(convertirMinusculas("GumballWaterson")); 
  
  // 3. Crear una función que reciba como parámetro 2 números y los reste.
  function restar(n1, n2) {
    return n1 - n2;
  }
  
  console.log(restar(10, 5)); 
  
  // 4. Crear una función que reciba como parámetro 2 números y los divida.
  function dividir(n1, n2) {
    if (n2 === 0) {
      return "No se puede dividir por cero";
    }
    return n1 / n2;
  }
  
  console.log(dividir(8, 2)); 
  console.log(dividir(8, 0)); 
  
  // 5. Crear una función que reciba como parámetro 2 números y los multiplique.
  function multiplicar(n1, n2) {
    return n1 * n2;
  }
  
  console.log(multiplicar(4, 5));
  
  // 6. Crear una función que reciba un string y devuelva la longitud del string.
  function obtenerLongitud(texto) {
    return texto.length;
  }
 
  console.log(obtenerLongitud("GumballWaterson")); 
  