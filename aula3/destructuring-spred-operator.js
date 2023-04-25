// Aula 3.7 Destructuring e Spread Operador

const cliente = {
    nomeCliente: "carlos",
    idade: 29,
    peso: 72,
    localNascimento: "brasilia"
}

// > Usando o Destructruing para atribuir uma variável para cada propriedade do objeto
    // O Destructurin torna o código menos verboso

const {nomeCliente, idade, peso, localNascimento} = cliente;
    // Todos as proprieadade ganharam uma variável e poderá ser usada no código sem ter que chamar o objeto.
    // Como se trata de um Objeto, então as variáveis devem vir entre Chaves.
    // Seria o mesmo que: const localNascimento = cliente.localNascimento;


console.log(localNascimento);
    // output: brasilia
    // Foi chamada a variável para a qual foi atribuída o valor da propriedade do objeto sem precisar chamar o objeto


// > Usando o Destructruing para atribuir uma variável para uma das propriedades do Objeto

const encomenda = {

    destinatario: "marta",
    telefone: 223454,
    enderecoEncomenda: "brasilia"
}

const {destinatario} = encomenda;
    // Apenas 1 proprieadade ganhou uma variável e poderá ser usada no código sem ter que chamar o objeto.
    // Seria o mesmo que: const destinatario = cliente.destinatario;

console.log(destinatario);
    //output: marta
    // Foi chamada a variável para a qual foi atribuída o valor da propriedade do objeto sem precisar chamar o objeto


// > Usando o Destructruing e dando nome às variáveis de um objeto que tem os nomes das suas propriedades "ruins"

const empresa = {
    a: "MX Travel",
    b: "00.000.034-12",
    c: "michel"
}

const {a:nomeEmpresa, b:cnpj, c: dono } = empresa;

console.log(nomeEmpresa, cnpj, dono);
    //output: MX Travel 00.000.034-12 michel 


// > Usando o Destructruing e dando nome às propriedades de uma função
function imprimir({destinatario, telefone, enderecoEncomenda}) {
        // Foi feito o Destruturing das propriedades do objeto nos parâmetros da função
        // Foi colocado entre chaves, pois é um objeto
        // Os nome que vão dentro das chaves e dos parâmentros são os mesmo nomes das propriedades do objeto

    console.log(destinatario); //
    console.log(telefone);
    console.log(enderecoEncomenda);
}

imprimir(encomenda);
    //Só passa o objeto, pois na função já foi feito o Destructuring e ele já pega as propriedades do objeto


// > Usando o Destruction para atribuir uma variável para cada elemento do Array

const [num1 , num2 ] = [4, 5];

console.log (num1, num2);
    // output: 4 5
    // Os 2 elementos do Array ganharam uma variável e poderá ser usada no código sem ter que chamar o objeto.



const [ num3 , num4 ] = [1, 2, 3];
    // Dos 3 elementos do Array, apenas 2 ganharam uma variável.

console.log ( num3, num4 );
    //output: 1 2 



const [num5 , num6, outrosNumeros ] = [6, 7, 8, 9, 1, 2];
    // Dos 3 elementos do Array, apenas 3 ganharam uma variável.

console.log (num5, num6, outrosNumeros);
    // output: 6 7 8


const [num7 , num8, ...outrosNumerosArray ] = [6, 7, 8, 9, 1, 2];
    // Dos 6 elementos do Array, os 2 primeiros ganharam cada 1 uma variável e os demais entraram em um Array
    // O uso do Destructuring "...outrosNumerosArray" fez com que a variável recebesse os demais elementos do Array [8, 9, 1, 2]
    
console.log (num7, num8, outrosNumerosArray);
    //output: 6 7 [ 8, 9, 1, 2 ] 
