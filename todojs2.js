
let toDo2 = getSavedTodos();

// let newItem = localStorage.getItem("toDos");
// if (newItem !== null) {
//     toDo2 = JSON.parse(newItem)
// }

const filters = {
    searchText: '',
    hideCompleted: false
}

renderToDos(toDo2, filters)



document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value

 
    renderToDos(toDo2, filters)
    return !filteredToDos.completed
});



document.querySelector('#formVal').addEventListener('submit', function (e) {
    e.preventDefault()
    
    toDo2.push({
        id: uuidv4(),
        text: e.target.elements.newToDo.value,
        completed: false
    })
     
    // localStorage.setItem("toDos", JSON.stringify(toDo2))
    saveTodos(toDo2);

    renderToDos(toDo2, filters)
    e.target.elements.newToDo.value = ""

});


document.querySelector('#checkToDo').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderToDos(toDo2, filters)

    // toDo2.filter(function(toDo2){
    //     if(e.target.checked != toDo2.completed)

    //     return toDo2.text
    // })
    // // 

})




























  