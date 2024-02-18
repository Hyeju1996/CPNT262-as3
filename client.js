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
        window.location.href = '404.html'

        return
    }
    error.innerText = '404 ERROR!!!'

}
signInBtn.addEventListener("click", () => {
    signIn()
})




