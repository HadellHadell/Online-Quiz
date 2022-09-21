const startButton = document.getElementById('control-start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Game started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {

}
function selectAnswer() {

}

const questions = [
    {
        question: 'What year did the composer Johann Sebastian Bach die?',
        answers: [
            { text: '1750', correct: true},
            { text: '1758', correct: false},
            { text: '1748', correct: false},
            { text: '1754', correct: false},
        ]
    }
]