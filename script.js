const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "10 + 10",
    alternativas: ["20", "2"],
  },
  {
    enunciado: "15 - 7",
    alternativas: ["8", "9"],
  },
  {
    enunciado: "5 x 6",
    alternativas: ["30", "56"],
  },
  {
    enunciado: "36 ÷ 6",
    alternativas: ["6", "4"],
  },
  {
    enunciado: "4²",
    alternativas: ["16", "8"],
  },
];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas() {}

mostraPergunta();