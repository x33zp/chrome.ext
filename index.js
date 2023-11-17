// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = [];
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function () {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    // myLeads.push("www.awesomeleads.com")
    // console.log(myLeads)
    renderLeads()
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with

// Log out the items in the myLeads array using a for loop 
// Render the leads in the unordered list using ulEl.textContent
function renderLeads() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += `<li>${myLeads[i]}</li>`
        /// another method of add lists instead of using .innerHTML
        // const li = document.createElement("li")
        // li.innerText = myLeads[i]
        // ulEl.append(li)
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        listItems += `<li>${myLeads[i]}</li>`
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
}