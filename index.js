// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = `[]`;

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("new")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


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



// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function () {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    // myLeads.push("www.awesomeleads.com")
    // console.log(myLeads)
    inputEl.value = ''

    //clear out the input field

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
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `<li><a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a></li>`
        // console.log(listItems)
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
}