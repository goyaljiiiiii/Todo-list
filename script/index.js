document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".add");
    const taskInput = document.querySelector("input[type='text']");
    const dateInput = document.querySelector("input[type='date']");
    const resultDiv = document.querySelector(".result");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const taskDate = dateInput.value;

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create Task Container
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-item");

        // Task Text
        const taskContent = document.createElement("span");
        taskContent.textContent = `${taskText} - ${taskDate}`;
        taskContent.classList.add("task-content");

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        // Mark as Done Button
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.classList.add("done-btn");

        // Append elements
        taskContainer.appendChild(taskContent);
        taskContainer.appendChild(doneButton);
        taskContainer.appendChild(deleteButton);
        resultDiv.appendChild(taskContainer);

        // Clear input fields
        taskInput.value = "";
        dateInput.value = "";

        // Event Listeners for buttons
        deleteButton.addEventListener("click", function () {
            taskContainer.remove();
        });

        doneButton.addEventListener("click", function () {
            taskContainer.classList.toggle("completed");
        });
    });
});
