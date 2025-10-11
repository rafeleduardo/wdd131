// cafe-detail.js
// This script takes the 'id' parameter from the URL, looks up the cafe in cafes.js, and displays the data on the detail page.

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const cafeId = parseInt(params.get('id'), 10);

    if (!cafeId || !Array.isArray(cafes)) {
        showError('No cafe selected or data missing.');
        return;
    }

    const cafe = cafes.find(c => c.id === cafeId);
    if (!cafe) {
        showError('Cafe not found.');
        return;
    }

    // --- Responsive Image Logic for Detail Page ---
    const detailImg = document.getElementById('cafe-detail-img');
    const baseImagePath = cafe.image[1].replace('.webp', '');
    const srcset = `${baseImagePath}-400.webp 400w, ${baseImagePath}-800.webp 800w, ${baseImagePath}-1200.webp 1200w`;
    const sizes = "(min-width: 900px) 900px, 100vw";

    detailImg.src = cafe.image[1];
    detailImg.srcset = srcset;
    detailImg.sizes = sizes;
    detailImg.alt = "";

    document.getElementById('cafe-name').textContent = cafe.name;
    document.getElementById('cafe-description').textContent = cafe.description;
    document.getElementById('cafe-address').textContent = cafe.address;
    document.getElementById('cafe-hours').textContent = cafe.hours;
    document.getElementById('cafe-established').textContent = cafe.established;

    const ratingValue = cafe.rating;
    document.getElementById('cafe-rating-value').textContent = ratingValue;
    const percentage = (ratingValue / 5) * 100;
    document.getElementById('stars-foreground').style.width = `${percentage}%`;

    const websiteLink = document.getElementById('cafe-website');
    websiteLink.href = cafe.website;
    websiteLink.textContent = cafe.website ? 'Visit site' : 'N/A';
});

function showError(msg) {
    const main = document.querySelector('main.cafe-detail');
    main.innerHTML = `<section class='error'><h2>Error</h2><p>${msg}</p><a href='index.html' class='back-btn'>&#8592; Back to Cafes</a></section>`;
}
