function maiorEMenorEntreQuatro(a: number, b: number, c: number, d: number): { maior: number, menor: number } {
  const numeros = [a, b, c, d];

  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);

  return { maior, menor };
}

// Testes
console.log(maiorEMenorEntreQuatro(10, 5, 20, 3)); 
console.log(maiorEMenorEntreQuatro(7, 7, 7, 7));   
console.log(maiorEMenorEntreQuatro(100, 25, 88, 60)); 
