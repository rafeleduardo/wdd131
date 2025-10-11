document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navUl = document.querySelector('nav ul');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navUl.classList.toggle('open');
        });
    }

    // Footer Info
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }

    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    }

    // Dynamically load featured cafes
    const featuredContainer = document.getElementById('featured-cafes');

    // Check if the container and cafes array exist
    if (featuredContainer && typeof cafes !== 'undefined') {
        // Clear any existing content
        featuredContainer.innerHTML = '';

        // Use the global 'cafes' array from cafes.js
        cafes.forEach(cafe => {
            const card = document.createElement('div');
            card.className = 'cafe-card';

            // Use template literals to build the card content
            card.innerHTML = `
                <a href="cafe-detail.html?id=${cafe.id}" class="cafe-link">
                    <img src="${cafe.image}" alt="${cafe.name}" class="cafe-img" loading="lazy">
                    <h3>${cafe.name}</h3>
                </a>
                <p><strong>Rating:</strong> ${cafe.rating} / 5</p>
                <p><strong>Established:</strong> ${cafe.established}</p>
            `;

            featuredContainer.appendChild(card);
        });
    }
});
