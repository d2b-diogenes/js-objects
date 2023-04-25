//Aula 1.9 Deletar uma propriedade

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado;
  // "delete" termo usado antes do objeto e a propriedade que se quer deletar do objeto.
  // Utilizando o PONTO " . " para acessar a propriedade do objeto
  // "objPersonagem.aliado" o objeto e a propriedade que se quer deletar

delete objPersonagem["status"];
  // fazendo o mesmo procedimento para deletar a propriedade do objeto.
  // Utilizando o colchetes e as aspas para acessar a propriedade do objeto
  // "objPersonagem["status"]" objeto e a propriedade que se quer deletar

console.log(objPersonagem);
  // // output: {
  //              nome: 'Gandalf',
  //              classe: 'mago',
  //              nivel: '20',
  //              status: 'desaparecido'
  //            }