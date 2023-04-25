//Aula 2.5 Lista/Arrays dentro do Objeto

    // O benefício de ter uma lista de objetos é que se poderá usar os métodos poderosos usados com Arrays

const cliente = {

    nome: "Carlos Lima",
    cpf: "12345678911",
    email: "carlos@dominio.com",
    telefone: ["1122334455", "2233445566"],

}

cliente.enderecos = [
        // O nome da propriedade passa a ser "enderecos" no plural para receber mais de um endereço
        // O valor da propriedade passa a ser uma Array/Lista
    {

        logradouro: "Rua Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",

    },
];

// > Será possível usar os métodos de Arrays na propriedade "endereco" do objeto "cliente"

// Adicionando novos endereços na lista de endereços
cliente.enderecos.push(
    {

        logradouro: "Quadra 20 Conj Q",
        numero: 17,
        apartamento: false,
        complemento: "esquina",

    },
    {

        logradouro: "Av. José Malcher",
        numero: 2567,
        complemento: "beco",

    },
)

console.log(cliente);
    // Acessa o objeto "cliente". É possível que o atributo "endereço" tem uma lista com 3 objetos
    /* output: 
        {
        nome: 'Carlos Lima',
        cpf: '12345678911',
        email: 'carlos@dominio.com',
        telefone: [ '1122334455', '2233445566' ],
        enderecos: [
            {
            logradouro: 'Rua Joseph Climber',
            numero: 1337,
            apartamento: true,
            complemento: 'ap 934'
            },
            {
            logradouro: 'Quadra 20 Conj Q',
            numero: 17,
            apartamento: false,
            complemento: 'esquina'
            },
            {
            logradouro: 'Av. José Malcher',
            numero: 2567,
            apartamento: false
            }
        ]
        }
    */

console.log(cliente.enderecos.length);
    //output: 3 // método do Array que trás a quantidade de elementos dentro da lista. No caso, 3 objetos

// console.log(cliente.enderecos[1]);
console.log(cliente["enderecos"][1]);
    /* output: // Retornou o Segundo elemento da lista/propriedade "enderecos"
        {
        logradouro: 'Quadra 20 Conj Q',
        numero: 17,
        apartamento: false,
        complemento: 'esquina'
        }
    */


// > O benefício de usar uma lista dentro de um objeto é poder usar os métodos poderosos do Array

// Buscando os endereços que são apartamentos com o método do Arra ".filter()"

const enderecosDeApartamento = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(enderecosDeApartamento);
    /* output: // Dos 3 endereços, retornou apenas o endereço em que tinha "apartamento" igual a "true"
        [
            {
                logradouro: 'Rua Joseph Climber',
                numero: 1337,
                apartamento: true,
                complemento: 'ap 934'
            }
        ]
    */