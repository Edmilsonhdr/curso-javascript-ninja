// # Desafio da semana #3

// ```js
// // Declarar uma variável qualquer, que receba um objeto vazio.
// ?
    var myVar
// /*
// Declarar uma variável `pessoa`, que receba suas informações pessoais.
// As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
// - `nome` - String
// - `sobrenome` - String
// - `sexo` - String
// - `idade` - Number
// - `altura` - Number
// - `peso` - Number
// - `andando` - Boolean - recebe "falso" por padrão
// - `caminhouQuantosMetros` - Number - recebe "zero" por padrão
// */
// ?
    var pessoa={
        nome:"Edmilson",
        sobrenome:"Henrique",
        sexo:"Masculino",
        idade:23,
        altura:1.73,
        peso:82,
        andando:false,
        caminhouQuantosMetros:0
    }
// /*
// Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
// alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
// for chamado.
// */
// ?
pessoa.fazerAniversario=()=>{return pessoa.idade++}
//pessoa.fazerAniversario()


// /*
// Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
// características:
// - Esse método deve receber por parâmetro um valor que representará a quantidade
// de metros caminhados;
// - Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
// valor dessa propriedade a quantidade passada por parâmetro;
// - Ele deverá modificar o valor da propriedade `andando` para o valor
// booleano que representa "verdadeiro";
// */
// ?
    pessoa.andar=(mCaminhados)=>{(pessoa.caminhouQuantosMetros+=mCaminhados),pessoa.andando=true}
    
    
// /*
// Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
// da propriedade `andando` para o valor booleano que representa "falso".
// */
// ?
    pessoa.parar=()=>{pessoa.andando=false}
    pessoa.parar()
    
// /*
// Crie um método chamado `nomeCompleto`, que retorne a frase:
// - "Olá! Meu nome é [NOME] [SOBRENOME]!"
// */
// ?
    pessoa.nomeCompleto=()=>{return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`}
    pessoa.nomeCompleto()
    
// /*
// Crie um método chamado `mostrarIdade`, que retorne a frase:
// - "Olá, eu tenho [IDADE] anos!"
// */
// ?
    pessoa.mostrarIdade=()=>{return `Olá, eu tenho ${pessoa.idade} anos!`}
    pessoa.mostrarIdade()
// /*
// Crie um método chamado `mostrarPeso`, que retorne a frase:
// - "Eu peso [PESO]Kg."
// */
// ?
    pessoa.mostrarPeso=()=>{return `Eu peso ${pessoa.idade}Kg`}
    pessoa.mostrarPeso()
    
    // /*
// Crie um método chamado `mostrarAltura` que retorne a frase:
// - "Minha altura é [ALTURA]m."
// */
// ?
    pessoa.mostrarAltura=()=>{return `Minha altura é ${pessoa.altura}m`}
    pessoa.mostrarAltura()
    
// /*
// Agora vamos brincar um pouco com o objeto criado:
// Qual o nome completo da pessoa? (Use a instrução para responder e comentários
// inline ao lado da instrução para mostrar qual foi a resposta retornada)
// */
// ?
    console.log(pessoa.nomeCompleto())//Olá! Meu nome é Edmilson Henrique!
// /*
// Qual a idade da pessoa? (Use a instrução para responder e comentários
// inline ao lado da instrução para mostrar qual foi a resposta retornada)
// */
// ?
    console.log(pessoa.mostrarIdade())//Olá, eu tenho 23 anos!
// /*
// Qual o peso da pessoa? (Use a instrução para responder e comentários
// inline ao lado da instrução para mostrar qual foi a resposta retornada)
// */
// ?
    console.log(pessoa.mostrarPeso())//Eu peso 23Kg
// /*
// Qual a altura da pessoa? (Use a instrução para responder e comentários
// inline ao lado da instrução para mostrar qual foi a resposta retornada)
// */
// ?
    console.log(pessoa.mostrarAltura())//Minha altura é 1.73m
// /*
// Faça a `pessoa` fazer 3 aniversários.
// */
// ?
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()


// /*
// Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
// comentários inline ao lado da instrução para mostrar qual foi a resposta
// retornada)
// */
// ?
pessoa.mostrarIdade()//Olá, eu tenho 26 anos!
// /*
// Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
// com metragens diferentes passadas por parâmetro.
// */
// ?
    pessoa.andar(20)
    pessoa.andar(50)
    pessoa.andar(60)
    
// /*
// A pessoa ainda está andando? (Use a instrução para responder e comentários
// inline ao lado da instrução para mostrar qual foi a resposta retornada)
// */
// ?
    //andando true
// /*
// Se a pessoa ainda está andando, faça-a parar.
// */
// ?
    pessoa.parar()

// /*
// E agora: a pessoa ainda está andando? (Use uma instrução para responder e
// comentários inline ao lado da instrução para mostrar a resposta retornada)
// */
// ?
    // andando false
// /*
// Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
// inline ao lado da instrução para mostrar a resposta retornada)
// */
// ?
    //caminhouQuantosMetros:130
// /*
// Agora vamos deixar a brincadeira um pouco mais divertida! :D
// Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
// retornar a string:
// - "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

// Só que, antes de retornar a string, você vai fazer algumas validações:
// - Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
// apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
// - Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
// palavra "ano" ao invés de "anos", pois é singular;
// - Se a quantidade de metros caminhados for igual a `1`, então a palavra que
// deve conter no retorno da frase acima é "metro" no lugar de "metros".
// - Para cada validação, você irá declarar uma variável localmente (dentro do
// método), que será concatenada com a frase de retorno, mostrando a resposta
// correta, de acordo com os dados inseridos no objeto.
// */
// ?
    pessoa.apresentacao=()=>{
        return `Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, ${pessoa.altura}, meu peso é ${pessoa.peso} e, 
        só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`
    }
    
// // Agora, apresente-se ;)
// ?
// ```
console.log(pessoa.apresentacao())//Olá, eu sou o Edmilson Henrique, tenho 26 anos, 1.73, meu peso é 82 e,
//só hoje, eu já caminhei 130 metros!
