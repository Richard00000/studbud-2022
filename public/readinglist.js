// Basic form DOM elements
const formRead = document.getElementById("readingform");
const buttonR = document.getElementById("#reading_submit")

// Selector for the readinglist output
var displyReading = document.querySelector("#displayReading > ul");

// DOM elements for the reading input fields
var readInput = document.getElementById("readInput");

// Form submission event listener
formRead.addEventListener("submit", function (event) {
    event.preventDefault();
    let read = readInput.value;
    if (read) {
        addRead(read, false);
    }
})

// Create global array to track readings
var readingListArray = [];

// Function to add reading with user inputs as parameters
function addRead(readDescription, completionStatus) {
    let read = {
        id: Date.now(),
        readDescription,
        completionStatus
    };
    readingListArray.push(read);
    console.log(readingListArray);
    renderRead(read);

}

// Function to display reading on screen
function renderRead(read) {

    // Call function - checks if a reading has been added
    updateEmptyRead();

    // Create HTML elements
    let item = document.createElement("li");
    item.setAttribute('data-id', read.id);
    item.innerHTML = "<p>" + read.readDescription + "</p>";
    displyReading.appendChild(item);

    // Extra Reading DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Reading");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);


    // Event Listeners for DOM elements
    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = readingListArray.findIndex(read => read.id === Number(id));
        removeItemFromArray(readingListArray, index)
        console.log(readingListArray);
        updateEmptyRead();
        item.remove();
    })

    // Clear the input form
    formRead.reset();
}

// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}


// Function to hide the 'You have not added any reading yet!' text
function updateEmptyRead() {
    if (readingListArray.length > 0) {
        document.getElementById('readingEmptyList').style.display = 'none';
    } else {
        document.getElementById('readingEmptyList').style.display = 'block';
    }
}


//Function to open all the links
var openAllLink = document.getElementById('open_all');

openAllLink.addEventListener('click', function () {
    console.log(readingListArray);

    if (readingListArray.length > 0) {
        readingListArray.forEach(function (item) {
            window.open(item.readDescription, '_blank')
        });
    };
});