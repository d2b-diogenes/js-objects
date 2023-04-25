//Aula 5.4 Encontrando um objeto em um arquivo JSON que contem uma Array um objetos

// > Encontrar um determinado objeto na lista de objetos

const clientes = require("./clientes.json");

function encontrar (lista, chave, valor) {
    // É criada uma função que precisa receber 3 parâmentros para poder encontrar o objeto
    // A lista que deve ser feita a busca, a chave/propriedade onde se quer procurar e o valor procurado

    //return lista.find((item) => item[chave] === valor);
        // O retorno da função irá retornar o primeiro valor encontrado
        // ".find" o método procurado o valor e retorna o primeiro elemento que encontrar
        // "(item) => item[chave] === valor" é a função que será executada para buscar item a item o primeiro objeto que irá satisfazer a condição
        // "(item)" o parâmentro da função, o item da inteiração
        // "item[chave]" pega o item, o objeto, e acessa o valor por meio do "valor" recebido pelo parâmetro
        // "valor" será comparado com o valor encontrado da chave do objeto

    return lista.find((item) => item[chave].includes(valor));
        // ".includes()" É um método Array que também funciona para Strings. Ele verifica se dentro do Array ou se a String contem o valor buscado.
        // Para o caso parece ser melhor aplicado, pois irá tanto procurar o valor tanto dentro de chaves que contem Arrays ou Strings 

}

const encontrado1 = encontrar(clientes, "nome", "Dorothea");
    // A constante recebe a função que irá encontrar o objeto que corresponda à chave e ao valor procurado 

console.log(encontrado1);
    /*
    {
        nome: 'Dorothea',
        email: 'dmutimere@bizjournals.com',
        telefone: [ '6804913737', '68904913737' ],
        endereco: { logradouro: 'Rua Morrow', numero: '1', apartamento: true }
    }
    */

const encontrado2 = encontrar(clientes, "telefone", "97905299624");
    // A constante recebe a função que irá encontrar o objeto que corresponda à chave e ao valor procurado
    // Ao usar o .includes para varificar se continha o valor procurado, passou a ser possível verificar o valor dentro de Arrays

console.log(encontrado2);
    /*
    {
        nome: 'Way',
        email: 'wportmand@census.gov',
        telefone: [ '9705299694', '97905299624' ],
        endereco: {
            logradouro: 'Rua Rockefeller',
            numero: '79',
            cep: '81028 CEDEX 9',
            apartamento: false
        }
    }
    */