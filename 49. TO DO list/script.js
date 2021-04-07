const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')

input.focus()
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addToDo(todo))
}


form.addEventListener('submit', e => {
    e.preventDefault()

    addToDo()
})

function addToDo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }
    if(todoText) {
        const todoEL = document.createElement('li')
        if(todo && todo.completed) {
            todoEL.classList.add('completed')
        }
        todoEL.innerText = todoText
        todoEL.addEventListener('click', () => {
            todoEL.classList.toggle('completed')
            updateLS()
        })
        todoEL.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEL.remove()
            updateLS()
        })


        todosUl.appendChild(todoEL)
        input.value = ''
        updateLS()
    }
}

function updateLS() {
     const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}
