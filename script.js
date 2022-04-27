// You can access the 'data' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)
const completeList = document.querySelector('#complete-items')
const incompleteList = document.querySelector('#incomplete-items')

for (let item of todoItems){
    const currentItem = document.createElement('li')
    currentItem.classList.add('list-group-item')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('form-check-input')
    currentItem.appendChild(checkbox)
    const label =document.createElement('label')
    label.innerText += item.title
    label.classList.add('form-check-label', 'ps-3')
    currentItem.appendChild(label)
    if (item.completed == true){
        completeList.appendChild(currentItem)
        checkbox.checked = true
    }
    else {
        incompleteList.appendChild(currentItem)
    }
}
// Use the 'data' variable to create the appropriate elements and append them onto
// the page.
