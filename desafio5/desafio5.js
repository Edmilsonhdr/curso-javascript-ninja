// /*
// Crie uma variável qualquer, que receba um array com alguns valores aleatórios
// - ao menos 5 - (fica por sua conta os valores do array).
// */
// // ?
    var meuArray=[1,"di",[],{name:"joao"},5]
// /*
// Crie uma função que receba um array como parâmetro, e retorne esse array.
// */
// // ?
    function myFunction(lista){
        return lista
    }
// /*
// Imprima o segundo índice do array retornado pela função criada acima.
// */
// // ?
    console.log(myFunction(meuArray[1]))
// /*
// Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
// segundo, um número. A função deve retornar o valor de um índice do array que foi passado
// no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
// segundo parâmetro.
// */
// // ?
    function novaArray(valorArray,numero){
        return valorArray[numero]
    }

    console.log(novaArray(meuArray,3))
// /*
// Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
// */
// // ?
    var tipos=[1,true,{name:"maria"},[],"joao"]
// /*
// Invoque a função criada acima, fazendo-a retornar todos os valores do último
// array criado.
// */
// // ?
    console.log(myFunction(tipos))
// /*
// Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
// livro. Dentro dessa função, declare uma variável que recebe um objeto com as
// seguintes características:
// - esse objeto irá receber 3 propriedades, que serão nomes de livros;
// - cada uma dessas propriedades será um novo objeto, que terá outras 3
// propriedades:
//     - `quantidadePaginas` - Number (quantidade de páginas)
//     - `autor` - String
//     - `editora` - String
// - A função deve retornar o objeto referente ao livro passado por parâmetro.
// - Se o parâmetro não for passado, a função deve retornar o objeto com todos
// os livros.
// */
// // ?
    function book(livro){
        var allBooks={
            'projeto Apis':{
                quantidadePaginas:50,
                autor:"Marcos",
                editora:"Leya",  
            },
            'Codigo Limpo':{
                quantidadePaginas:200,
                autor:"Mateus",
                editora:"Planeta",
            },
            'Nova Psicologia':{
                quantidadePaginas:300,
                autor:"Aline",
                editora:"Matrix"
            }
                      
        };
        return !livro? allBooks : allBooks[livro];

        // return allBooks[livro]  //toda vez q usarmos uma string como prop de objeto usaremos desta forma nao com ponto
    
    }
    book()
// /*
// Usando a função criada acima, imprima o objeto com todos os livros.
// */
// // ?
    console.log(book())
// /*
// Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
// usando a frase:
// "O livro [NOME_DO_LIVRO] tem [X] páginas!"
// */
// // ?
    var nomeLivro="Codigo Limpo"
    console.log(`O ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas} paginas`)
// /*
// Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
// a frase:
// "O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
// */
// // ?
 console.log(`O autor do livro ${nomeLivro} é ${book(nomeLivro).autor}`)
// /*
// Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
// a frase:
// "O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
// */
// // ?
    console.log(`O livro ${nomeLivro} foi publicado pela editora ${book(nomeLivro).editora}`)