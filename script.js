// You can access the 'data' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)
const completeList = document.querySelector('#complete-items')
const incompleteList = document.querySelector('#incomplete-items')
i = 7


for (let item of todoItems) {
    const currentItem = document.createElement('li')//makes new li
    currentItem.classList.add('list-group-item')//add class to li

    const checkbox = document.createElement('input')//creates checkbox input element
    checkbox.type = 'checkbox'
    checkbox.classList.add('form-check-input')
    currentItem.appendChild(checkbox)

    const label = document.createElement('label')// creates label for checkbox
    label.innerText = item.title
    label.classList.add('form-check-label', 'ps-3')
    currentItem.appendChild(label)

    const deleteButton = document.createElement('button');//creates and appends delete button
    deleteButton.innerText = 'Remove';
    currentItem.appendChild(deleteButton)
    if (item.completed == true) {
        completeList.appendChild(currentItem)
        checkbox.checked = true
    }
    else {
        incompleteList.appendChild(currentItem)
    }
    deleteButton.addEventListener('click', () => {
        currentItem.remove()
    })

    checkbox.addEventListener('click', () => {
        if (checkbox.checked = true) {
            checkbox.checked = false;
            item.complete = false
            incompleteList.appendChild(currentItem);
        }
        else if (checkbox.checked = false) {
            checkbox.checked = true;
            item.complete = true
            completeList.appendChild(currentItem);
        }
    })

}

const inputForm = document.querySelector('#todoForm')
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = document.querySelector('.form-control')
    const newTodo = {
        id: i,
        title: userInput.value,
        completed: false
    }
    todoItems.push(newTodo)
    i++
    console.log(todoItems)
})
//delete todoItem
const delItem = document.querySelectorAll('.list-group-items')
for (let item of delItem) {
    item.addEventListener('click', () => {
        item.remove()
    })
}

const delClick = document.button


// Use the 'data' variable to create the appropriate elements and append them onto
// the page.
