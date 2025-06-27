function verificarSinal(numero: number): string {
  if (numero > 0) {
    return "POSITIVO";
  } else if (numero < 0) {
    return "NEGATIVO";
  } else {
    return "NULO";
  }
}

// Testes
console.log(verificarSinal(23));   // "POSITIVO"
console.log(verificarSinal(-5));  // "NEGATIVO"
console.log(verificarSinal(0));   // "NULO"
