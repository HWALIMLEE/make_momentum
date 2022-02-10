const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); -> same
const toDoList = document.querySelector("#todo-list");

let toDos = []; 
const TODOS_KEY = 'todos'

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    console.log(event); //event 확인해 본 결과 어느 버튼에서 클릭된건지 바로 알려줌
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement; //button은 부모를 가지고 있음(li)
    console.log(li.id); // text
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //unique한 task id 생성
    const span = document.createElement("span"); //span은 li 하위에 있어야함
    span.innerText = newTodo.text; //object의 text
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // get array

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos; // to restore
    parsedToDos.forEach(paintToDo); //paintToDo함수가 parsedToDos에서 argument 받아서 실행
} 


//filter 함수(조건에 맞는 새로운 array 생성)(give new array!)
