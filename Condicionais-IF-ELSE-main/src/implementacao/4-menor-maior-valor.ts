function compararDoisNumeros(a: number, b: number): string | null {
  if (a > b) {
    return `Maior: ${a}, Menor: ${b}`;
  } else if (b > a) {
    return `Maior: ${b}, Menor: ${a}`;
  } else {
    return "Os dois números são iguais.";
  }
}

// Testes
console.log(compararDoisNumeros(24, 8));  
console.log(compararDoisNumeros(5, 11));   
console.log(compararDoisNumeros(2, 2));   