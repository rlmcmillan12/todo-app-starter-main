// You can access the 'data' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)
const completeList = document.querySelector('#complete-items')
const incompleteList = document.querySelector('#incomplete-items')

for (let item of todoItems){
    const currentItem = document.createElement('li')
    currentItem.innerText = item.title
    if (item.completed == true){
        completeList.appendChild(currentItem)
    }
    else {
        incompleteList.appendChild(currentItem)
    }
}
// Use the 'data' variable to create the appropriate elements and append them onto
// the page.
