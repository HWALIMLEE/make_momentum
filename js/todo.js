const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); -> same
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
    event.preventDefault(); //바로 새로고침 되지 않음
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = ''; //empty
}

toDoForm.addEventListener("submit", handleToDoSubmit);

