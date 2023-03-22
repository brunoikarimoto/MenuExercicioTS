"use strict";
exports.__esModule = true;
exports.calcularAreaTriangulo = exports.calcularPorcentagem = exports.calcularExponenciacao = exports.calcularFatorial = void 0;
function calcularFatorial(num) {
    var result = 1;
    if (num == 0) {
        return result;
    }
    for (num; num > 0; num--) {
        result *= num;
    }
    return result;
}
exports.calcularFatorial = calcularFatorial;
function calcularExponenciacao(num, expoente) {
    return Math.pow(num, expoente);
}
exports.calcularExponenciacao = calcularExponenciacao;
function calcularPorcentagem(num, porcentagem) {
    return num * (porcentagem / 100);
}
exports.calcularPorcentagem = calcularPorcentagem;
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
exports.calcularAreaTriangulo = calcularAreaTriangulo;
