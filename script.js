document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(buttonsDiv);
  taskList.appendChild(li);

  taskInput.value = "";
}
