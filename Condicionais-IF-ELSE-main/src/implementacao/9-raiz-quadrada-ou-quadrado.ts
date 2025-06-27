function calcularRaizOuQuadrado(numero: number): number | null {
  if (numero >= 0) {
    const raiz = Math.sqrt(numero);
    // Verifica se a raiz quadrada é exata comparando com o valor arredondado
    if (raiz === Math.floor(raiz)) {
      return raiz;
    } else {
      return null;
    }
  } else {
    return numero * numero;
  }
}

// Testes
console.log(calcularRaizOuQuadrado(9)); 
console.log(calcularRaizOuQuadrado(-4)); 
console.log(calcularRaizOuQuadrado(10));  
