document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navUl = document.getElementById('nav-ul');

    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('open');
    });

    // Footer Info
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Cafe Data
    const cafes = [
        {
            id: 1,
            name: 'Da Matteo',
            location: 'Magasinsgatan',
            image: 'images/da-matteo.webp',
            description: 'A local roastery with a bustling atmosphere and fantastic specialty coffee. Their courtyard is a popular summer spot.',
            rating: 4.7,
            established: 1995
        },
        {
            id: 2,
            name: 'Haga Nygata',
            location: 'Haga',
            image: 'images/haga-nygata.webp',
            description: 'Famous for its giant cinnamon buns (Hagabullen), this classic cafe is a must-visit in the charming Haga district.',
            rating: 4.6,
            established: 2001
        },
        {
            id: 3,
            name: 'Kafe Magasinet',
            location: 'Tredje Långgatan',
            image: 'images/kafe-magasinet.webp',
            description: 'A trendy, spacious cafe with a beautiful greenhouse-like interior. Great for both work and socializing.',
            rating: 4.5,
            established: 2010
        },
        {
            id: 4,
            name: 'Alkemisten',
            location: 'Hisingen',
            image: 'images/alkemisten.webp',
            description: 'A bit off the beaten path, but worth the trip for its award-winning coffee and passionate baristas.',
            rating: 4.8,
            established: 2012
        },
        {
            id: 5,
            name: 'Viktors Kaffe',
            location: 'Geijersgatan',
            image: 'images/viktors-kaffe.webp',
            description: 'A small, cozy spot near Avenyn, known for its high-quality espresso and friendly, knowledgeable staff.',
            rating: 4.9,
            established: 2015
        },
        {
            id: 6,
            name: 'Kafé Vanilj',
            location: 'Kyrkogatan',
            image: 'images/kafe-vanilj.webp',
            description: 'Tucked away in a quiet courtyard, this cafe offers a peaceful retreat with delicious homemade pastries.',
            rating: 4.3,
            established: 2018
        }
    ];

    const cafeGrid = document.getElementById('cafe-grid');

    function createCafeCard(cafe) {
        const card = document.createElement('div');
        card.className = 'cafe-card';

        const image = document.createElement('img');
        image.src = cafe.image;
        image.alt = `A photo of ${cafe.name}`;
        image.loading = 'lazy'; // Lazy loading for images

        const content = document.createElement('div');
        content.className = 'cafe-card-content';

        const title = document.createElement('h3');
        title.textContent = cafe.name;

        const location = document.createElement('p');
        location.textContent = cafe.location;

        const description = document.createElement('p');
        description.textContent = cafe.description;

        content.appendChild(title);
        content.appendChild(location);
        content.appendChild(description);
        card.appendChild(image);
        card.appendChild(content);

        return card;
    }

    if (cafeGrid) {
        cafes.forEach(cafe => {
            const card = createCafeCard(cafe);
            cafeGrid.appendChild(card);
        });
    }

    const container = document.getElementById('featured-cafes');
    if (!container || !Array.isArray(cafes)) return;
    container.innerHTML = '';
    cafes.forEach(cafe => {
        const card = document.createElement('div');
        card.className = 'cafe-card';
        card.innerHTML = `
            <a href="cafe-detail.html?id=${cafe.id}" class="cafe-link">
                <img src="${cafe.image}" alt="${cafe.name}" class="cafe-img" />
                <h3>${cafe.name}</h3>
            </a>
            <p><strong>Rating:</strong> ${cafe.rating} / 5</p>
            <p><strong>Established:</strong> ${cafe.established}</p>
        `;
        container.appendChild(card);
    });
});
