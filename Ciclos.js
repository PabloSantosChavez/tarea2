/*Ciclos
💡
Subir cada ejercicio a un repositorio creado en GitHub y avisarle al ayudante que revise el repositorio.
Ejercicios
1.-Imprimir en consola los números del 1 al 10.
2.-Imprimir en consola los números del 10 al 1.
3.-Imprimir en consola los números del 1 al 10 pero solo los pares.
4.-Imprimir en consola los números del 1 al 10 pero solo los impares.
5.-Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
6.-Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
7.-Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
8.-Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.

Ejemplo
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// En consola:
  // 0
  // 1
  // 2
  // ...
  // 9
  */

  // 1. Imprimir en consola los números del 1 al 10.
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Imprimir en consola los números del 10 al 1.
console.log("\nNúmeros del 10 al 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 3. Imprimir en consola los números del 1 al 10 pero solo los pares.
console.log("\nNúmeros pares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Imprimir en consola los números del 1 al 10 pero solo los impares.
console.log("\nNúmeros impares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
console.log("\nNúmeros múltiplos de 3 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
console.log("\nNúmeros múltiplos de 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
console.log("\nNúmeros múltiplos de 3 y 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// 8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
console.log("\nNúmeros múltiplos de 3 o 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}
