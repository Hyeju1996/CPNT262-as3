const userInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const signInBtn = document.querySelector("#signin");
const userName = 'Jhoney marvel'
const password = 'bob'
const error = document.querySelector('#error')
    

// function
const signIn = () => {
    if (password == passwordInput.value && userName == userInput.value) {
        error.innerText = 'Good job!!'
        window.location.href = 'main.html'

        return
    }
    error.innerText = '404.Error!!!'
    window.location = "404.html"

}
signInBtn.addEventListener("click", () => {
    signIn()
})




