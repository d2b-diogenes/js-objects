//Aula 5.5 Ordenando uma lista de objetos


// > Ordenando uma lista de objetos por meio de um das chaves/propriedade

const clientes = require("./clientes.json");

function ordenar(lista, chave) {

    return lista.sort((a, b) => {
        // ".sort()" é um método que faz a ordenação dos elementos de um Array tomando como base os códigos unicode dos elementos
        // É passado para o método 2 parâmentros, que são os elementos que serão comparados para fazer a ordenação

        if (a[chave] > b[chave]) { // Se A é MAIOR que B, retonar 1
            return 1
        }
        if (a[chave] < b[chave]) { // Se A é MENOR que B, retonar -1
            return -1
        }
        else 0 //Se A é igual a B, retonar 0

    })

}

const listaOrdenada = ordenar(clientes, "nome");
    // A constante irá receber a lista ordanda como retorno da função "ordenar"
    // É passado como parâmentro para a função a lista que se quer ordenar e por qual chave/propriedade se quer ordenar

console.log(listaOrdenada);
    // Retorna lista ordenada pela chave "nome"




