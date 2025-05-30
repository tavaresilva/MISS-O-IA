const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "10 + 10",
    alternativas: ["20", "2","5", "4","i", "7"],
  },
  {
    enunciado: "15 - 7",
    alternativas: ["8", "9","3", "1", "-0"],
  },
  {
    enunciado: "5 x 6",
    alternativas: ["30", "56","12", "512", "78"],
  },
  {
    enunciado: "36 ÷ 6",
    alternativas: ["6", "4","66", "15", "36"],
  },
  {
    enunciado: "4²",
    alternativas: ["16", "8","66", "12", "56"],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas(){
  caixaAlternativas.innerHTML = ""; // Limpa os botões antigos
  for(const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();
