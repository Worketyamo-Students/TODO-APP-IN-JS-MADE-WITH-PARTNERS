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
        if(todoInput.value.length<5){
               alert('Please enter at least 5 characters.');
            todoInput.value = ''; 
        }else{
            todos.push(todoInput.value);  // Add the text to array
            todoInput.value = ''; 
        }
            // metre a jour la liste
            showTodos();   
       
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
                   
    }

});
const filtreAll = document.getElementById("filtreAll");
const filtreActive = document.getElementById("filtreActive");
const filtreCompleted = document.getElementById("filtreCompleted");
const taskContainer = document.getElementById("taskContainer"); 
function updateFilter(filterType) {
  const tasks = taskContainer.querySelectorAll(".task-item");

  tasks.forEach((task) => {
    const checkbox = task.querySelector("input[type='checkbox']");
    const isCompleted = checkbox.checked;
    switch (filterType) {
      case "all":
        task.style.display = "flex";
        break;
      case "active":
        task.style.display = isCompleted ? "none" : "flex";
        break;
      case "completed":
        task.style.display = isCompleted ? "flex" : "none";
        break;
    }
  });
}

filtreAll.addEventListener("click", () => updateFilter("all"));
filtreActive.addEventListener("click", () => updateFilter("active"));
filtreCompleted.addEventListener("click", () => updateFilter("completed"));
