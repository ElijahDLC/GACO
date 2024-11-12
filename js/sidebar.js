document.addEventListener('DOMContentLoaded', () => {
    // Default to the "services" page
    const defaultNavItem = document.querySelector('.nav-item[data-page="views/main/services.html"]');
    if (defaultNavItem) {
        const color = defaultNavItem.getAttribute('data-color');
        const page = defaultNavItem.getAttribute('data-page');

        // Call the function to change background color and load the default content
        changeBackgroundColor(color, defaultNavItem);
        loadContent(page);
    }
});

function changeBackgroundColor(color, element) {
    const container = document.querySelector('.container');
    
    // Set the new gradient based on the clicked nav-item's data-color
    const newGradient = `linear-gradient(315deg, #ffb3b3, ${color})`;

    // Apply the gradient to the CSS variable so the ::after element uses it
    container.style.setProperty('--new-gradient', newGradient);

    // Add the transitioning class to trigger the fade in/out effect
    container.classList.add('transitioning');

    // After 1 second (same duration as CSS transition), remove the class
    setTimeout(() => {
        container.style.background = newGradient; // Set new background permanently
        container.classList.remove('transitioning');
    }, 1000); // Matches the CSS transition duration

    // Update the selected nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('selected');
    });
    element.classList.add('selected');
}

function loadContent(page) {
    // Fetch the HTML content and inject it into the main-content
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('main-content').innerHTML = '<p>Error loading content.</p>';
        });
}

// Add event listeners to each nav-item
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        const color = this.getAttribute('data-color');
        const page = this.getAttribute('data-page');

        changeBackgroundColor(color, this);
        loadContent(page);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Select the trees background image
    const treesImage = document.querySelector('.background-trees');

    // Function to trigger the slide animation
    function animateTrees() {
        // Remove any existing animation class to reset
        treesImage.classList.remove('animate', 'hidden');

        // Add the animate class to trigger the animation
        void treesImage.offsetWidth; // Reflow for restart animation
        treesImage.classList.add('animate');

        // Hide the image temporarily in the middle of the animation
        setTimeout(() => treesImage.classList.add('hidden'), 1000); // Halfway point

        // Show the image again at the bottom after the animation ends
        setTimeout(() => treesImage.classList.remove('hidden'), 2000); // End of animation
    }

    // Modify each nav item to trigger the animation on click
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            animateTrees(); // Run the trees animation on nav item click
        });
    });
});
