let messageEl = document.getElementById("message")
let articleOneEl = document.getElementById("articleOne")
let articleTwoEl = document.getElementById("articleTwo")

messageEl.addEventListener ( "keyup", (event) => {
    articleOneEl.innerHTML = event.target.value;
    articleTwoEl.innerHTML = event.target.value;
})
