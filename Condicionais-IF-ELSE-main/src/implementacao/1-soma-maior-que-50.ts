function somaMaiorQueCinquenta(a: number, b: number): number | null {
  const soma = a + b;

  if (soma > 50) {
    return soma;
  } else {
    return null;
  }
}

// Testes
console.log(somaMaiorQueCinquenta(25, 30)); // Saída: 55
console.log(somaMaiorQueCinquenta(20, 25)); // Saída: null
