// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = [];

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with

// Log out the items in the myLeads array using a for loop 
// Render the leads in the unordered list using ulEl.textContent
function render(leads) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
        // ulEl.innerHTML += `<li>${myLeads[i]}</li>`
        /// another method of add lists instead of using .innerHTML
        // const li = document.createElement("li")
        // li.innerText = myLeads[i]
        // ulEl.append(li)
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `<li><a target="_blank" href="${leads[i]}">${leads[i]}</a></li>`
        // console.log(listItems)
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
}

// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function () {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)

    //clear out the input field
    inputEl.value = ''

    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    // console.log(myLeads)

    render(myLeads)

    // To verify that it works:
    // console.log(localStorage.getItem("myLeads"))
})