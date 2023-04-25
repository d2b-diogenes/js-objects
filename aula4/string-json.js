// Aula 4.7 Transformando JSON em String e Voltando do formato String para JSON

const dados = require("./cliente.json");

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

// > Transformando um objeto de um arquivo JSON em uma Strig
const dadosClienteString = JSON.stringify(dados);
    // A constante irá receber um string do conteúdo do JSON, o objeto será transformado em uma string;
    // "JSON.stringify()" transforma o objeto dentro do JSON em uma string
    
console.log(dadosClienteString);
    // output: {"nome":"Joao","email":"joao@firma.com","telefone":["11223344","11922334453"],"endereco":{"rua":"R. Joseph Climber","numero":202,"apartamento":true,"complemento":"ap 934"}}
    // Foi impresso 1 linha contento uma string, não é mais um objeto
    
    
console.log(typeof dadosClienteString);
        // output: string 

// > Revertendo, transformando uma string e um objeto
const dadosClienteObjeto = JSON.parse(dadosClienteString);
    // A constante "dadosClienteObjeto" irá receber um objeto, a string de dentro da constante "dadosClienteString" será transformada em um objeto
    // "JSON.parse()" transforma uma string em um objeto

console.log(dadosClienteObjeto);
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

console.log(typeof dadosClienteObjeto);
    // output: object
        