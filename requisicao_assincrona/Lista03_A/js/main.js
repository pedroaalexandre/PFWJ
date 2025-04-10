import requests from "./request.js";

window.addEventListener("DOMContentLoaded", function() {
    requests.request1("https://pedroaalexandre.github.io/PFWJ/requisicao_assincrona/dados.JSON");
    requests.request2("https://pedroaalexandre.github.io/PFWJ/requisicao_assincrona/dados.JSON");
    
});
