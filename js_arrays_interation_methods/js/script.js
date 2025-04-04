window.addEventListener("DOMContentLoaded", function() {

    const funcionarios = [
        {nome: "Ana", idade: 18, genero: "F", salario: 1000.00},
        {nome: "Joao", idade: 20, genero: "M", salario: 3000.00},
        {nome: "Cesar", idade: 33, genero: "M", salario: 1900.00},
        {nome: "Maria", idade: 12, genero: "F", salario: 7000.00},
        {nome: "Ze", idade: 17, genero: "M", salario: 2400.00}
    ];

    //Exibir o nome e a idade de pessoas maiores de idade
    document.writeln(`Maiores de idade: `)
    funcionarios.filter(funcionarios => {
        if(funcionarios.idade >= 18) return document.writeln(`<p>Nome: ${funcionarios.nome}, Idade: ${funcionarios.idade}</p>`);
    });


    //Exibir o nome de todas as pessoas do sexo masculino]
    document.writeln(`Pessoas do sexo masculino: `)
    funcionarios.filter(funcionarios => {
        if(funcionarios.genero == "M") return document.writeln(`${funcionarios.nome};`);
    });


    //Exibir dados da pessoa com o maior salário
    const maiorSalario = funcionarios.reduce((maior, funcionarios) => {
        return funcionarios.salario > maior.salario ? funcionarios : maior;
    })

    exibirMaiorSalario = JSON.stringify(maiorSalario);
    document.writeln(`<p>Maior salário: ${exibirMaiorSalario}</p>`)

    // Há alguma mulher que ganha acima de 5000,00?
    const generoESalario = funcionarios.some((funcionarios) => {
        if(funcionarios.genero == "F" && funcionarios.salario > 5000) return true;
    })
    document.writeln(`<p>Há alguma mulher que ganha acima de 5000,00? ${generoESalario}</p>`);    

    // Media dos salarios dos homens e das mulheres

    // const mediaDeSalarios = funcionarios.reduce((total, funcionarios) => {
    //    return (total + funcionarios.salario);
    // }, 0)/funcionarios.length;

    const homens = funcionarios.filter(funcionarios => { if(funcionarios.genero == "M") return funcionarios});
    const mulheres = funcionarios.filter(funcionarios => { if(funcionarios.genero == "F") return funcionarios});

    const mediaDeSalariosHomens = homens.reduce((total, homens) => {return (total + homens.salario)}, 0)/homens.length;
    const mediaDeSalariosMulheres = mulheres.reduce((total, mulheres) => {return (total + mulheres.salario)}, 0)/mulheres.length;

    console.log(mediaDeSalariosHomens.toFixed(2));

    document.writeln(`<p>Média de salário dos homens: R$${mediaDeSalariosHomens.toFixed(2)}</p>`);
    document.writeln(`<p>Média de salário das mulheres: R$${mediaDeSalariosMulheres}</p>`);
});