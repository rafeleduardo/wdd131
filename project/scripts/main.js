document.addEventListener('DOMContentLoaded', () => {
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

    const featuredContainer = document.getElementById('featured-cafes');

    if (featuredContainer && typeof cafes !== 'undefined') {
        featuredContainer.innerHTML = '';

        // Use the global 'cafes' array from cafes.js
        cafes.forEach(cafe => {
            const card = document.createElement('div');
            card.className = 'cafe-card';

            // --- Responsive Image Logic ---
            const baseImagePath = cafe.image[0].replace('.webp', '');
            const srcset = `${baseImagePath}-400.webp 400w, ${baseImagePath}-800.webp 800w`;
            const sizes = "(min-width: 900px) 300px, 100vw"; 

            card.innerHTML = `
                <a href="cafe-detail.html?id=${cafe.id}" class="cafe-link">
                    <img src="${cafe.image[0]}" srcset="${srcset}" sizes="${sizes}" alt="" class="cafe-img" loading="lazy">
                    <h3>${cafe.name}</h3>
                </a>
                <p><strong>Rating:</strong> ${cafe.rating} / 5</p>
                <p><strong>Established:</strong> ${cafe.established}</p>
            `;

            featuredContainer.appendChild(card);
        });
    }
});
