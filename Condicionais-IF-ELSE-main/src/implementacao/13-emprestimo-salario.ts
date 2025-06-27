function verificarEmprestimo(salarioBruto: number, valorPrestacao: number): boolean {
  const limite = salarioBruto * 0.3;
  if (valorPrestacao <= limite) {
    return true;  // empréstimo pode ser concedido
  } else {
    return false; // empréstimo negado
  }
}

// Exemplos de teste
console.log(verificarEmprestimo(5000, 1500)); // true (30% de 5000 = 1500)
console.log(verificarEmprestimo(4000, 1300)); // false (30% de 4000 = 1200)
