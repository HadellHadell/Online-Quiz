const startButton = document.getElementById('control-start-btn')
const questionContainerElement = document.getElementById('question-container')
let randomQuestion, currentQuestionIndex
const questionElement = document.getElementById('question')
const answersButtonElement = document.getElementById('answer-button')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Game started')
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
    showQuestion(randomQuestion[currentQuestionIndex])
}
function showQuestion(_questions) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
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