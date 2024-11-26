const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questions = [
    {
        question: "Quais foram as principais causas da Revolução Industrial?",
        answers: {
            a: "O crescimento das cidades e do comércio",
            b: "A invenção da impressora",
            c: "A criação de fábricas e o avanço tecnologico"
        },
        correctAnswer: "c"
    },
    {
        question: "Onde a Revolução Industrial começou?",
        answers: {
            a: "França",
            b: "Inglaterra",
            c: "Alemanha"
        },
        correctAnswer: "b"
    },
    {
        question: "Qual invenção crucial para a Revolução Industrial?",
        answers: {
            a: "Telégrafo",
            b: "Motor a vapor",
            c: "lâmpada"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} de ${questions.length} questões corretas`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
