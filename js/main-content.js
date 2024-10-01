// Add this JavaScript to your main JavaScript file or in a <script> tag in services.html

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.services-list li');
    const container = document.querySelector('.main-content');

    function updateFadeOutEffect() {
        const containerBottom = container.getBoundingClientRect().bottom;
        const containerHeight = container.clientHeight;

        listItems.forEach(item => {
            const itemBottom = item.getBoundingClientRect().bottom;
            
            // Check if the list item is within the last 100px of the container
            if (itemBottom > containerBottom - 100) {
                item.classList.add('faded');
            } else {
                item.classList.remove('faded');
            }
        });
    }

    // Initial check
    updateFadeOutEffect();

    // Update effect on scroll
    container.addEventListener('scroll', updateFadeOutEffect);
});
