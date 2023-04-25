//Aula 2.2 Tipos de dados e valores

// Usando uma Array como valor de uma propriedade de um objeto

const cliente = {

    nome: "Carlos Lima",
    cpf: "12345678911",
    email: "carlos@dominio.com",
    telefone: ["1122334455", "2233445566"],
        // Uma propriedade pode guardar uma Arrayy
        // É uma boa prática de guardar telefones, pois as pessoas podem ter 1 ou mais telefones
}

console.log(cliente.telefone);
    //output: [ '1122334455', '2233445566' ] 
    // Acessando a propriedade do telefone para ver o Array com os telefones

console.log(cliente.telefone[0]);
    //output: 1122334455
    // Usando um método do Array para acessar o primeiro elemento do Array