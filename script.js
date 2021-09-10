const todos = [
  {
    text: "become a rockstar",
    completed: false,
  },
  {
    text: "buy milk",
    completed: true,
  },
  {
    text: "do something stupid",
    completed: true,
  },
  {
    text: "create todo list",
    completed: false,
  },
];

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
  const newDiv = document.createElement("div");
  newDiv.innerText = todo.text;
  newDiv.classList.add("todo");
  if (todo.completed) {
    newDiv.classList.add("completed");
  }
  return newDiv;
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

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo"))
    e.target.classList.toggle("completed");
});

getTodos();
