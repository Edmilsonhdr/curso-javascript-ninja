// <!-- # Desafio da semana #4

// ```js
// /*
// Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
// um único parâmetro como argumento. Essa função deve retornar `true` se o
// equivalente booleano para o valor passado no argumento for `true`, ou `false`
// para o contrário.
// */
// ?
    var isTruthy=(truFals)=>{return truFals?true:false}
// // Invoque a função criada acima, passando todos os tipos de valores `falsy`.
// ?
    isTruthy(false);
    isTruthy(null);
    isTruthy(undefined);
    isTruthy(0);
    isTruthy(NaN);
    isTruthy("");

// Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
// */
// ?
    isTruthy(true);
    isTruthy({});
    isTruthy([]);
    isTruthy(10);
    isTruthy("ola");
    isTruthy(new Date());
    isTruthy(-20);
    isTruthy(1.14);
    isTruthy(-1.14);
    isTruthy(Infinity);
    isTruthy(-Infinity);
// /*
// Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
// seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
// - `marca` - String
// - `modelo` - String
// - `placa` - String
// - `ano` - Number
// - `cor` - String
// - `quantasPortas` - Number
// - `assentos` - Number - cinco por padrão
// - `quantidadePessoas` - Number - zero por padrão
// */
// ?
    var carro= {
        marca:"Honda",
        modelo:"Civic",
        placa:"4512-DCVL",
        ano:2021,
        cor:"Preto",
        quantasPortas:4,
        assentos:5,
        quantidadePessoas:0
    }
// /*
// Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
// passado por parâmetro.
// */
// ?
    carro.mudarCor=(escolhaCor)=>{return carro.cor=escolhaCor}
    //carro.mudarCor()
    
// /*
// Crie um método chamado `obterCor`, que retorne a cor do carro.
// */
// ?
    carro.obterCor=()=>{return carro.cor}
    //carro.obterCor()
// /*
// Crie um método chamado `obterModelo` que retorne o modelo do carro.
// */
// ?
    carro.obterModelo=()=>{return carro.modelo}
    //carro.obterModelo()
// /*
// Crie um método chamado `obterMarca` que retorne a marca do carro.
// */
// ?
    carro.obterMarca=()=>{return carro.marca}
// /*
// Crie um método chamado `obterMarcaModelo`, que retorne:
// "Esse carro é um [MARCA] [MODELO]"
// Para retornar os valores de marca e modelo, utilize os métodos criados.
// */
// ?
    carro.obterMarcaModelo=()=>{return `Esse carro é um ${carro.obterModelo()} ${carro.obterMarca()}`}
    //carro.obterMarcaModelo()
// /*
// Crie um método que irá adicionar pessoas no carro. Esse método terá as
// seguintes características:
// - Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
// número não precisa encher o carro, você poderá acrescentar as pessoas aos
// poucos.
// - O método deve retornar a frase: "Já temos [X] pessoas no carro!"
// - Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
// deve retornar a frase: 
// - Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
// parâmetro for ultrapassar o limite de assentos do carro, então você deve
// mostrar quantos assentos ainda podem ser ocupados, com a frase:
// "Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
// - Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
// citado acima, no lugar de "pessoas".
// */
// ?
    carro.addPessoas=(numPessoasEntrarCarro)=>{
        carro.quantidadePessoas=numPessoasEntrarCarro
        
        if(carro.quantidadePessoas>=carro.assentos) {
        return "O carro já está lotado!"
    }else if(carro.quantidadePessoas<4) {
        return `Só cabem mais ${carro.assentos-carro.quantidadePessoas} pessoas!`
    }else if(carro.quantidadePessoas===4) {
        return `Só cabem mais ${carro.assentos-carro.quantidadePessoas} pessoa!`
    }
  
}
    //carro.addPessoas()
    
// /*
// Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
// utilize sempre o formato de invocação do método (ou chamada da propriedade),
// adicionando comentários _inline_ ao lado com o valor retornado, se o método
// retornar algum valor.

// Qual a cor atual do carro?
// */
// ?
    carro.obterCor()//Preto
// // Mude a cor do carro para vermelho.
// ?
    carro.mudarCor("Vermelho")//Verde
// // E agora, qual a cor do carro?
// ?
    //Vermelho
// // Mude a cor do carro para verde musgo.
// ?
    carro.mudarCor("verde musgo")
// // E agora, qual a cor do carro?
// ?
    //verde musgo
// // Qual a marca e modelo do carro?
// ?
    console.log(carro.obterMarcaModelo())
// // Adicione 2 pessoas no carro.
// ?
    carro.addPessoas(2)
    //console.log(carro)
// // Adicione mais 4 pessoas no carro.
// ?
    carro.addPessoas(4)
    
// // Faça o carro encher.
// ?
    carro.addPessoas(5)
// // Tire 4 pessoas do carro.
// ?
    carro.addPessoas(1)
// // Adicione 10 pessoas no carro.
// ?
    carro.addPessoas(10)
