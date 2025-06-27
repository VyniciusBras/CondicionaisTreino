function verificarDivisivel(a: number, b: number): string | null {
    if (b === 0) {
        return "Divisão por zero não é permitida.";
    }
    if (a % b === 0) {
        return `${a} é divisível por ${b}.`;
    } else {
        return `${a} não é divisível por ${b}.`;
    }
}

//Testes 
console.log(verificarDivisivel(8, 2)); 
console.log(verificarDivisivel(8, 3)); 
console.log(verificarDivisivel(8, 0)); 
