// Aula 3.2

// Fazendo uma 

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

for (let chave in cliente) {

    let tipo = typeof cliente[chave];

    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }

}


/*
for (let chave in cliente) {
    
    // console.log(chave);
    //     // ouput:
    //         //nome
    //         //cpf
    //         //email
    //         //telefone
    //         //enderecos
    //     //Percorreu as chaves do objeto e trouxe os nomes delas
    
    let tipo = typeof cliente[chave];
        // Guarda o tipo da variável para que seja possível identificar os tipos objetos e funções
        // Obs.: typeof cliente[chave] é escrito separado 
        // Quando é feito um loop é utilizado o colchetes para colocar o termo do elemento/chave

        if (tipo !== "object" && tipo !== "function") {
        // É feito um filto com o tipo para saber se é "object" ou "function"
        
        console.log(`O a chave ${chave} tem o valor ${cliente[chave]} `);
        // Se a condição der "true", não é "object" ou "function" e irá imprimir.
    } 

}
 */