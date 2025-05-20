const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "5 + 3",
    alternativas: ["8", "7"],
  },
  {
    enunciado: "12 - 4",
    alternativas: ["8", "6"],
  },
  {
    enunciado: "6 x 7",
    alternativas: ["42", "36"],
  },
  {
    enunciado: "25 ÷ 5",
    alternativas: ["5", "4"],
  },
  {
    enunciado: "9²",
    alternativas: ["81", "18"],
  },
];