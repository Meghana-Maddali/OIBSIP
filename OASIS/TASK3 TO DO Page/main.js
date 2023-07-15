const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
form.addEventListener('submit', function(e) {
e.preventDefault(); // Prevent form submission
const todoInput = document.getElementById('todo-input');
const todoText = todoInput.value.trim();
if (todoText !== '') {
const todoItem = document.createElement('div');
todoItem.className = 'todo-item';
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
const todoLabel = document.createElement('label');
todoLabel.textContent = todoText;
const deleteBtn = document.createElement('button');
deleteBtn.className = 'delete-btn';
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', function() {
todoItem.remove();
});
todoItem.appendChild(checkbox);
todoItem.appendChild(todoLabel);
todoItem.appendChild(deleteBtn);
todoList.appendChild(todoItem);
todoInput.value = '';
}
});
