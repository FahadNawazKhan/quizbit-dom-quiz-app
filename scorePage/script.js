const restart = document.getElementById('restart')
const marks = document.getElementById('marks')

let score = JSON.parse(localStorage.getItem('score'))
if (!score) {
    score = 0
}

marks.innerText = score + '/5'
restart.addEventListener('click', () => {
    score = 0
    localStorage.setItem('score', JSON.stringify(score))
    window.location.href = '../quizPage/quizPage.html'
})