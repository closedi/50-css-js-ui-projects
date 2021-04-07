(async function getData() {
    const API_URL = 'https://quizapi.io/api/v1/questions?apiKey=Kg81T9BjOEcAthfo3mVus80Onq16p9SSya2CpdPL&category=code&limit=3&tags=JavaScript'

    const req = await fetch(API_URL)
    return await req.json()
})().then((questions) => {

    const myQuestions = []

    const quizResults = []

    questions.forEach(q => {
        const {answers, correct_answers, question} = q
        const myAnswers = Object.entries(answers).filter(item => item[1] !== null).map(answer => answer.pop())


        function correct () {
            let result;
            for (let i in correct_answers) {
                if (correct_answers[i] === 'true') {
                    result = i
                }
            }
            switch (result) {
                case 'answer_a_correct':
                    result = 'a';
                    break;
                case 'answer_b_correct':
                    result = 'b';
                    break;
                case 'answer_c_correct':
                    result = 'c';
                    break;
                case 'answer_d_correct':
                    result = 'd';
                    break;
                case 'answer_e_correct':
                    result = 'e';
                    break;
                case 'answer_f_correct':
                    result = 'f';
                    break;
            }
            return result
        }

        let correctA = correct()

        myQuestions.push({myAnswers, correctA, question})

    })

    //////////////////////////////////////////

    const start = document.getElementById('start')
    start.addEventListener('click', () => {
        nextQuestion()
        start.classList.add('hidden')
    })

    function nextQuestion() {
        const restQ = myQuestions.length
        const currentQ = myQuestions.shift()
        if (currentQ && (restQ > 0)) {
            const {myAnswers, correctA, question} = currentQ

            const questionEl = document.getElementById('question')
            const button = document.getElementById('submit')
            button.innerText = 'Submit'
            button.classList.remove('hidden')

            questionEl.innerText = question
            const ul = document.createElement('ul')
            questionEl.appendChild(ul)

            myAnswers.forEach((answer, idx) => {
                const ids = ['a', 'b', 'c', 'd', 'e', 'f']
                const li = document.createElement('li')
                li.innerHTML = `
          <input type="radio" name="answer" id="${ids[idx]}" class="answer">
          <label for="${ids[idx]}" id="${ids[idx]}_text">${answer.toString()}</label>`
                ul.appendChild(li)
            })


            button.addEventListener('click', (e) => {
                let result = submit(e, restQ);
                if(result && restQ > 0) {
                    quizResults.push(result === correctA)
                    nextQuestion()
                }
            })
        } else {
            console.log(quizResults)
            const questionEl = document.getElementById('question')
            questionEl.innerHTML = ''
            const submit = document.getElementById('submit')
            const start = document.getElementById('submit')
            submit.classList.add('hidden')
            const rightAnswers = quizResults.filter(item => item === true).length

            questionEl.innerHTML = `
            <h2>Total questions: ${quizResults.length}</h2>
            <h2>Right answers: ${rightAnswers}</h2>
            <h2>Success percentage: ${((rightAnswers / quizResults.length) * 100).toFixed(2)}%</h2>
            `
        }
    }

    function submit(e, length) {
            let result = ''
            if(length > 0) {
                const inputs = document.querySelectorAll('input[type="radio"]')

                inputs.forEach(input => {
                    if(input.checked) {
                        result = input.id
                    }
                })
            }
            return result
        }
})


