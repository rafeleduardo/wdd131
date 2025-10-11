// cafe-detail.js
// This script takes the 'id' parameter from the URL, looks up the cafe in cafes.js, and displays the data on the detail page.

document.addEventListener('DOMContentLoaded', () => {
    // Get the id parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const cafeId = parseInt(params.get('id'), 10);

    // Basic validation
    if (!cafeId || !Array.isArray(cafes)) {
        mostrarError('No cafe selected or data missing.');
        return;
    }

    // Find the cafe by id
    const cafe = cafes.find(c => c.id === cafeId);
    if (!cafe) {
        mostrarError('Cafe not found.');
        return;
    }

    // Display the data in the DOM
    document.getElementById('cafe-detail-img').src = cafe.image;
    document.getElementById('cafe-detail-img').alt = cafe.name;
    document.getElementById('cafe-name').textContent = cafe.name;
    document.getElementById('cafe-description').textContent = cafe.description;
    document.getElementById('cafe-address').textContent = cafe.address;
    document.getElementById('cafe-hours').textContent = cafe.hours;
    document.getElementById('cafe-established').textContent = cafe.established;
    
    // Handle the star rating
    const ratingValue = cafe.rating;
    document.getElementById('cafe-rating-value').textContent = ratingValue;
    const percentage = (ratingValue / 5) * 100;
    document.getElementById('stars-foreground').style.width = `${percentage}%`;

    const websiteLink = document.getElementById('cafe-website');
    websiteLink.href = cafe.website;
    websiteLink.textContent = cafe.website ? 'Visit site' : 'N/A';
});

function mostrarError(msg) {
    const main = document.querySelector('main.cafe-detail');
    main.innerHTML = `<section class='error'><h2>Error</h2><p>${msg}</p><a href='index.html' class='back-btn'>&#8592; Back to Cafes</a></section>`;
}
