function calcularVenda(valorUnitario: number, quantidade: number): string {
  const total = valorUnitario * quantidade;
  let mensagem = `Valor total da venda: R$${total.toFixed(2)}`;

  if (total > 100) {
    mensagem += " - Bonificação de 10% para o vendedor!";
  }

  return mensagem;
}

// Testes
console.log(calcularVenda(10, 5));   // Valor total da venda: R$50.00
console.log(calcularVenda(25, 5));   // Valor total da venda: R$125.00 - Bonificação de 10% para o vendedor!
