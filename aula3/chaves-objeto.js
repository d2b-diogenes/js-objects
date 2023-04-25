// Aula 3.4 "Object.keys()" - Método do objeto que retorna uma Array com as chaves dele

// .includes() Método do Array que procura por um elemento e retorna True, se acha, ou False, se não acha.

// Será usado o "object.keys()" e o "includes()" para verificar se existe determinada chave no objeto 

 
const cliente = {

    nome: "Carlos Lima",
    cpf: "12345678911",
    email: "carlos@dominio.com",
    telefone: ["1122334455", "2233445566"],

}

const chavesDoObjeto = Object.keys(cliente);
// A constante "chavesDoObjeto" irá receber uma Array com todas as chaves do objeto cliente;

console.log(chavesDoObjeto);
    // output: [ 'nome', 'cpf', 'email', 'telefone' ]

if (!chavesDoObjeto.includes("enderecos")) {
    // A condição irá verificar se dentro do Array está contido o termo "enderecos". 
    // "includes()" buscará dentro do Array "chavesDoObjeto" o termo "enderecos". Será retornado "true" ou "false".
    // Se não estiver contido, será retornado o boolean "false"
    // Nesse caso, será retornado "false", pois não será encontrado o termo
    // Para entrar no IF será necessário negar "!" a proposição para torná-la "true"
    
    console.error("Erro. Insira um endereço válido.");
        // output: Erro. É preciso cadastrar um endereço.
        // Foi procurado dentro do objeto a propriedade "enderecos" e não foi encontrada.
        // Bloco de comando que será executado no cado de não encontrar o termo procurado 
    
}