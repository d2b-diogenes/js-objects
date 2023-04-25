//Aula 2.6 Funções dentro do Objeto

const cliente = {

    nome: "Carlos Lima",
    cpf: "12345678911",
    email: "carlos@dominio.com",
    telefone: ["1122334455", "2233445566"],
    saldo: 200,
    efetuarCompra: function (valor) {
        if (valor > this.saldo) {
            console.log("Não foi possível efetuar a compra");
        }
        else {
            this.saldo -= valor;
            console.log(`Compra efetuada com sucesso. O saldo atual é ${this.saldo}.`);
        }
    }

}

cliente.efetuarCompra(250);
    // output: Não foi possível efetuar a compra
    // Chamando a propriedada do objeto que guarda a função. Ao chamar a propriedade, ela é executada
    // O valor da compra é maior que o saldo da conta

cliente.efetuarCompra(25);
    // output: Compra efetuada com sucesso. O saldo atual é 175.
    // O valor da compra é menor que o saldo da conta e por isso a compra foi efetuado com sucesso e o saldo decrescido

console.log(cliente.saldo);
    // output: 175