//Aula 1.4 Acessando dados do objeto com Ponto

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(cliente);
    // //output: {
    //             nome: 'Andre',
    //             idade: 32,
    //             cpf: '1122233345',        
    //             email: 'andre@dominio.com'
    //            }

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos.`);
    // É colocado um " . " logo após o nome do objeto para acessar o valor da propriedade "nome"

console.log(`Os três primeiros digitos da substring são ${cliente.cpf.substring(0,3)}.`);
    // Buscou o valor da propriedade cpf, uma string
    // E usou o método da String para trazer apenas 3 caracteres
