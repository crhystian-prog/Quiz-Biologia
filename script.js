const questions = [
    {
        question: "Qual é o maior animal do mundo?",
        answers: [
            { id: 1, text: "Tubarão", correct: false },
            { id: 2, text: "Baleia Azul", correct: true },
            { id: 3, text: "Elefante", correct: false },
            { id: 4, text: "Girafa", correct: false },
        ]
    },
    {
        question: "Qual é a função principal dos pulmões?",
        answers: [
            { id: 1, text: "Bombear o sangue", correct: false },
            { id: 2, text: "Produzir hormônios", correct: false },
            { id: 3, text: "Fazer trocas gasosas", correct: true },
            { id: 4, text: "Filtrar impurezas", correct: false },
        ],
    },
    {
        question: "Qual parte da célula contém o material genético (DNA)?",
        answers: [
            { id: 1, text: "Núcleo", correct: true },
            { id: 2, text: "Citoplasma", correct: false },
            { id: 3, text: "Mitocôndria", correct: false },
            { id: 4, text: "Ribossomo", correct: false },
        ],
    },
    {
        question: "Qual desses seres vivos realiza fotossíntese?",
        answers: [
            { id: 1, text: "Fungos", correct: false },
            { id: 2, text: "Bactérias patogênicas", correct: false },
            { id: 3, text: "Animais", correct: false },
            { id: 4, text: "Plantas", correct: true },
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
