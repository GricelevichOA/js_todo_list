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

const form = document.querySelector("#form");
const todoList = document.querySelector("#todos");

// get all todos
function getTodos() {
  for (todo of todos) {
    todoList.insertAdjacentElement("beforeend", createTodo(todo));
  }
}

function createTodo(todo) {
  const newTodo = document.createElement("div");
  newTodo.innerText = todo.text;
  if (todo.completed) {
    newTodo.classList.add("completed");
  }
  return newTodo;
}

getTodos();
