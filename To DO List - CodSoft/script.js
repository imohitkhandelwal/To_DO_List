// Retrieve tasks from local storage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button id="edit" onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
}

// Function to edit a task
function editTask(index) {
    const newTaskText = prompt('Edit task:', tasks[index]);
    if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

// Initial display of tasks
displayTasks();
