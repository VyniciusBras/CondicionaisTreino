function ordenarAscendente(a: number, b: number, c: number): number[] {
  const numeros = [a, b, c];
  numeros.sort((x, y) => x - y);
  return numeros;
}

// Testes
console.log(ordenarAscendente(3, 1, 2)); 
console.log(ordenarAscendente(10, 5, 8)); 
console.log(ordenarAscendente(7, 7, 2)); 
