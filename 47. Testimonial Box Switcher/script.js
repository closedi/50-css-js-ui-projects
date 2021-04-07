const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')
const progress = document.getElementById('progress')


const testimonialsArr = [
    {
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        photo: "https://randomuser.me/api/portraits/women/49.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis delectus ipsum magni nobis officiis porro quaerat rem, suscipit voluptatibus!",
    },
    {
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis delectus ipsum magni nobis officiis porro quaerat rem, suscipit voluptatibus!",
    },
    {
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        photo: "https://randomuser.me/api/portraits/women/15.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis delectus ipsum magni nobis officiis porro quaerat rem, suscipit voluptatibus!",
    },
    {
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        photo: "https://randomuser.me/api/portraits/women/27.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis delectus ipsum magni nobis officiis porro quaerat rem, suscipit voluptatibus!",
    },
]

let idx = 1

function update() {
    const { name, email, photo, text } = testimonialsArr[idx]
    testimonial.innerText = text
    userImage.src = photo
    userName.innerText = name
    role.innerText = email
    progress.classList.remove('animate')
    setTimeout(() => progress.classList.add('animate'), 0)

    idx++

    if(idx > testimonialsArr.length - 1) {
        idx = 0
    }
}

progress.addEventListener('animationend', () => update())

// setInterval(update, 10000)
