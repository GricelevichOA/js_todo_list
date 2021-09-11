const todos = [];

const todosForm = document.querySelector("#form");
const todosInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todos");

// render todos on page
function getTodos() {
  todoList.innerHTML = "";
  for (todo of todos) {
    todoList.insertAdjacentElement("beforeend", createTodo(todo));
  }
}

// create todo
function createTodo(todo) {
  const newLi = document.createElement("li");
  const delBtn = document.createElement("button");

  newLi.innerText = todo.text;
  newLi.classList.add("todo", "list-group-item");
  if (todo.completed) {
    newLi.classList.add("list-group-item-warning", "completed");
  }

  delBtn.innerText = "Delete";
  delBtn.classList.add("btn", "btn-danger", "btn-delete", "float-end");

  newLi.appendChild(delBtn);

  return newLi;
}

// add todo to array
function addTodo(text) {
  const newTodo = {
    text: text,
    completed: false,
  };
  todos.push(newTodo);
}

todosForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todosInput.value;

  if (newTodoText) addTodo(newTodoText);

  todosInput.value = "";
  getTodos();
});

// mark as completed
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("list-group-item-warning");
    e.target.classList.toggle("completed");
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete"))
    e.target.parentElement.remove();
});

getTodos();
