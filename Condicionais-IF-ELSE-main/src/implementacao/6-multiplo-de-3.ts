function verificarMultiploDeTres(numero: number): string {
  if (numero % 3 === 0) {
    return "é múltiplo de 3";
  } else {
    return "não é múltiplo de 3";
  }
}

// Testes
console.log(verificarMultiploDeTres(9));  
console.log(verificarMultiploDeTres(10));  
