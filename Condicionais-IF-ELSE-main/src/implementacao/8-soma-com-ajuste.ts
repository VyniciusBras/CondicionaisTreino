function somaComAjuste(a: number, b: number): number {
  const soma = a + b;

  if (soma > 20) {
    return soma + 8;
  } else {
    return soma - 5;
  }
}

// Testes
console.log(somaComAjuste(15, 10));  // 33 (15 + 10 = 25 > 20 → 25 + 8)
console.log(somaComAjuste(10, 5));   // 10 (10 + 5 = 15 <= 20 → 15 - 5)
