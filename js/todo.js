// add todo
// show the list
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input:first-child")
const toDoList = document.getElementById("todo-list");


const TODO_KEY = "todos";
let toDOs = [];

function saveToDo() {
    // save the array of the todo items
    // in the local storage of the browse
    localStorage.setItem(TODO_KEY, JSON.stringify(toDOs));
}

function removeToDo(event){
    const li = event.target.parentNode;
    li.remove();
}

function paintToDo(newTodo){
    // need to add the newTodo into the ul
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    // make the button to remove the element
    const button = document.createElement("button");
    button.innerText = "❌";
    // add the event listener on the button to remove it
    button.addEventListener("click", removeToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    // prevent refresh functino caused by form -> default action
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDOs.push(newTodo);
    paintToDo(newTodo);
    saveToDo();
}

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo){
    toDOs = JSON.parse(savedToDo);
    toDOs.forEach(item => {
        paintToDo(item);
    });
}
toDoForm.addEventListener("submit", handleToDoSubmit)

