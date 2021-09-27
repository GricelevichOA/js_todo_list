document.addEventListener("DOMContentLoaded", function () {
  // todos array
  let todos = getFromLocalStorage();

  // page elements
  const todosForm = document.querySelector("#form");
  const todosInput = document.querySelector("#todoInput");
  const todoList = document.querySelector("#todos");

  // functions

  // render todos on page
  function renderTodos(todosArray) {
    todoList.innerHTML = "";
    for (todo of todosArray) {
      todoList.insertAdjacentElement("beforeend", createTodo(todo));
    }
  }

  // create todo
  function createTodo(todo) {
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");

    newLi.innerText = todo.text;
    newLi.id = todo.id;
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
      id: Date.now(),
    };
    todos.push(newTodo);
    addToLocalStorage(todos);
  }

  // localStorage
  // save todos in localStorage
  function addToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // get todos from local storage
  function getFromLocalStorage() {
    const storage = localStorage.getItem("todos");

    if (storage) {
      return JSON.parse(storage);
    } else {
      return [];
    }
  }

  // function calls
  renderTodos(todos);

  // event listeners

  // submit todo
  todosForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todosInput.value;

    if (newTodoText) addTodo(newTodoText);

    todosInput.value = "";
    renderTodos(todos);
  });

  // mark todo as completed
  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo")) {
      // e.target.classList.toggle("list-group-item-warning");
      // e.target.classList.toggle("completed");

      const newTodos = todos.map((todo) => {
        if (todo.id === parseInt(e.target.id)) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      todos = newTodos;
      addToLocalStorage(todos);
      renderTodos(todos);
    }
  });

  // delete todo
  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      const newTodos = todos.filter(
        (todo) => todo.id !== parseInt(e.target.parentElement.id)
      );
      todos = newTodos;
      addToLocalStorage(todos);
      renderTodos(todos);
    }
  });
});
