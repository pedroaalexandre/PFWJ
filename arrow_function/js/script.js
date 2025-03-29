window.addEventListener('DOMContentLoaded', function() {

    const vetIdades = [10, 21, 31, 40];

    const somarIdades = vet => {
        var total = 0;
        for(i=0; i<vet.length; i++) total += vet[i];
        return total;
    }
    
    const mediaIdades = vet => {
        var total = 0;
        for(i=0; i<vet.length; i++) total += vet[i];
        return total/vet.length;
    }

    const idadesImpares = vet => {
        vetImpares = [];
        for(i=0; i<vet.length; i++) if(vet[i] % 2 != 0) vetImpares.push(vet[i]);
        return vetImpares;
    }

    const maiorIdade = vet => {
        idade = 18;
        vetorMenorIdade = [];
        for(i = 0; i<vet.length; i++) {
            if(vet[i] < 18) vetorMenorIdade.push(vet[i]);
        }
        return vetorMenorIdade.length == 0 ? true : false;
    };

    txtIdade = prompt("Informe a idade a ser usada como parâmetro");

    const todosMaiores = vet => {
        idade = txtIdade;
        vetorMenorIdade = [];
        for(i = 0; i<vet.length; i++) {
            if(vet[i] < txtIdade) vetorMenorIdade.push(vet[i]);
        }
        return vetorMenorIdade.length == 0 ? true : false;
    };

    const maioresOuIguais = vet => {
        idade = txtIdade;
        vetorMenorIdade = [];
        for(i = 0; i<vet.length; i++) {
            if(vet[i] >= txtIdade) vetorMenorIdade.push(vet[i]);
        }
        return vetorMenorIdade;
    };

    var vetorIdadeParam = maioresOuIguais(vetIdades);
    


    

    document.write(`<p>Soma das idades = ${somarIdades(vetIdades)}<p>`);
    document.write(`<p>Média das idades = ${mediaIdades(vetIdades)}<p>`);
    document.write(`<p>Idades ímpares = ${idadesImpares(vetIdades)}<p>`);
    document.write(`<p>Todos são maiores de idade? ${maiorIdade(vetIdades)}<p>`);
    document.write(`<p>Todos são maiores que a idade digitada? ${todosMaiores(vetIdades)}<p>`);
    document.write(`<p>Idades maiores ou iguais a idade digitada: ${maioresOuIguais(vetIdades)}<p>`);
    document.write(`<p>Média das idades iguais ou maiores à idade digitada: ${mediaIdades(vetorIdadeParam)}<p>`);
    
});