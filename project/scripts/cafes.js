const cafes = [
  {
    id: 1,
    name: "Café Husaren",
    image: [
        "images/café-husaren-1.webp",
        "images/café-husaren-2.webp"
    ],
    description: "Located in the heart of Haga, Café Husaren is famous for its giant cinnamon bun (kanelbulle). The classic and cozy atmosphere makes it perfect for an authentic Swedish fika experience.",
    address: "Haga Nygata 28, 411 22 Gothenburg",
    hours: "Daily 08:00-19:00",
    website: "https://www.cafehusaren.se/",
    established: 1986,
    rating: 4.5
  },
  {
    id: 2,
    name: "da Matteo Vallgatan",
    image: [
        "images/da-matteo-vallgatan-1.webp",
        "images/da-matteo-vallgatan-2.webp"
    ],
    description: "da Matteo is a specialty coffee reference in Gothenburg. Their Vallgatan location offers a modern vibe, artisan bakery, and locally roasted coffee. A meeting point for coffee lovers and contemporary fika.",
    address: "Vallgatan 5, 411 16 Gothenburg",
    hours: "Mon-Fri 07:30-18:00, Sat-Sun 09:00-18:00",
    website: "https://damatteo.se/pages/test-2",
    established: 2003,
    rating: 4.6
  },
  {
    id: 3,
    name: "Kafé Magasinet",
    image: [
        "images/kafe-magasinet-1.webp",
        "images/kafe-magasinet-2.webp"
    ],
    description: "One of the most popular and modern spaces in the city. Its indoor patio, industrial decor, and varied menu make it perfect for fika, brunch, or a relaxed afternoon with friends.",
    address: "Tredje Långgatan 9, 413 03 Gothenburg",
    hours: "Daily 08:00-01:00",
    website: "https://www.kafemagasinet.se/",
    established: 2015,
    rating: 4.4
  },
  {
    id: 4,
    name: "Kafé Kringlan",
    image: [
        "images/kafe-kringlan-1.webp",
        "images/kafe-kringlan-2.webp"
    ],
    description: "A classic in Haga, with traditional atmosphere and homemade Swedish pastries. Ideal for those seeking an authentic and peaceful fika experience in Gothenburg.",
    address: "Haga Nygata 13, 413 01 Gothenburg",
    hours: "Daily 09:00-18:00",
    website: "",
    established: 1984,
    rating: 4.3
  },
  {
    id: 5,
    name: "Ahlströms Konditori",
    image: [
        "images/ahlströms-konditori-1.webp",
        "images/ahlströms-konditori-2.webp"
    ],
    description: "Founded in 1901, Ahlströms Konditori is one of the oldest pastry shops in Gothenburg. Its selection of cakes, elegant atmosphere, and tradition make it a must for fika lovers.",
    address: "Korsgatan 2, 411 16 Gothenburg",
    hours: "Mon-Fri 08:00-18:00, Sat 09:00-16:00, Sun closed",
    website: "https://www.ahlstromskonditori.se/",
    established: 1901,
    rating: 4.5
  },
  {
    id: 6,
    name: "Café Fröken Olsson",
    image: [
        "images/cafe-froken-olsson-1.webp",
        "images/cafe-froken-olsson-2.webp"
    ],
    description: "A cozy café with a charming garden, offering homemade cakes and a relaxing atmosphere. Perfect for a quiet fika in the city center.",
    address: "Östra Larmgatan 14, 411 07 Gothenburg",
    hours: "Mon-Fri 09:00-18:00, Sat-Sun 10:00-17:00",
    website: "https://www.frokenolsson.se/",
    established: 1987,
    rating: 4.4
  },
  {
    id: 7,
    name: "Café Berlin",
    image: [
        "images/cafe-berlin-1.webp",
        "images/cafe-berlin-2.webp"
    ],
    description: "A modern café with a European touch, offering specialty coffee and homemade cakes. Popular among young locals and tourists.",
    address: "Vasagatan 46, 411 37 Göteborg",
    hours: "Mon-Fri 08:00-18:00, Sat-Sun 09:00-17:00",
    website: "https://sv-se.facebook.com/pages/Café-Berlin/160867323959647",
    established: 2012,
    rating: 4.3
  },
  {
    id: 8,
    name: "Café Tintin",
    image: [
        "images/cafe-tintin-1.webp",
        "images/cafe-tintin-2.webp"
    ],
    description: "A quirky café inspired by the famous comic character, offering a playful atmosphere and a wide selection of pastries and drinks.",
    address: "Engelbrektsgatan 22, 411 37 Göteborg",
    hours: "Mon-Thu 09:00-13:00, Fri-Sat 09:00-16:00, Sun 09:00-13:00",
    website: "https://tintin.coffee",
    established: 2010,
    rating: 4.2
  },
  {
    id: 9,
    name: "Café Marmelad",
    image: [
        "images/cafe-marmelad-1.webp",
        "images/cafe-marmelad-2.webp"
    ],
    description: "A lively café with a bohemian vibe, offering organic pastries and fair-trade coffee. Popular for its music events and creative crowd.",
    address: "Mariagatan 17, 414 71 Gothenburg",
    hours: "Mon-Fri 08:00-18:00, Sat-Sun 09:00-17:00",
    website: "https://www.kafemarmelad.se/",
    established: 2006,
    rating: 4.4
  },
  {
    id: 10,
    name: "Café Le Petit",
    image: [
        "images/cafe-le-petit-1.webp",
        "images/cafe-le-petit-2.webp"
    ],
    description: "A French-inspired café with a cozy atmosphere, offering croissants, baguettes, and delicious coffee. Perfect for a European-style fika.",
    address: "Haga Nygata 2, 413 01 Göteborg",
    hours: "Mon-Fri 08:00-18:00, Sat-Sun 09:00-16:00",
    website: "https://lepetitcafe.se",
    established: 2011,
    rating: 4.4
  }
];
