//Aula 2.7 Objeto literal e referência


// Um objeto literal

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

console.log(objPersonagem.nome) //Gandalf

// Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves{ }, que atribuímos a uma variável para que o valor possa ser acessado depois.

// Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. 
// Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele.

const objPersonagem2 = objPersonagem;
objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

    // variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem.
    // Assim, qualquer alteração em qualquer um dos objetos altera ambos. 
    // Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia.


// > Obs.: Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):


// > Como é possível contornar e criar uma cópia? 
    // Usando o método Object.create()

const objPersonagemCopiado = Object.create(objPersonagem);
    // O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro.
    // Dessa forma, "objPersonagemCopiado" é uma instância diferente de "objPersonagem" e pode ser trabalhada de forma independente.

objPersonagemCopiado.nome = "Gandalf, o Mago"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagemCopiado.nome) //Gandalf, o Mago




