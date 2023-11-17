// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
// let myLeads = [];
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEL = document.getElementsById("ul-el")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function () {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    // myLeads.push("www.awesomeleads.com")
    console.log(myLeads)
})

// Log out the items in the myLeads array using a for loop 
for (i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}