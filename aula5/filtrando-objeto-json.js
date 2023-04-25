//Aula 5.4 Filtando um objeto em um arquivo JSON que contem uma Array um objetos

// > Filtrando objetos que atendam determinada condição

const clientes = require("./clientes.json");

function filtrarClientesSemComplementoNoEndereco(lista) {

    return lista.filter((cliente) => { 

        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
            // Irá retornar "true" para os clientes/objetos onde "apartamento" for "true" e que não contenha a propriedade "complemento"

    })
}

const listaClientesSemComplemento = filtrarClientesSemComplementoNoEndereco(clientes);

console.log(listaClientesSemComplemento);
    /*output: //Retornou 3 clientes que satisfizeram as condições 
    [
        {
            nome: 'Blakeley',
            email: 'bmccaughran5@blog.com',
            telefone: [ '7919437785', '79919437785' ],
            endereco: {
            logradouro: 'Rua Stone Corner',
            numero: '40429',
            cep: '1000',
            apartamento: true
            }
        },
        {
            nome: 'Emilee',
            email: 'eempsonc@bloomberg.com',
            telefone: [ '4775323087', '47975323087' ],
            endereco: { logradouro: 'Rua West', numero: '8', apartamento: true }
        },
        {
            nome: 'Dorothea',
            email: 'dmutimere@bizjournals.com',
            telefone: [ '6804913737', '68904913737' ],
            endereco: { logradouro: 'Rua Morrow', numero: '1', apartamento: true }
        }
    ]
     */