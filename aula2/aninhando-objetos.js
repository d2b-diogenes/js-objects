//Aula 2.4 Objetos aninhados - obetos em objetos

const cliente = {

    nome: "Carlos Lima",
    cpf: "12345678911",
    email: "carlos@dominio.com",
    telefone: ["1122334455", "2233445566"],

}

cliente.endereco = {
    // Criando uma nova propriedade para o objeto "cliente"
    // Essa nova propriedade é ao mesmo tempo propriedade e um objeto, pois valor que ela guarda é um objeto

    logradouro: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",

}

console.log(cliente);
    // Acessa o objeto "cliente". É possível ver o novo atribuito "endereço" e um objeto como valor desse atributo

// console.log(cliente.endereco);
    console.log(cliente["endereco"]);
        // Acessando o abributo "endereco" e vendo o valor/objeto que ele guarda

// console.log(cliente.endereco.complemento);
    console.log(cliente["endereco"]["complemento"]);
        // " cliente " 1ª Acessa o objeto "cliente"
        // " ["endereco"] " 2ª Acessaa propriedade/objeto "endereco" do objeto "cliente"
        // " ["complemento"] " 3ª Acessa a propriedade "complemento" do objeto "endereco" 