document.querySelector('body');
const todoInput = document.getElementById('todoInput');
const todotext = document.getElementById('todotext');
const itemsLeft = document.getElementById('itemsLeft');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterButtons = document.querySelectorAll('.filter');
const button = document.querySelector('.delete-btn');

const todotextbox =document.getElementById('todotextbox');
const todoList = document.getElementById('todoList');    

const checkrol = document.getElementsByClassName('todo-checkbox');

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

            }
            itemsLeft.textContent = todos.length + " items left";

        }
        
    // metre a jour la liste
        showTodos();                  
    }

});

const toggleBtn = document.getElementById('darktoggle');

        const body = document.body;

        // SVG pour le mode clair (lune)
        const moonSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                <path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/>
            </svg>
        `;

        // Image pour le mode sombre
        const darkModeImage = `
            <img src="assets/IMG/Combined Shape (3).svg" alt="Dark Mode Icon" id="theme-icon">
        `;

        toggleBtn.addEventListener('click', () => {
            
            if (body.id === 'light') {
                body.id = 'dark';
                toggleBtn.innerHTML = darkModeImage;
            } else {
                body.id = 'light';
                toggleBtn.innerHTML = moonSVG;
            }
        });

       


