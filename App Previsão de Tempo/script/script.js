//Consumo de API 


//cria a variavel key que esta armazenando a chave do link
const key = "08536f4569b8315b9a4047ce70707da4";

//Cria uma funcao para armazenar e exibir as definicoes
function colocarDadosTela(dados) {

    //seleciona o elemento com class cidade
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

    //seleciona o elemento com class tempo
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C";

    //seleciona o elemento com class texto-previsao
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;

    //seleciona o elemento com class umidade
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%";

    //seleciona o elemento com class img-previsao
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;   
}

//cria uma funcao que serve para fazer a buscar pelas cidades na api
async function buscarCidade(cidade) {

    //Cria uma variavel que armazena os dados 
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    //Chama pela funcao colocarDadosTela
    colocarDadosTela(dados);
}

//Cria a funcao na para o botao
function cliqueiNoBotao() {

    //Cria uma variavel que guarda o valor do botao
    const cidade = document.querySelector(".input-cidade").value;

    //Chama Pela funcao buscarCidade
    buscarCidade(cidade);

};

var inputCidade = document.querySelector(".input-cidade");

inputCidade.addEventListener('keyup', function(event){
    //Verifica se a tecla pressionada é Enter
    if (event.key === 'Enter') {
        // Cria uma variável que guarda o valor do input
        const cidade = inputCidade.value;
        // Chama a função que lida com a busca quando Enter é pressionado
        buscarCidade(cidade);
    }
});

// Cria uma variavel que armazena o valor da class (botao-busca)
var botao = document.querySelector(".botao-busca");

//cria um evento que quando a variavel botao for clicado execultara uma funcao
botao.addEventListener('click', function() {

    //cria uma variavel que recebera o valor da variavel (inputCidade)
    const cidade = inputCidade.value;

    //chama a funcao (buscarCidade), como parametro de cidade
    buscarCidade(cidade);
});
