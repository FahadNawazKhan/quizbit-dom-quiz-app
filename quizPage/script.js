const question = document.getElementById('question')

const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')

const submit = document.getElementById('submit')


const qnsArr = [
    {
        question: "Who is the best footballer in the world?",
        choice: ["Cristiano Ronaldo", "Neymar", "Lionel Messi", "Fahad"],
        answer: "Fahad"
    },
    {
        question: "Who has the best fashion sense?",
        choice: ["David Beckham", "Zayn Malik", "Timothée Chalamet", "Fahad"],
        answer: "Fahad"
    },
    {
        question: "Who is most likely to become the richest?",
        choice: ["Elon Musk", "Mark Zuckerberg", "Jeff Bezos", "Fahad"],
        answer: "Fahad"
    },
    {
        question: "Who can beat zombie apocalypse?",
        choice: ["Batman", "John Wick", "Sherlock Holmes", "Fahad"],
        answer: "Fahad"
    },
    {
        question: "Who is the most handsome ?",
        choice: ["Henry Cavill", "Chris Hemsworth", "Ryan Gosling", "Fahad"],
        answer: "Fahad"
    }
];

let count = 0
let selected = ''
let score = 0
let answered = false

const options = [option1, option2, option3, option4]

question.innerText = qnsArr[count].question

option1.innerText = qnsArr[count].choice[0]
option2.innerText = qnsArr[count].choice[1]
option3.innerText = qnsArr[count].choice[2]
option4.innerText = qnsArr[count].choice[3]

option1.addEventListener('click', () => {
    if (answered) return
    selected = qnsArr[count].choice[0]
    if (selected === qnsArr[count].answer) {
        option1.classList.add('correct')
        score++
    } else {
        option1.classList.add('incorrect')
        const green = options.find((ele) => {
            return ele.innerText === qnsArr[count].answer
        })
        green.classList.add('correct')

    }
    answered = true

})
option2.addEventListener('click', () => {
    if (answered) return
    selected = qnsArr[count].choice[1]
    if (selected === qnsArr[count].answer) {
        option2.classList.add('correct')
        score++
    } else {
        option2.classList.add('incorrect')
        const green = options.find((ele) => {
            return ele.innerText === qnsArr[count].answer
        })
        green.classList.add('correct')

    }
    answered = true
})
option3.addEventListener('click', () => {
    if (answered) return
    selected = qnsArr[count].choice[2]
    if (selected === qnsArr[count].answer) {
        option3.classList.add('correct')
        score++
    } else {
        option3.classList.add('incorrect')
        const green = options.find((ele) => {
            return ele.innerText === qnsArr[count].answer
        })
        green.classList.add('correct')

    }
    answered = true

})
option4.addEventListener('click', () => {
    if (answered) return
    selected = qnsArr[count].choice[3]
    if (selected === qnsArr[count].answer) {
        option4.classList.add('correct')
        score++
    } else {
        option4.classList.add('incorrect')
        const green = options.find((ele) => {
            return ele.innerText === qnsArr[count].answer
        })
        green.classList.add('correct')

    }
    answered = true
})


submit.addEventListener('click', () => {
    if (!answered) return
    count++
    localStorage.setItem('score',JSON.stringify(score))
    if (count === qnsArr.length) {
        window.location.href = '../scorePage/'
    }
    question.innerText = qnsArr[count].question
    answered = false
    option1.classList.remove('incorrect', 'correct')
    option2.classList.remove('incorrect', 'correct')
    option3.classList.remove('incorrect', 'correct')
    option4.classList.remove('incorrect', 'correct')

    option1.innerText = qnsArr[count].choice[0]
    option2.innerText = qnsArr[count].choice[1]
    option3.innerText = qnsArr[count].choice[2]
    option4.innerText = qnsArr[count].choice[3]

})


