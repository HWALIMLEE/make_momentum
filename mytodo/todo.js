const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = []; 
let toDosDone = [];
const TODOS_KEY = 'todos';
const DONE_KEY = 'done';

function save(key,obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

function checkToDo(button, span, event){
    button.innerText = "✔️";
    span.className = "jb-x-large line";
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    save(TODOS_KEY, toDos);
    const doneObj = {
        text: span.innerText,
        id: li.id
    }
    if(toDosDone.some(e => e.id == doneObj['id'])==false) {
        toDosDone.push(doneObj);
      }
    save(DONE_KEY, toDosDone);
}

function paintToDos(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.className = "todolist";
    const span = document.createElement("span");
    span.innerText = `  ${newTodo.text}`;
    span.className = "jb-x-large";
    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "";
    button.addEventListener("click", function(){checkToDo(button,span,event)});
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function paintDone(done){
    const li = document.createElement("li");
    li.id = done.id;
    li.className = "todolist";
    const span = document.createElement("span");
    span.innerText = `  ${done.text}`;
    span.className = "jb-x-large line";
    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "✔️";
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDos(newTodoObj);
    save(TODOS_KEY, toDos);
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY,toDos); // get array
const savedDone = localStorage.getItem(DONE_KEY, toDosDone);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos; // to restore
    parsedToDos.forEach(paintToDos);
    if (savedDone !== null){
        const parsedDone = JSON.parse(savedDone);
        toDosDone = parsedDone;
        parsedDone.forEach(paintDone);
    }
}