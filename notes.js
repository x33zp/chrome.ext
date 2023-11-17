// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

// let boxBtn = document.querySelector("#box")

// boxBtn.addEventListener("click", function () {
//     console.log("I want to open the box!")
// })


// Use.innerHTML to render a Buy!button inside the div container

let divEl = document.getElementById("container")

divEl.innerHTML += "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
function buy() {
    divEl.innerHTML += "<p>Thank you for buying!</p>"
}