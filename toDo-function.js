//fetch existing todos from LocalStorage

let getSavedTodos = function () {
    let newItem = localStorage.getItem("todos");
    if (newItem !== null) {
        return JSON.parse(newItem);
    } else {
        return []
    }
}

//save todos to localStorage
let saveTodos = function (toDo2) {
    localStorage.setItem("todos", JSON.stringify(toDo2))

}


const renderToDos = function (toDo2, filters) {
    let filteredToDos = toDo2.filter(function (toDo) {
        return toDo.text.includes(filters.searchText)
    })

    console.log(toDo2)

    filteredToDos = filteredToDos.filter(function (toDo2) {
        if (filters.hideCompleted) {
            return !toDo2.completed
        } else {
            return true;
        }
    })


    const incomplete = filteredToDos.filter(function (toDoEach) {
        return !toDoEach.completed
    })
    document.querySelector('#stuffs').innerHTML = ''

    summaryDom(incomplete);
    // document.querySelector('#stuffs').appendChild(summaryDom(incomplete))

    filteredToDos.forEach(function (ToDos) {

        document.querySelector('#stuffs').appendChild(individualNote(ToDos))
    })

};

let removeTodo = function (id) {
    let findIndex = toDo2.findIndex(function (ToDos) {
        return ToDos.id === id;
    })
    if (findIndex > -1) {
        toDo2.splice(findIndex, 1)
    }
}

let toggleTodo = function (id) {
    let ToDos = toDo2.find(function (ToDos) { //returns the actual match as supposed to finding an index
       console.log(ToDos)
        return ToDos.id === id;
    })

    if (ToDos !== undefined) {
        ToDos.completed = !ToDos.completed
    }
}


//Dom element for an individual note
let individualNote = function (ToDos) {
    let toDoEl = document.createElement('div')
    let checkboxel = document.createElement('input') 
    let newItem = document.createElement('span')
    let buttonEl = document.createElement('button')

    checkboxel.setAttribute('type', 'checkbox')
    checkboxel.checked = ToDos.completed

    toDoEl.appendChild(checkboxel)
    // console.log(ToDos)
    checkboxel.addEventListener('change', function (e) {
        toggleTodo(ToDos.id)
        saveTodos(toDo2)
        renderToDos(toDo2, filters)
    })
    


    newItem.textContent = ToDos.text
    // toDoEl.appendChild(newItem)
    toDoEl.appendChild(newItem);

   
    buttonEl.textContent = "x"
    toDoEl.appendChild(buttonEl)

    buttonEl.addEventListener('click', function (e) {
        removeTodo(ToDos.id);
        saveTodos(toDo2);
        renderToDos(toDo2, filters)
    })
    return toDoEl;

}



let summaryDom = function (incomplete) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incomplete.length} things to do!`
    document.querySelector('#stuffs').appendChild(summary)
    //return summary;
}






