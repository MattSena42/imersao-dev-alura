perguntas = [
  {
    pergunta: "A música 'Diga, Pt. 2' faz parte de qual álbum?",
    respostas: [
      { opcao: "A Sinfonia de Tudo Que Há", correto: false },
      { opcao: "Infinito", correto: true },
      { opcao: "Sua Alegria Foi Cancelada", correto: false }
    ]
  },
  {
    pergunta: "Qual dessas músicas NÃO faz parte do álbum 'Sua Alegria Foi Cancelada'?",
    respostas: [
      { opcao: "Canção Desastrada", correto: true },
      { opcao: "Convicção", correto: false },
      { opcao: "Natureza Caos", correto: false }
    ]
  },
  {
    pergunta: "A música 'O Ar' pertence a qual álbum?",
    respostas: [
      { opcao: "Infinito", correto: false },
      { opcao: "Eu Nunca Fui Embora", correto: false },
      { opcao: "A Sinfonia de Tudo Que Há", correto: true }
    ]
  },
  {
    pergunta: "Qual dessas faixas NÃO pertence ao álbum 'Vou Ter Que Me Virar'?",
    respostas: [
      { opcao: "FUDEU!!!", correto: false },
      { opcao: "Era Pra Sempre", correto: true },
      { opcao: "Caminho Não Tem Fim", correto: false }
    ]
  },
  {
    pergunta: "A música 'Casa Assombrada' aparece em qual álbum?",
    respostas: [
      { opcao: "Vou Ter Que Me Virar", correto: true },
      { opcao: "Infinito", correto: false },
      { opcao: "A Sinfonia de Tudo Que Há", correto: false }
    ]
  },
  {
    pergunta: "A música 'Camadas' é parte de qual álbum?",
    respostas: [
      { opcao: "A Sinfonia de Tudo Que Há", correto: false },
      { opcao: "Sua Alegria Foi Cancelada", correto: false },
      { opcao: "Eu Nunca Fui Embora", correto: true }
    ]
  },
  {
    pergunta: "A música 'Deixa Queimar' aparece em qual álbum?",
    respostas: [
      { opcao: "Sua Alegria Foi Cancelada", correto: false },
      { opcao: "Eu Nunca Fui Embora", correto: false },
      { opcao: "A Sinfonia de Tudo Que Há", correto: true }
    ]
  },
  {
    pergunta: "Qual dessas faixas NÃO pertence ao álbum 'Infinito'?",
    respostas: [
      { opcao: "Maior Que As Muralhas", correto: false },
      { opcao: "Astenia", correto: true },
      { opcao: "Sobreviver e Acreditar", correto: false }
    ]
  },
  {
    pergunta: "A música 'Quando Eu Caí' pertence a qual álbum?",
    respostas: [
      { opcao: "Sua Alegria Foi Cancelada", correto: true },
      { opcao: "Infinito", correto: false },
      { opcao: "Vou Ter Que Me Virar", correto: false }
    ]
  },
  {
    pergunta: "Qual dessas músicas pertence ao álbum 'Eu Nunca Fui Embora'?",
    respostas: [
      { opcao: "O Resto É Nada Mais", correto: false },
      { opcao: "Quando o Pesadelo Acabar", correto: true },
      { opcao: "Já Faz Tanto Tempo", correto: false }
    ]
  }
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;

  respostasElemento.innerHTML = "";

  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    botao.onclick = function () {
      if (resposta.correto) {
        acertos++;
      }

      indiceAtual++;

      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };

    respostasElemento.appendChild(botao);
  }
}

function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

function reiniciarJogo() {
  indiceAtual = 0;
  acertos = 0;
  conteudo.style.display = "flex";
  conteudoFinal.style.display = "none";
  carregarPergunta();
}

carregarPergunta();
