//Aula 1.5 Acessando dados do objeto com Colchetes

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

// console.log(`O nome do cliente é ${cliente["nome"]} e ele tem ${cliente["idade"]} anos.`);
//     // É colocado o nome da propriedade entre os colchetes e as aspas para acessar o valor da propriedade "nome"
//     // O funcionamento é identico ao do código anterior usando o ponto " . "

// console.log(`Os três primeiros digitos da substring são ${cliente["cpf"].substring(0,3)}.`);
//     // Buscando com os colchetes em conjunto com o método da String

// > Porque usar os colchetes??
    // O formado usando os cholchetes é usado para código onde não se sabe quais são os nomes das propriedades

const chaves = [ "nome", "idade", "cpf", "email"];

chaves.forEach( chave => console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`));
    // Devido a interação foi necessário usar os colchetes 
    // A cada interação será passado para os colchetes um novo valor do Array
    // De acordo com o valor passado dentro dos colchetes, a cada interação será buscado uma propriedade dentro do objeto