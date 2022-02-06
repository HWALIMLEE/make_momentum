const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); -> same
const toDoList = document.querySelector("#todo-list");


function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span"); //span은 li 하위에 있어야함
    li.appendChild(span);
    span.innerText = newTodo;
    console.log(li);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault(); //바로 새로고침 되지 않음
    const newTodo = toDoInput.value;
    toDoInput.value = ''; //empty
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

