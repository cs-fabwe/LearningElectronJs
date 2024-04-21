let todos = ["Item 1", "Item 2", "Item 3"];
let no_todos = document.getElementById('no-todos');
let todo = document.getElementById('add-todo');

function toggleAdd() {
    let current = todo.style.display;
    if (current === 'none') {
        todo.style.display = 'block';
    } else {
        todo.style.display = 'none';
    }
}

function addTodo() {
    let text = document.getElementById('todo-text');
    let todo_name = text.value;
    
    todos.push(todo_name.toString());
    updateList();
    
    toggleAdd();
}

function clearTodos() {
    todos.length = 0;
    updateList();
}

function updateList() {
    let ul = document.getElementById('todo-list');
    ul.innerHTML = "";
    
    if (todos.length === 0) {
        ul.style.display = 'none';
        no_todos.style.display = 'block';
    } else {
        no_todos.style.display = 'none';
        ul.style.display = 'block';
        todos.forEach((item) => {
            let li = document.createElement("li");
            li.setAttribute("class", "todo-item");
            li.appendChild(document.createTextNode(item.toString()));
            ul.appendChild(li);
        });
    }
}