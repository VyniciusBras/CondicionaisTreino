function verificarParOuImpar(numero: number): string {
  if (numero % 2 === 0) {
    return "PAR";
  } else{
    return "ÍMPAR";
  } 
}

//testes
console.log(verificarParOuImpar(10)); 
console.log(verificarParOuImpar(3));  