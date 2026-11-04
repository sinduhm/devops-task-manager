
const API = "/api/tasks";

async function getTasks() {
    const response = await fetch(API);
    const tasks = await response.json();

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task";

        const span = document.createElement("span");
        span.textContent = task.name;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.className = "delete-btn";

        button.onclick = () => deleteTask(task._id);

        div.appendChild(span);
        div.appendChild(button);

        taskList.appendChild(div);
    });
}

async function addTask() {
    const input = document.getElementById("taskInput");

    const name = input.value.trim();

    if (!name) {
        alert("Please enter a task");
        return;
    }

    try {
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })
        });

        if (!response.ok) {
            throw new Error("Unable to add task");
        }

        input.value = "";

        getTasks();

    } catch (error) {
        alert(error.message);
    }
}

async function deleteTask(id) {
    try {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Unable to delete task");
        }

        getTasks();

    } catch (error) {
        alert(error.message);
    }
}

getTasks();
