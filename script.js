const todos = [
  {
    text: "become a rockstar",
    completed: false,
  },
  {
    text: "buy milk",
    completed: true,
  },
];

const form = document.querySelector("#form");
const todoList = document.querySelector("#todos");

function getTodos() {
  // console.log(todos);
  for (let todo of todos) {
    createTodo(todo);
    // console.log(todo);
  }
}

function createTodo(todo) {
  const li = document.createElement("li");
  li.innerText = todo.text;
  todoList.insertAdjacentElement("afterbegin", li);
}

function handleSubmit() {}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.todoInput.value);
});

getTodos();
