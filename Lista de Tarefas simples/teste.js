function addtarefa() {
  const taskInput = document.getElementById("taskInput");
  const tasklist = document.getElementById("taskList");

  if (taskInput.value === " ") {
    alert("digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
     ${taskInput.value}
 <button onclick="removeTask(this)">Remover</button>
    `;
  tasklist.appendChild(li);
  taskInput.value = " ";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
