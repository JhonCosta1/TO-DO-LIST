const container = document.querySelector(".container");
const listaAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoCadastra = document.querySelector(".botao_adc");
const paleta1 = document.querySelector(".paleta1");
const paleta2 = document.querySelector(".paleta2");
const paleta3 = document.querySelector(".paleta3");


function criaAtividade(){
    const atividade = document.createElement("div");
    atividade.classList.add("atividade");
    const nomeAtividade = document.createElement("p");
    atividade.textContent = input.value;
    const botaoLimpar = document.createElement("button");
    botaoLimpar.textContent = "Limpar";
    botaoLimpar.classList.add("botao_del");
    listaAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar);
};