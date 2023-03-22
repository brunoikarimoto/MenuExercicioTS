export function calcularFatorial(num : number) : number {
    let result : number = 1;

    if(num == 0){
        return result;
    }

    for(num; num > 0; num--){
        result *= num;
    }

    return result;
}

export function calcularExponenciacao(num : number, expoente : number) : number {
    return num**expoente;
}

export function calcularPorcentagem(num : number, porcentagem : number) : number {
    return num*(porcentagem / 100);
}

export function calcularAreaTriangulo(base : number, altura : number) : number {
    return (base * altura) / 2;
}