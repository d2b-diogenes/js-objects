// Aula 3.6 Sintaxe de espalhamento

const cliente = {

    nome: "Carlos Lima",
    cpf: "12345678911",
    email: "carlos@dominio.com",
    telefone: ["1122334455", "2233445566"],

}

cliente.enderecos = [
    {

        logradouro: "Rua Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",

    },
];

// > Espalhamento de um Array dentro dos parâmetros de uma função

    //Exemplo, uma função recebido de fora:
function ligaParaCliente(telefoneComercial, telefoneResidencial) {

    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);

}

//     // Chamando a função e passando os parâmentros
// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

    // Chamando novamente a função, mas aplicando o espalhamento para passar os parâmetros
ligaParaCliente(...cliente.telefone);
    // Joga nos 2 parâmeotrs esperados os 2 valores dentro do Array "telefone"


// > Trazendo cada elemento do Array "endereços" de dentro do objeto "cliente" para dentro do objeto "encomenda". 
    
// const encomenda = {

//     destinatario: cliente.nome,
//     logradouro: cliente.enderecos[0].logradouro,
//     numero: cliente.enderecos[0].numero,
//     apartamento: cliente.enderecos[0].apartamento,
//     complemento: cliente.enderecos[0].complemento,

//         // Criou cada propriedade da encomenda e truoxe cada elemento do Array "endereços"

// }


// > Espalhamento do Array "endereços" de dentro do objeto "cliente" para dentro do objeto "encomenda". 

const encomenda = {

    destinatario: cliente.nome,
   ...cliente.enderecos[0],
        //Foi feito o espalhamento das propriedades que estavam dentro do Array "[0]" que estava dentro da propriedade "enderecos" do objeto "cliente" para dentro do objeto "encomenda"

}

console.log(encomenda);
    /* output:
            {
                destinatario: 'Carlos Lima',
                logradouro: 'Rua Joseph Climber',
                numero: 1337,
                apartamento: true,
                complemento: 'ap 934'
            }
        
    */

const [num1 , num2, ...outrosNumeros] = [2, 4, 6, 8, 9];

console.log (num1, num2, outrosNumeros);

