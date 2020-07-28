/*
var nome = "laercio";
var idade = 30;
var verdadeiro = true;

var nomeCompleto = "laercio Augusto";
var array = [2,3,4,5];

var objeto = {
    nome: "test",
    idade: 25,
}

console.log("Ola mundo");

*/

// var idade = 18;

// if (idade >= 18) {
//     console.log("é maior de idade");
// } else {
//     console.log("Não é maior de idade");
// }

// var variavel2 = Date.now();

// console.log(variavel2);

// var check1 = valor => { console.log(valor); return valor;}

// if (check1(true) || check1(true)) {
//     console.log("passour");
// }

// Exercicios

// 1 tipos de variaveis
function exercicio1e2(){
    console.log("##############################################");
    console.log("########## Exercicio 1   #####################");
    console.log("##############################################");
    console.log("");

    var inteiroPositivo = 5
    var inteiroNegativo = -2;
    var numeroDecimal = 5.8;
    var variavelString = "valor de texto";
    var valorBooleadno = true;

    // 2 impressao de variaveis
    console.log(inteiroPositivo);
    console.log(inteiroNegativo);
    console.log(numeroDecimal);
    console.log(variavelString);
    console.log(valorBooleadno);

    console.log("");
};
exercicio1e2();

// 3 variaveis nome e sobrenome
function exercicio3() {
    console.log("##############################################");
    console.log("########## Exercicio 3   #####################");
    console.log("##############################################");
    console.log("");

    var nome = "laercio";
    var sobrenome = "augusto";
    console.log(`${nome} ${sobrenome}`);

    console.log("");
}
exercicio3();

// 4 executar variavel com nome errado
function exercicio4() {
    console.log("##############################################");
    console.log("########## Exercicio 4   #####################");
    console.log("##############################################");
    console.log("");

    try {
        var nome = "clara";
        console.log(Nome); // gera erro
    }catch(error) {
        console.log('erro no exercicio4:' + error)
    }

    console.log("");
}
exercicio4();

// 5 Console log com dois parametros
function exercicio5() {
    console.log("##############################################");
    console.log("########## Exercicio 5   #####################");
    console.log("##############################################");
    console.log("");

    try {
        var nome = "clara";
        console.log(nome, sobrenome);
    }catch(error) {
        console.log(`erro no exercicio5: ${error}`)
    }

    console.log("");
}
exercicio5();

// 6 text multline
function exercicio6() {
    console.log("##############################################");
    console.log("########## Exercicio 6   #####################");
    console.log("##############################################");
    console.log("");

    var texto = `Essa é a primeira linha 
    eessa é a segunda linha`;

    console.log(texto);

    console.log("");
}
exercicio6();

function exercicio7() {
    console.log("##############################################");
    console.log("########## Exercicio 7   #####################");
    console.log("##############################################");
    console.log("");

    var valorNulo = null;
    var naoDefinido = undefined;

    console.log(valorNulo);
    console.log(naoDefinido);

    console.log("");
}
exercicio7();

function exercicio8() {
    console.log("##############################################");
    console.log("########## Exercicio 8   #####################");
    console.log("##############################################");
    console.log("");

    var frutas = ['mação', 'laranja', 'limão', 'melancia', 'goiaba'];
    console.log(frutas);

    console.log("");
}
exercicio8();

function exercicio9() {
    console.log("##############################################");
    console.log("########## Exercicio 9   #####################");
    console.log("##############################################");
    console.log("");

    var texto = `Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar  e criar o que sempre sonharam.`
    console.log(texto);

    console.log("");
}
exercicio9();

var lista = [
    [1, 2],[1,2]
];

for (var l in lista) {
    console.log(l);
}