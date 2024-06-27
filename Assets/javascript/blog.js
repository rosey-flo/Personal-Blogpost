const toggle = document.querySelector('#toggle');
const body = document.body;

// Function to retrieve and display notes from localStorage
function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const container = document.querySelector('.entry_box');

    if (posts.length === 0) {
        container.innerHTML = '<p>No posts available.</p>';
        return;
    }

    for (const entryStr of posts) {
        container.insertAdjacentHTML('beforeend', `
            <article class="posts">
                <h3 class="posts-title">${entryStr.title}</h3>
                <p class="posts-message">Created: ${entryStr.message}</p>
                <p class="posts-date">Created: ${entryStr.date}</p>
            </article>
        `);
    }
}

// Call the displayNotes function when the output page loads
displayPosts();



toggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});