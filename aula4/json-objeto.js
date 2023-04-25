// Aula 4.2 

// JSON = Java Script Object Notation

// > Um objeto:

const cliente = {
    nome: "Joao",
    email: "joao@firma.com",
    telefone: ["11223344", "11922334453"],
    endereco: {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
};

/* > Em notação JSON:

{
    "nome": "Joao",
    "email": "joao@firma.com",
    "telefone": ["11223344", "11922334453"],
    "endereco": {
      "rua": "R. Joseph Climber",
      "numero": 1337,
      "apartamento": true,
      "complemento": "ap 934"
    }
}


> Não existe a variável

> Chaves das propriedades têm "" aspas

> Podem existir Arrays e objetos aninhados

> Proibido ter trailing comma - vírgula no último item de um bloco

> Funções não são permitidas

> Comentários não são permitidos

> Suporta apenas tipos primitivos

> Datas e Regex não são aceitas

*/