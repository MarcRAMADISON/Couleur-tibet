export const carteData = [
  {
    image: "/assets/burger.png",
    title: "ENTRÉES",
  },
  {
    image: "/assets/poulet.png",
    title: "PLATS",
  },
  {
    image: "/assets/jus.png",
    title: "ACCOMPAGNEMENTS",
  },
  {
    image: "/assets/burger.png",
    title: "ACCOMPAGNEMENTS",
  },
  {
    image: "/assets/poulet.png",
    title: "ACCOMPAGNEMENTS",
  },
  {
    image: "/assets/jus.png",
    title: "ACCOMPAGNEMENTS",
  },
];

export const galeries = [
  "/assets/galerie1.png",
  "/assets/galerie2.png",
  "/assets/galerie1.png",
  "/assets/galerie2.png",
  "/assets/galerie1.png",
  "/assets/galerie2.png",
];

export const avisList = [
  {
    image:'/assets/client1.png',
    name:"The Online Food Hub",
    description:"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  },
  {
    image:'/assets/client1.png',
    name:"The Online Food Hub",
    description:"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  }, {
    image:'/assets/client1.png',
    name:"The Online Food Hub",
    description:"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  }
];

export const heureOuvertures=[
  {
    day:'Lundi',
    heure:'12:00 - 23:30'
  },
  {
    day:'Mardi',
    heure:'12:00 - 23:30'
  },
  {
    day:'Mercredi',
    heure:'12:00 - 23:30'
  },
  {
    day:'Jeudi',
    heure:'12:00 - 23:30'
  },
  {
    day:'Vendredi',
    heure:'12:00 - 23:30'
  },
  {
    day:'Samedi',
    heure:'12:00 - 23:30'
  },
  {
    day:'Dimanche',
    heure:'12:00 - 23:30'
  }
]

export const menuList=[
  {
    name:'ENTRÉES',
    menus:[
      {
        name:'Tsam Thuk',
        price:7.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:"Soupe de farine d'orge grillée avec gingembre",
        price:5.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:'Salade Poulet',
        price:7.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:'Salade crevettes',
        price:8.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:"Soupe de farine d'orge grillée avec gingembre, Poulet ou Bœuf",
        price:11.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      }
    ]
  },
  {
    name:'PLATS',
    menus:[
      {
        name:'Tsam Thuk',
        price:2.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:"Soupe de farine d'orge grillée avec gingembre",
        price:5.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:'Salade Poulet',
        price:7.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:'Salade crevettes',
        price:10.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:"Soupe de farine d'orge grillée avec gingembre, Poulet ou Bœuf",
        price:7.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      }
    ]
  },
  {
    name:'ACCOMPAGNEMENTS',
    menus:[
      {
        name:'Tsam Thuk',
        price:7.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:"Soupe de farine d'orge grillée avec gingembre",
        price:7.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:'Salade Poulet',
        price:8.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:'Salade crevettes',
        price:4.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      },
      {
        name:"Soupe de farine d'orge grillée avec gingembre, Poulet ou Bœuf",
        price:7.00,
        description:"Soupe de farine d'orge grillée avec gingembre"
      }
    ]
  }
]

export const handleNavigation = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};
