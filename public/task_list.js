// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")

// Selector for the tasklist output
var tasklist = document.querySelector("#task_card > ul");

// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var note = document.getElementById("task_note");
var priorityInput = document.getElementById("priorityInput");

// Form submission event listener
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let input_note = note.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) {
        addTask(task, dueDate, estimatedTime, priorityRating, input_note, false);
    }
})

// Create global array to track tasks
var taskListArray = [];

// Function to add task with user inputs as parameters
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, input_note, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        estimatedTime,
        priorityRating,
        input_note,
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
    add_content.style.display = "none";
    dis = false;

}

// Function to display task on screen
function renderTask(task) {

    // Call function - checks if a task has been added
    updateEmpty();

    // Create HTML elements
    let item = document.createElement("li");
    item.setAttribute('data-id', task.id);
    item.innerHTML = "<p>" + "Task: " + task.taskDescription + "<br>" + "Priority: " + task.priorityRating + "<br>" + "Due Date: "
        + task.dueDate + "<br>" + "EST Time: " + task.estimatedTime + " hour" + "<br>" + "Note: " + task.input_note + "</p>";
    tasklist.appendChild(item);

    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);


    // Event Listeners for DOM elements
    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskListArray, index)
        console.log(taskListArray);
        updateEmpty();
        item.remove();
    })

    // Clear the input form
    form.reset();
}

// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}


// Function to hide the 'you haven't added any tasks' text
function updateEmpty() {
    if (taskListArray.length > 0) {
        document.getElementById('emptyList').style.display = 'none';
    } else {
        document.getElementById('emptyList').style.display = 'block';
    }
}
