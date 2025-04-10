const request1 = (API) => {
    const xhr = new XMLHttpRequest;     //Criando o objeto
    xhr.open("GET", API, true);     //Configurando requisição
    xhr.onload = function () {
        if(xhr.status >= 200 && xhr.status <= 300) {

            const dadosRecebidos = JSON.parse(xhr.responseText);
            console.log(dadosRecebidos);
        }else{
            console.error('Error: ', xhr.responseText);
        }

    }
    xhr.send();
};

const request2 = (API) => {
    fetch(API)
        .then(response => response.json())
        .then(dados => console.log("Dados: ", dados))
}

const requests = {
    request1,
    request2
}

export default requests;