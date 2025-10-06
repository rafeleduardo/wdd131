const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Caracas Temple",
        location: "Caracas, Caracas DF, Venezuela",
        dedicated: "1999-01-10",
        area: 15532,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-55702.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59245,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-43513.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "2017-05-21",
        area: 45200,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-20908.jpg"
    },
    {
        templeName: "Tokyo Temple",
        location: "Tokyo, Japan",
        dedicated: "2022-07-03",
        area: 53997,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340.jpg"
    },
    {
        templeName: "Stockholm Temple",
        location: "Stockholm, Sweden",
        dedicated: "1985-07-02",
        area: 31000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267.jpg"
    }
];

function $(sel, ctx = document) {
    return ctx.querySelector(sel);
}

function $all(sel, ctx = document) {
    return Array.from(ctx.querySelectorAll(sel));
}

function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
}

function createCard(t) {
    const figure = document.createElement('figure');
    figure.className = 'card';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = t.imageUrl;
    img.alt = `${t.templeName} - ${t.location}`;

    const caption = document.createElement('figcaption');
    const h3 = document.createElement('h3');
    h3.textContent = t.templeName;

    const pLoc = document.createElement('p');
    pLoc.className = 'meta';
    pLoc.innerHTML = `<span class="label">Location:</span> ${t.location}`;

    const pDed = document.createElement('p');
    pDed.className = 'meta';
    pDed.innerHTML = `<span class="label">Dedicated:</span> ${formatDate(t.dedicated)}`;

    const pArea = document.createElement('p');
    pArea.className = 'meta';
    pArea.innerHTML = `<span class="label">Area:</span> ${t.area.toLocaleString()} sq ft`;

    caption.append(h3, pLoc, pDed, pArea);
    figure.append(img, caption);
    return figure;
}

function render(list) {
    const gallery = $('#gallery');
    gallery.innerHTML = '';
    if (!list.length) {
        const p = document.createElement('p');
        p.textContent = 'No temples match this filter.';
        gallery.appendChild(p);
        return;
    }
    const frag = document.createDocumentFragment();
    list.forEach(t => frag.appendChild(createCard(t)));
    gallery.appendChild(frag);
}

function applyFilter(filter) {
    let list = temples.slice();
    switch (filter) {
        case 'old':
            list = list.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            list = list.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
            break;
        case 'large':
            list = list.filter(t => t.area > 90000);
            break;
        case 'small':
            list = list.filter(t => t.area < 10000);
            break;
        default:
            // all
            break;
    }
    render(list);
}

function setupMenu() {
    const btn = $('#menu');
    const list = $('#navlist');
    btn.addEventListener('click', () => {
        const open = list.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
    });

    // Close menu when a link is selected (mobile)
    list.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (!a || window.matchMedia('(min-width: 700px)').matches) return;
        list.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    });
}

function setupFilters() {
    const links = $all('[data-filter]');
    const mainHeading = $('main > h1');

    links.forEach(a => a.addEventListener('click', (e) => {
        e.preventDefault();
        links.forEach(x => x.classList.remove('active'));
        a.classList.add('active');
        const filter = a.getAttribute('data-filter');
        applyFilter(filter);

        // Update heading
        let title = a.textContent;
        if (title === 'Home') title = 'All Temples';
        mainHeading.textContent = title;
    }));
}

function setupFooter() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
    const lm = document.getElementById('lastModified');
    if (lm) lm.textContent = `Last Modified: ${document.lastModified}`;
}

// Init
window.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    setupFilters();
    applyFilter('all');
    setupFooter();
    $('main > h1').textContent = 'All Temples';
});
