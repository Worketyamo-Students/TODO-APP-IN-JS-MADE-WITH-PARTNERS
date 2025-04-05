const containerprincipal = document.querySelector('body');
const todoInput = document.getElementById('todoInput');
const todotext = document.getElementById('todotext');
const itemsLeft = document.getElementById('itemsLeft');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterButtons = document.querySelectorAll('.filter');
const button = document.querySelector('.delete-btn');

const todotextbox =document.getElementById('todotextbox');
const todoList = document.getElementById('todoList');  // Define todoList   

let todos = [];  // Array to store todo strings
// Add new todo when pressing Enter
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && todoInput.value !== '') {
        todos.push(todoInput.value);  // Add the text to array
        todoInput.value = ''; 
        function showTodos() {
            todoList.innerHTML = '';  // Clear current list
            
            for (let i = 0; i < todos.length; i++) {
                // Create a list item for each todo
                const li = todotextbox.cloneNode(true);
                li.style.display = 'flex';  // Make it visible and 
                li.id = '';
        
                const textSpan = li.querySelector('#todotext');
                textSpan.textContent = todos[i];
                
                // deleteBtn
                const deleteBtn = li.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => {
                    todos.splice(i, 1);  // Remove this todo
                    showTodos();         // Update the list
                });
                
                // li.appendChild(button);
                todoList.appendChild(li);
                itemsLeft.innerHTML = todos.length + " items left"
            }
         
        }
        
        // Clear the input
        showTodos();                  // Update the list
    }
});

