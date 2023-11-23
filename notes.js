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

/// local storage
let myLeads = `[]`;

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("new")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)