function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    li.classList.toggle("done");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
    updateTaskCounter();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";

  updateTaskCounter();
}

function updateTaskCounter() {
  const count = document.querySelectorAll('#taskList li').length;
  document.getElementById("taskCounter").textContent = `You have ${count} task${count !== 1 ? "s" : ""}`;
}
