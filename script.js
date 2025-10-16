const questions = [
    {
        question: "O que é o garimpo e de que forma ele pode prejudicar o meio ambiente e a saúde das pessoas que vivem perto dessas áresas, como o povo Yanomami?",
        answers: [
            { id: 1, text: "A) É a extração de minerios, que pode poluir rios e destruir a floresta", correct: true },
            { id: 2, text: "B) É uma prática agrícola que melhor o solo", correct: false },
            { id: 3, text: "C) É uma técnica de pesca tradicional dos indígenas", correct: false },
            { id: 4, text: "D) É um tipo de turismo sustentável", correct: false },
        ]
    },
    {
        question: "Por que o mercúrio faz mal para os Yanomami?",
        answers: [
            { id: 1, text: "A) Porque deixa a água mais limpa", correct: false },
            { id: 2, text: "B) Porque serve como fertilizante natural", correct: false },
            { id: 3, text: "C) Porque contamina os peixes e o corpo humano, cousando doenças graves", correct: true },
            { id: 4, text: "D) Poruqe ajuda na caça e na pesca", correct: false },
        ],
    },
    {
        question: "O que acontece com os rios e as pessoas quando joga mercúrio na água?",
        answers: [
            { id: 1, text: "A) Nada acontece, o mercúrio não afeta o meio ambiente", correct: false },
            { id: 2, text: "B) A água fica mais potável e os peixes crescem mais rápido", correct: false },
            { id: 3, text: "C) Os rios se tornam mais limpos e saudáveis", correct: false },
            { id: 4, text: "D) Os rios ficam poluídos e as pessoas podem sofrer intoxicação", correct: true },
        ],
    },
    {
        question: "Como o garimpo ilegal pode prejudicar a vida dos povos indígenas e o meio ambiente na região dos Yanomami?",
        answers: [
            { id: 1, text: "A) Destroí a floresta, polui a água e ameaça a saúde e culturs dos indígenas", correct: true },
            { id: 2, text: "B) Melhor a economia local sem causar danos", correct: false },
            { id: 3, text: "C) Garante empregos e protege a natureza", correct: false },
            { id: 4, text: "D) Ajuda na preservação da cultura indígena", correct: false },
        ],
    },
    {
        question: "Como é o modo de vida dos Yanomami e por que a floresta é tão importante para eles?",
        answers: [
            { id: 1, text: "A) Eles vivem em grandes cidades e usam a floresta apenas para turismo", correct: false },
            { id: 2, text: "B) Os Yanomami vivem da caça, pesca e agricultura, e a floresta é essencial para sua sobrevivência e cultura", correct: true },
            { id: 3, text: "C) Eles dependem do comércio com garimpeiros para sobreviver", correct: false },
            { id: 4, text: "D) A floresta serve apenas como território simbólico, sem utilidade prática", correct: false },
        ],
    },
    {
        question: "Que ações emergenciais poderiam ser adotadas para reduzir os impactos da contaminação por mercúrio?",
        answers: [
            { id: 1, text: "A) Criar campanhas de conscientização e garantir atendimento médico e descontaminação das águas", correct: true },
            { id: 2, text: "B) Aumentar o uso de mercúrio para acelerar a mineração", correct: false },
            { id: 3, text: "C) Incentivar o garimpo em novas áreas", correct: false },
            { id: 4, text: "D) Ignorar o problema e esperar a natureza se recuperar sozinha", correct: false },
        ],
    },
    {
        question: "Por que o uso de mercúrio pelos garimpeiros ilegais causa tantos problemas de saúde para o povo Yanomami e para o meio ambiente?",
        answers: [
            { id: 1, text: "A) Porque o mercúrio deixa a água mais limpa", correct: false },
            { id: 2, text: "B) Porque o mercúrio serve como fertilizante natural", correct: false },
            { id: 3, text: "C) Porque o mercúrio ajuda na purificação do ar", correct: false },
            { id: 4, text: "D) Porque o mercúrio é um metal pesado que contamina rios, peixes e o organismo humano", correct: true },
        ],
    },
    {
        question: "O garimpo ilegal dentro das terras indígenas pode causar danos ao meio ambiente?",
        answers: [
            { id: 1, text: "A) Não, porque o garimpo é uma atividade sustentável", correct: false },
            { id: 2, text: "B) Só causa danos se for feito com máquinas grandes", correct: false },
            { id: 3, text: "C) Sim, porque provoca desmatamento, poluição e destruição dos rios", correct: true },
            { id: 4, text: "D) Não afeta o meio ambiente, apenas muda a paisagem", correct: false },
        ],
    },
    {
        question: "Como a presença dos garimpeiros ilegais no território Yanomami afeta não apenas a saúde dos indígenas, mas também sua cultura, alimentação e modo de vida tradicional?",
        answers: [
            { id: 1, text: "A) Enfraquece a cultura, contamina alimentos e espalha doenças", correct: true },
            { id: 2, text: "B) Melhora as condições de vida e gera empregos", correct: false },
            { id: 3, text: "C) Fortalece a relação dos indígenas com a floresta", correct: false },
            { id: 4, text: "D) Não interfere na vida dos Yanomami32", correct: false },
        ],
    },
    {
        question: "O que o cacique Jairo observou nas pessoas da aldeia?",
        answers: [
            { id: 1, text: "A) Ele percebeu que todos estavam mais felizes com os garimpeiros", correct: false },
            { id: 2, text: "B) Ele viu que o garimpo trouxe mais alimentos para a aldeia", correct: false },
            { id: 3, text: "C) Ele não notou nenhuma diferença", correct: false },
            { id: 4, text: "D) Ele notou doenças, fraqueza e mudanças no comportamento das pessoas", correct: true },
        ],
    },
    {
        question: "De que maneira o reflorestamento e a agricultura sustentável podem ajudar o povo Yanomami a recuperar o meio ambiente e manter seu modo de vida tradicional?",
        answers: [
            { id: 1, text: "A) Ajudando a restaurar a floresta e garantindo alimentos sem destruir a natureza", correct: true },
            { id: 2, text: "B) Substituindo a floresta por plantações de soja", correct: false },
            { id: 3, text: "C) Incentivando o uso de agrotóxicos e queimadas", correct: false },
            { id: 4, text: "D) Acelerando o desmatamento para novas plantações", correct: false },
        ],
    },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Próxima";
    nextButton.style.display = "none";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }   
});

function showScore() {
    resetState();
    questionElement.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
    nextButton.innerText = "Reiniciar";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz;
}

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const quizElement = document.getElementById("quiz");

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizElement.style.display = "block";

    startQuiz();
});


startQuiz();