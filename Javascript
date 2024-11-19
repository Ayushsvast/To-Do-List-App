document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => listItem.remove());

      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }

  addTaskButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
