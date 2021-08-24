//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
// This grabs '.todo-button' class and runs addTodo function
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

//Functions

function addTodo(event) {
    // Prevents form from submitting on refresh
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append todoDiv to todo-list class
    todoList.appendChild(todoDiv);
    // To clear todo input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // ANIMATION
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    // CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos);
      
    todos.forEach(function(todo) {
        // This brings back value of whatever option selected
       switch (e.target.value) {
           case "all":
              todo.style.display = "flex";
              break;
            case "completed":
              if (todo.classList.contains("completed")) {
                  todo.style.display = "flex"; 
                } else {
                    todo.style.display = "none";
                }
              break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
              break;
       }
    });
}