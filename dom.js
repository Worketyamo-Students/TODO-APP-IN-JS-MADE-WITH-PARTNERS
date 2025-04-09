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
