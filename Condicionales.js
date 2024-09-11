/*Condicionales
💡
Subir cada ejercicio a un repositorio creado en GitHub y 
avisarle al ayudante que revise el repositorio.
Ejercicios
Dado los siguientes valores numéricos:
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
​
1.Imprimir en consola el número mayor de los tres.
2.Imprimir en consola el número menor de los tres.
3.Imprimir en consola si el numero1 es par o impar.
4.Imprimir en consola si el numero2 es par o impar.
5.Imprimir en consola si el numero3 es par o impar.
6.Imprimir en consola si el numero1 es múltiplo de 5.
7.Imprimir en consola si el numero2 es múltiplo de 5.
8.Imprimir en consola si el numero3 es múltiplo de 5.


Ejemplo
const numero1 = 30
const numero2 = 20

if (numero1 > numero2) {
  console.log('numero1 es mayor que numero2')
}
  
*/

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// 1. Imprimir en consola el número mayor de los tres
if (numero1 > numero2 && numero1 > numero3) {
    console.log('El número mayor es:', numero1);
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log('El número mayor es:', numero2);
  } else {
    console.log('El número mayor es:', numero3);
  }
  
  // 2. Imprimir en consola el número menor de los tres
  if (numero1 < numero2 && numero1 < numero3) {
    console.log('El número menor es:', numero1);
  } else if (numero2 < numero1 && numero2 < numero3) {
    console.log('El número menor es:', numero2);
  } else {
    console.log('El número menor es:', numero3);
  }
  
  // 3. Imprimir en consola si el numero1 es par o impar
  if (numero1 % 2 === 0) {
    console.log('El número 1 es par');
  } else {
    console.log('El número 1 es impar');
  }
  
  // 4. Imprimir en consola si el numero2 es par o impar
  if (numero2 % 2 === 0) {
    console.log('El número 2 es par');
  } else {
    console.log('El número 2 es impar');
  }
  
  // 5. Imprimir en consola si el numero3 es par o impar
  if (numero3 % 2 === 0) {
    console.log('El número 3 es par');
  } else {
    console.log('El número 3 es impar');
  }
  
  // 6. Imprimir en consola si el numero1 es múltiplo de 5
  if (numero1 % 5 === 0) {
    console.log('El número 1 es múltiplo de 5');
  } else {
    console.log('El número 1 no es múltiplo de 5');
  }
  
  // 7. Imprimir en consola si el numero2 es múltiplo de 5
  if (numero2 % 5 === 0) {
    console.log('El número 2 es múltiplo de 5');
  } else {
    console.log('El número 2 no es múltiplo de 5');
  }
  
  // 8. Imprimir en consola si el numero3 es múltiplo de 5
  if (numero3 % 5 === 0) {
    console.log('El número 3 es múltiplo de 5');
  } else {
    console.log('El número 3 no es múltiplo de 5');
  }