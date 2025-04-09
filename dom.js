document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("text");
  const indicator = document.getElementById("YO");

  // La div contenant toutes les tâches (on sélectionne le bon container)
  const taskContainer = document.querySelectorAll(".bg-white.rounded-md.shadow-md")[1];

  const itemsLeft = document.querySelector("span");
  const clearBtn = document.querySelector("button.hover\\:text-gray-700");

  function updateItemsLeft() {
    const total = document.querySelectorAll("input[type='checkbox']:not(:checked)").length;
    itemsLeft.textContent = `${total} item${total > 1 ? "s" : ""} left`;
  }

  function updateCircleIndicator() {
    const text = input.value.trim();
    if (text.length >= 3) {
      indicator.style.background = "linear-gradient(135deg, #57ddff, #c058f3)";
      indicator.style.border = "none";
    } else {
      indicator.style.background = "none";
      indicator.style.border = "1px solid #e2e8f0";
    }
  }

  function createTodo(textValue) {
    const todo = document.createElement("div");
    todo.className = "p-4 border-b flex items-center group task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "mr-3";

    const span = document.createElement("span");
    span.textContent = textValue;
    span.className = "flex-1 text-gray-700";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>`;

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        span.classList.add("line-through", "text-gray-400");
        span.classList.remove("text-gray-700");
      } else {
        span.classList.remove("line-through", "text-gray-400");
        span.classList.add("text-gray-700");
      }
      updateItemsLeft();
    });

    deleteBtn.addEventListener("click", () => {
      todo.remove();
      updateItemsLeft();
    });

    todo.appendChild(checkbox);
    todo.appendChild(span);
    todo.appendChild(deleteBtn);

    // On insère AVANT le footer
    const footer = taskContainer.querySelector("div.p-4.flex.justify-between");
    taskContainer.insertBefore(todo, footer);
  }

  input.addEventListener("input", updateCircleIndicator);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const text = input.value.trim();
      if (text.length >= 3) {
        createTodo(text);
        input.value = "";
        updateItemsLeft();
        updateCircleIndicator(); // Réinitialiser le cercle
      }
    }
  });

  clearBtn.addEventListener("click", () => {
    const checkedTodos = taskContainer.querySelectorAll("input[type='checkbox']:checked");
    checkedTodos.forEach((checkbox) => checkbox.closest("div.p-4").remove());
    updateItemsLeft();
  });

  updateItemsLeft(); // initial
  updateCircleIndicator(); // initial
});

const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");
const taskContainer = document.getElementById("taskContainer"); // Assure-toi que cette div existe avec un id dans le HTML

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

filterAll.addEventListener("click", () => updateFilter("all"));
filterActive.addEventListener("click", () => updateFilter("active"));
filterCompleted.addEventListener("click", () => updateFilter("completed"));
