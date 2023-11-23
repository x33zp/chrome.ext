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
/// 1. Save a key-value pair in localStorage
// localStorage.setItem("myLeads", "www.exampleleads.com")
/// 2. Refresh the page. Get the value and log it to the console
console.log(localStorage.getItem("myLeads"))
// 3. Clear localStorage
localStorage.clear("myLeads")

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

//
let myLeads = `[]`;

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("new")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

///function parameters
const welcomeEl = document.getElementById("welcome-el")
let greetingTxt = "hello"
let nameTxt = "zubbby peculiar 👋"

function greetUser(greeting, name) {
    welcomeEl.textContent = `${greeting}, ${name}`
}

greetUser(greetingTxt, nameTxt)

//numbers as function parameters

// Create a function, add(), that adds two numbers together and returns the sum
function add(num1, num2) {
    sum = num1 + num2
    return sum
}

console.log(add(3, 7)) // should log 7
console.log(add(9, 102)) // should log 111

// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
    return arr[0]
}
// Call it with an array as an argument to verify that it work

console.log(getFirst(["first", "second", "third"]))