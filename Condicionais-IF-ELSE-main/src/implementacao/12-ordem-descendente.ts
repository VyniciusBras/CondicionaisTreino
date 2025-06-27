function ordenarDescendente(a: number, b: number, c: number): number[] {
  const numeros = [a, b, c];
  numeros.sort((x, y) => y - x); // ordem decrescente
  return numeros;
}

// Testes
console.log(ordenarDescendente(3, 1, 2));  
console.log(ordenarDescendente(10, 5, 8));
console.log(ordenarDescendente(7, 7, 2));  