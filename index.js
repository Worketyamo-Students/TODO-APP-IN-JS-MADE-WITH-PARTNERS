document.querySelector('body');
const todoInput = document.getElementById('todoInput');
const todotext = document.getElementById('todotext');
const itemsLeft = document.getElementById('itemsLeft');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterButtons = document.querySelectorAll('.filter');
const button = document.querySelector('.delete-btn');

const todotextbox =document.getElementById('todotextbox');
const todoList = document.getElementById('todoList');    

let todos = [];  // Array/ tableaux pour stocker mes elements
// un nuveaux element quand on appuis sur entré
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && todoInput.value !== '') {
        todos.push(todoInput.value);  // Add the text to array
        todoInput.value = ''; 
        function showTodos() {
            todoList.innerHTML = ''; 
             // effacer la  liste courante
            
            for (let i = 0; i < todos.length; i++) {
                // Create a list item for each todo
                const li = todotextbox.cloneNode(true);
                li.style.display = 'flex'; // rendre la liste visible
                li.id = '';
        
                const textSpan = li.querySelector('#todotext');
                textSpan.textContent = todos[i];
                
                // deleteBtn
                const deleteBtn = li.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => {
                    todos.splice(i, 1);  // retire un element e la liste
                    showTodos();         // Update the list
                });
                
                todoList.appendChild(li);
                itemsLeft.innerHTML = todos.length + " items left"
            }
         
        }
        
    // metre a jour la liste
        showTodos();                  
    }
});

