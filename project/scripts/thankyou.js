document.addEventListener('DOMContentLoaded', () => {
    const suggestionCountElement = document.getElementById('suggestion-count');

    if (suggestionCountElement) {
        // Get the current count from localStorage, or default to 0
        let count = localStorage.getItem('suggestionCount') || 0;

        // Increment the count since this page is loaded upon a new submission
        count = parseInt(count) + 1;

        // Save the new count back to localStorage
        localStorage.setItem('suggestionCount', count);

        // Display the count on the page
        suggestionCountElement.textContent = count;
    }
});
