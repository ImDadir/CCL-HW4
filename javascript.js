const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function () {
    const task = todoInput.value;

    if (!task) {
        alert('Please enter a task!');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = task;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function () {
        todoList.removeChild(li);
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = '';
});