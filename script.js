const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você trabalha?",
        alternativas: [
            {
                texto: "Não.",
                afirmacao: "procure um emprego!"
            },
            {
                texto: "Sim.",
                afirmacao: "Procure saber seus direitos."
            }
        ]
    },
    {
        enunciado: "Em uma entrevista de emprego, o que você mentiria sobre si?",
        alternativas: [
            {
                texto: "Nada, porque se eles não quisessem, eles que estariam perdendo.",
                afirmacao: "estariam perdendo mesmo, estresse, incomodo entre outros."
            },
            {
                texto: "Mentiria que sei trabalhar muito bem em grupo.",
                afirmacao: "Escolha boa, mas consequência ruim. (um emprego) KKK"
            }
        ]
    },
    {
        enunciado: "PARABÉNS, você foi contratado(a), o que você faria no primeiro dia?",
        alternativas: [
            {
                texto: "Me atrasaria, e assinaria meu ponto como se tivesse chego no horario certo.",
                afirmacao: "Seus colegas não gostaram de você."
            },
            {
                texto: "Chegaria no horario certo e tentaria ao maximo conseguir cumprir meu papel na empresa.",
                afirmacao: "Seus colegas te aprovaram."
            }
        ]
    },
    {
        enunciado: "Três meses depois, seus colegas começaram a te encher de tarefas que são deles. O que você faz?",
        alternativas: [
            {
                texto: "Eu estou fazendo outras coisas. E não vou fazer o que você, pode muito bem fazer sozinho.",
                afirmacao: "Impos respeito."
            },
            {
                texto: "Claro.",
                afirmacao: "Seus colegas começaram a te ver como uma maquina. Se facilitar a vida deles, eles te farão de degrau"
            }
        ]
    },
    {
        enunciado: "Um cliente gritou com você.",
        alternativas: [
            {
                texto: "Revido no mesmo tom.",
                afirmacao: "Foi demitido."
            },
            {
                texto: "Me acalmo e tento acalmar o cliente.",
                afirmacao: "continuou na empresa. Após isso, o chefe vê que você tem domínio próprio e sobe seu cargo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
