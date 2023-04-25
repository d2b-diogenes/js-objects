// Aula 4.4 Lendo um arquivo JSON

const dados = require("./cliente.json");
    // A constante "dados" recebe os dados contidos no arquivo, um JSON
    // ".require()" é uma função que permite puxar o código de alguma outro lugar
    // Nesse exemplo o arquivo já é um JSON, um objeto, por isso o que vai para a contante é um objeto

console.log(dados);
    /* output:
    {
        nome: 'Joao',
        email: 'joao@firma.com',
        telefone: [ '11223344', '11922334453' ],
        endereco: {
            rua: 'R. Joseph Climber',
            numero: 202,
            apartamento: true,
            complemento: 'ap 934'
        }
    }
    */

console.log(typeof dados);
    // output: object
    // Mostra que o arquivo trazido pelo JSON é do tipo objeto