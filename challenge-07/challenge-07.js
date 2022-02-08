// /*
// Crie um array com 5 items (tipos variados).
// */
// // ?
    let myArray=[1,"edmilson",true,{nome:"joao"},10]
// /*
// Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
// A função deverá retornar o array atualizado.
// */
// // ?
    function addItem(item){
        return myArray.push(item)
    }
    
    addItem("idade")
    //console.log(myArray)
// /*
// Adicione um novo array ao array criado no início do desafio, com ao menos 3
// itens de tipos diferentes, mostrando o resultado no console.
// */
// // ?
    addItem(["Gustavo",20,false])
    console.log(myArray)
// /*
// Mostre no console o segundo elemento desse último array, criado acima, com a
// frase:
// "O segundo elemento do segundo array é [ELEMENTO]."
// */
// // ?
    console.log(myArray[6][1])
// /*
// Mostre no console quantos itens tem o primeiro array criado, com a frase:
// "O primeiro array tem [QUANTIDADE DE ITENS] itens."
// */
// // ?
    console.log(myArray.length)
// /*
// Agora mostre no console quantos itens tem o segundo array criado, com a frase:
// "O segundo array tem [QUANTIDADE DE ITENS] itens."
// */
// // ?
    console.log(myArray[6].length)
// /*
// Utilizando a estrutura de repetição `while`, mostre no console todos os números
// pares entre 10 e 20, inclusive esses 2.
// */
// console.log( 'Números pares entre 10 e 20:' );
// // ?
var numUm=10;
    // while (numUm<=20) {
    //     numUm % 2 === 0 ? console.log(numUm) : '';
    //     numUm++
    // }
    
// /*
// Na mesma ideia do exercício acima: mostre agora os números ímpares.
// */
// console.log( 'Números ímpares entre 10 e 20:' );
// // ?
var numImpar=10

// while (numImpar<=20) {
//     numImpar % 2 != 0 ? console.log(numImpar) : '';
//     numImpar++
// }

// /*
// Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
// Só vamos mudar o range:
// - No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
// - No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
// */
// console.log( 'Números pares entre 100 e 120:' );
// // ?
    for(var i=0;i<=20;i++){
        i % 2 === 0 ? console.log(i) : '';
    }
// console.log( 'Números ímpares entre 111 e 125:' );
// // ?
for(var n=0;n<=20;n++){
    n % 2 === 0 ? console.log(n) : '';
}

