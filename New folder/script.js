let tasks = [];
const tasksContainer = document.querySelector("#tasks");
function addTodo() {
  tasksContainer.innerHTML = "";
  tasks.push(document.querySelector("input").value);
  tasks.forEach((task, index) => {
    taskBlock = document.createElement("div");
    taskText = document.createElement("span");
    taskText.innerText = task;
    taskBlock.classList = "task-block";
    tasksContainer.appendChild(taskBlock);
    taskBlock.appendChild(taskText);
    removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("onclick", "removeTodo()");
    removeButton.value = index;
    taskBlock.appendChild(removeButton);
  });
}
function removeTodo() {
    
}