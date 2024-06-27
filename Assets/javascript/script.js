// Target the form
const postForm = document.querySelector('#post_form');

// Function to get notes from localStorage or initialize an empty array
function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}


// Function to create a new note entry
function createNote(eventObj) {
    eventObj.preventDefault();

    // Grab the note input values
    const userInput = document.querySelector('#username-input');
    const titleInput = document.querySelector('#title-input');
    const messageInput = document.querySelector('#message-input');

    // old note input value
    //const noteInput = document.querySelector('#note-input');
    
    // Trim whitespace from the input

    const username = userInput.value.trim();
    const title = titleInput.value.trim();
    const message = messageInput.value.trim();  

    if (!username || !title || !message) {
        alert('Please enter a note.'); // Provide feedback if the input is empty
        return;
    }

    // Create a date string for the note
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    const dateStr = `${month}/${date}/${year}`;

    // Create an object with the note text and date
    const entryStr = {
        name: username,
        title: title,
        message: message,
        date: dateStr
    };

    // Get existing notes from localStorage or initialize empty array
    const posts = getPosts();

    // Add the new note entry to the array
    posts.push(entryStr);

    // Save updated notes array back to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Clear the input field after submission
    userInput.value = '';
    titleInput.value = '';
    messageInput.value = '';

    // Redirect to the output page (change the URL to the blog.html page)
    window.location = "./blog.html"

}

// Event listener for form submission
postForm.addEventListener('submit', createNote);
