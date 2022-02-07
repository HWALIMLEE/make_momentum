const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); -> same
const toDoList = document.querySelector("#todo-list");

const toDos = []; 

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    console.log(event); //event 확인해 본 결과 어느 버튼에서 클릭된건지 바로 알려줌
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement; //button은 부모를 가지고 있음(li)
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span"); //span은 li 하위에 있어야함
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    //append는 맨 마지막에 놓여져야함
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault(); //바로 새로고침 되지 않음
    const newTodo = toDoInput.value;
    toDoInput.value = ''; //empty
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

