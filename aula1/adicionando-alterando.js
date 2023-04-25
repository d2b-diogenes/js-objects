// Aula 1.7 Adicionando e Alterando

const pessoa = {

    nome: "Luma",
    profissao: "Engenheira",

};

console.log(pessoa.nome);
    // output: Luma
console.log(pessoa.telefone);
    // output: undefined 
    // Retornar "undefined", pois foi tentado acessar uma propriedade que não foi definida/inicializada


// > Adicionando uma propriedade no objeto e atribuindo um valor a ela
pessoa.telefone = "11 22334455";
    //Criando chave e valor de um objeto

    // > Não é possível adicionar uma propriedade usando colchetes
        
    //     pessoa[telefone] = "22 11334455";
        

console.log(pessoa.telefone);
    // output: 11 22334455
    // Depois de criado a propriedade para o objeto, retornou o valor atribuido quando o objeto foi criado


// > Alterando o valor de uma propriedade do objeto
pessoa.nome = "Luma Lima";
    //Alterando o valor da chave "nome" do objeto

console.log(pessoa.nome);
    // output: Luma Lima
    // O valor da propriedade "nome" do objeto foi alterado






// > A constante permite apenas manipular as propriedades e valores de dentro do objeto
    // A constante não permite reatribuição
    
// pessoa = { rua: "QE", numero: 14};
//     // "pessoa" é uma constante e não será permitido uma nova atribuição

// console.log(pessoa);
//     //TypeError: Assignment to constant variable.


