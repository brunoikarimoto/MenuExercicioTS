"use strict";
exports.__esModule = true;
var funcao = require("./exercicioFuncoes");
var user, num, result, expoente, porcentagem, base, altura;
var teclado = require('prompt-sync')();
do {
    console.log("Escolha uma opção:");
    console.log("1 - Fatorial;");
    console.log("2 - Exponenciação;");
    console.log("3 - Porcentagem;");
    console.log("4 - Área do trinângulo;");
    console.log("5 - Sair.");
    user = teclado();
    switch (user) {
        case "1":
            do {
                console.log("(Apenas números positivos!)");
                console.log("Digite um número:");
                num = teclado();
                num = Number(num);
            } while (num < 0);
            result = funcao.calcularFatorial(num);
            console.log("Fatorial: " + result);
            break;
        case "2":
            do {
                console.log("(Apenas números positivos!)");
                console.log("Digite um número:");
                num = teclado();
                num = Number(num);
                console.log("Digite o expoente:");
                expoente = teclado();
                expoente = Number(expoente);
            } while (num < 0 || expoente < 0);
            result = funcao.calcularExponenciacao(num, expoente);
            console.log("Resultado exponenciação: " + result);
            break;
        case "3":
            do {
                console.log("(Apenas números positivos!)");
                console.log("Digite um número:");
                num = teclado();
                num = Number(num);
                console.log("Digite a porcentagem:");
                porcentagem = teclado();
                porcentagem = Number(porcentagem);
            } while (num < 0 || porcentagem < 0);
            result = funcao.calcularPorcentagem(num, porcentagem);
            console.log(porcentagem + "% de " + num + ": " + result);
            break;
        case "4":
            do {
                console.log("(Apenas números positivos!)");
                console.log("Digite a base:");
                base = teclado();
                base = Number(base);
                console.log("Digite a altura:");
                altura = teclado();
                altura = Number(altura);
            } while (base < 0 || altura < 0);
            result = funcao.calcularAreaTriangulo(base, altura);
            console.log("Área do Triângulo: " + result);
            break;
        case "5":
            break;
        default:
            console.log("Valor inválido.");
    }
} while (user != 5);
console.log("Fim!!");
