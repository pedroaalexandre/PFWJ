window.addEventListener("DOMContentLoaded", function() {
    let idades = [10, 21, 19, 35, 48];

    //Idade inserida pelo usuário
    let entrada = prompt("Digite uma idade: ");

    //A soma das idades
    const soma = (total, x) => {return total + x};

    console.log(idades.reduce(soma));
    document.writeln(`<p>A soma das idades: ${idades.reduce(soma)}</p>`);

    //Média das idades
    console.log(idades.reduce(soma)/idades.length);
    document.writeln(`<p>Média das idades: ${idades.reduce(soma)/idades.length}</p>`);

    //A maior idade
    const maiorIdade = (maior, idades) => {
        if(idades > maior) maior = idades;
        return maior;
    };
    console.log(idades.reduce(maiorIdade));
    document.writeln(`<p>A maior idade: ${idades.reduce(maiorIdade)}</p>`);

    //As idades ímpares
    const impares = idades => {
        if(idades % 2 != 0) return idades;
    }
    console.log(idades.filter(impares));
    document.writeln(`<p>As idades ímpares: ${idades.filter(impares)}</p>`);

    //Todos são maiores?
    const maioresDeIdade = idades => {
        return idades > 18;
    }
    console.log(idades.every(maioresDeIdade));
    document.writeln(`<p>Todos são maiores?: ${idades.every(maioresDeIdade)}</p>`);

    //Todas as idades são maiores ou iguais às idades digitadas pelo usuário?
    const entradaEMaior = idades => {
        return idades >= entrada;
    }
    console.log(idades.every(entradaEMaior));
    document.writeln(`<p>Todas as idades são maiores ou iguais às idades digitadas pelo usuário?: ${idades.every(entradaEMaior)}</p>`);

    //Todas as idades maiores ou iguais a determinada idade.
    console.log(idades.filter(entradaEMaior));
    document.writeln(`<p>Todas as idades maiores ou iguais a determinada idade: ${idades.filter(entradaEMaior)}</p>`);

    //Média de todas as idades maiores ou iguais a determinada idade.
    let filtroIdades = idades.filter(entradaEMaior);
    console.log(filtroIdades.reduce(soma)/filtroIdades.length);
    document.writeln(`<p>Média de todas as idades maiores ou iguais a determinada idade: ${filtroIdades.reduce(soma)/filtroIdades.length}</p>`);

});