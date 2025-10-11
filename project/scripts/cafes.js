const cafes = [
  {
    id: 1,
    name: "Café Husaren",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Located in the heart of Haga, Café Husaren is famous for its giant cinnamon bun (kanelbulle). The classic and cozy atmosphere makes it perfect for an authentic Swedish fika experience.",
    address: "Haga Nygata 24, 411 22 Gothenburg",
    hours: "Daily 08:00-19:00",
    website: "https://www.cafehusaren.se/",
    established: 1986,
    rating: 4.5
  },
  {
    id: 2,
    name: "da Matteo Vallgatan",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    description: "da Matteo is a specialty coffee reference in Gothenburg. Their Vallgatan location offers a modern vibe, artisan bakery, and locally roasted coffee. A meeting point for coffee lovers and contemporary fika.",
    address: "Vallgatan 5, 411 16 Gothenburg",
    hours: "Mon-Fri 07:30-18:00, Sat-Sun 09:00-18:00",
    website: "https://damatteo.se/",
    established: 2003,
    rating: 4.6
  },
  {
    id: 3,
    name: "Kafé Magasinet",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "A classic in Haga, with traditional atmosphere and homemade Swedish pastries. Ideal for those seeking an authentic and peaceful fika experience in Gothenburg.",
    address: "Haga Nygata 13, 411 22 Gothenburg",
    hours: "Daily 09:00-18:00",
    website: "https://www.kringlan.se/",
    established: 1984,
    rating: 4.3
  },
  {
    id: 5,
    name: "Ahlströms Konditori",
    image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80",
    description: "Founded in 1901, Ahlströms Konditori is one of the oldest pastry shops in Gothenburg. Its selection of cakes, elegant atmosphere, and tradition make it a must for fika lovers.",
    address: "Kungsgatan 40, 411 19 Gothenburg",
    hours: "Mon-Fri 08:00-18:00, Sat 09:00-16:00, Sun closed",
    website: "https://www.ahlstromskonditori.se/",
    established: 1901,
    rating: 4.5
  },
  {
    id: 6,
    name: "Café Fröken Olsson",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "A cozy café with a charming garden, offering homemade cakes and a relaxing atmosphere. Perfect for a quiet fika in the city center.",
    address: "Vasagatan 11, 411 24 Gothenburg",
    hours: "Mon-Fri 09:00-18:00, Sat-Sun 10:00-17:00",
    website: "https://www.frokenolsson.se/",
    established: 1987,
    rating: 4.4
  },
  {
    id: 7,
    name: "Café Santo Domingo",
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=600&q=80",
    description: "Known for its excellent coffee and Latin American pastries, Café Santo Domingo offers a vibrant and friendly atmosphere for fika lovers.",
    address: "Linnégatan 2, 413 04 Gothenburg",
    hours: "Mon-Fri 08:00-18:00, Sat-Sun 09:00-17:00",
    website: "https://www.cafesantodomingo.se/",
    established: 2008,
    rating: 4.5
  },
  {
    id: 8,
    name: "Café Viskan",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?auto=format&fit=crop&w=600&q=80",
    description: "Located by the river, Café Viskan is famous for its scenic views and delicious pastries. A great spot for a relaxing fika with friends.",
    address: "Viskastrandsgatan 5, 504 30 Borås (near Gothenburg)",
    hours: "Daily 09:00-19:00",
    website: "https://www.cafeviskan.se/",
    established: 1999,
    rating: 4.4
  },
  {
    id: 9,
    name: "Café Berlin",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "A modern café with a European touch, offering specialty coffee and homemade cakes. Popular among young locals and tourists.",
    address: "Sveagatan 10, 413 14 Gothenburg",
    hours: "Mon-Fri 08:00-18:00, Sat-Sun 09:00-17:00",
    website: "https://www.cafeberlin.se/",
    established: 2012,
    rating: 4.3
  },
  {
    id: 10,
    name: "Café Tintin",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "A quirky café inspired by the famous comic character, offering a playful atmosphere and a wide selection of pastries and drinks.",
    address: "Linnégatan 16, 413 04 Gothenburg",
    hours: "Daily 09:00-20:00",
    website: "https://www.cafetintin.se/",
    established: 2010,
    rating: 4.2
  },
  {
    id: 11,
    name: "Café Ethel",
    image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80",
    description: "A small, family-run café known for its friendly service and homemade Swedish cakes. A hidden gem for fika enthusiasts.",
    address: "Storgatan 22, 411 38 Gothenburg",
    hours: "Mon-Fri 08:00-17:00, Sat 09:00-15:00, Sun closed",
    website: "https://www.cafeethel.se/",
    established: 1995,
    rating: 4.6
  },
  {
    id: 12,
    name: "Café Kafé Marmelad",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "A lively café with a bohemian vibe, offering organic pastries and fair-trade coffee. Popular for its music events and creative crowd.",
    address: "Mariagatan 17, 414 71 Gothenburg",
    hours: "Mon-Fri 08:00-18:00, Sat-Sun 09:00-17:00",
    website: "https://www.kafemarmelad.se/",
    established: 2006,
    rating: 4.4
  },
  {
    id: 13,
    name: "Café Dirty Records",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    description: "A unique café and record store, perfect for music lovers who want to enjoy fika surrounded by vinyl and good vibes.",
    address: "Andra Långgatan 4, 413 03 Gothenburg",
    hours: "Mon-Fri 10:00-18:00, Sat 11:00-16:00, Sun closed",
    website: "https://www.dirtyrecords.se/",
    established: 2002,
    rating: 4.5
  },
  {
    id: 14,
    name: "Café Bar Centro",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "A stylish café with Italian influences, offering excellent espresso and pastries. Known for its minimalist design and quality service.",
    address: "Vallgatan 20, 411 16 Gothenburg",
    hours: "Mon-Fri 07:30-18:00, Sat-Sun 09:00-17:00",
    website: "https://www.barcentro.se/",
    established: 2007,
    rating: 4.5
  },
  {
    id: 15,
    name: "Café Le Petit",
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=600&q=80",
    description: "A French-inspired café with a cozy atmosphere, offering croissants, baguettes, and delicious coffee. Perfect for a European-style fika.",
    address: "Södra Vägen 32, 412 54 Gothenburg",
    hours: "Mon-Fri 08:00-18:00, Sat-Sun 09:00-16:00",
    website: "https://www.lepetit.se/",
    established: 2011,
    rating: 4.4
  }
];
