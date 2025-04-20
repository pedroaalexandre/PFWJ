window.addEventListener("DOMContentLoaded", function() {
    let filtros = document.getElementById("filtros");
    let txtAlunos = document.getElementById("txtAlunos");


    async function alunos () {
        let link = await fetch("https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json");
        let dados= await link.json();

        console.log(dados);

        const exibirNomes = dados => {
            txtAlunos.innerHTML = "";
            dados.forEach((value) => {
                txtAlunos.innerHTML += `<p>${value.nome}: ${value.notaBim1} (bimestre 1) e ${value.notaBim2} (bimestre 2) = ${value.notaBim1 + value.notaBim2}</p>`;
            });
        }

        filtros.addEventListener("change", () => {
            if(filtros.selectedIndex == 1) {
                exibirNomes(dados);

            }else if(filtros.selectedIndex == 2) {

                const exibirHomens = (dados, sexo) => {
                    return dados.filter(value => value.sexo === sexo);
                };
                exibirNomes(exibirHomens(dados, "M"));

            }else if(filtros.selectedIndex == 3) {

                const exibirMulheres = (dados, sexo) => {
                    return dados.filter(value => value.sexo === sexo);
                };
                exibirNomes(exibirMulheres(dados, "F"));

            }else if(filtros.selectedIndex == 4) {

                const aprovados = (dados, notas) => {
                    return dados.filter (value => value.notaBim1 + value.notaBim2 >= notas);
                }
                exibirNomes(aprovados(dados, 60));

            }else if(filtros.selectedIndex == 5) {

                const reprovados = (dados, notas) => {
                    return dados.filter (value => value.notaBim1 + value.notaBim2 < notas);
                }
                exibirNomes(reprovados(dados, 60));

            }else if(filtros.selectedIndex == 6) {

                const todosAprovados = (dados) => {
                    return dados.notaBim1 + dados.notaBim2 >= 60;
                }
                txtAlunos.innerHTML = dados.every(todosAprovados);

            }else{
                let notasMax = [];

                dados.forEach(value => {
                    notasMax.push(value.notaBim1 + value.notaBim2);
                });
                console.log(notasMax);

                const mediaNotas = (total, num) => {
                    return total + num;
                }

                txtAlunos.innerHTML = `Nota Média = ${(notasMax.reduce(mediaNotas)/dados.length).toFixed(2)}`;
            }
        });

    }

    alunos();
    
});