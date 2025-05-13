function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Tratamento para divisão por zero
            return num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
        default:
            return 'Operador inválido';
    }
}
