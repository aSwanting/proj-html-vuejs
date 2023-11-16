import { reactive } from "vue";

const store = reactive({
  // Properties
  nav: {
    navButton: {
      name: "Order online",
      url: "#",
    },
    navRight: [
      {
        name: "Cart",
        url: "#",
        path: "svg/svg-1.svg",
      },
      {
        name: "Search",
        url: "#",
        path: "svg/svg-12.svg",
      },
    ],
    navMenu: [
      {
        name: "Home",
        url: "#",
        path: "svg/svg-0.svg",
      },
      {
        name: "Pages",
        url: "#",
        path: "svg/svg-0.svg",
      },
      {
        name: "Menu",
        url: "#",
        path: "svg/svg-0.svg",
      },
      {
        name: "Event",
        url: "#",
        path: "svg/svg-0.svg",
      },
      {
        name: "Blog",
        url: "#",
        path: "svg/svg-0.svg",
      },
      {
        name: "Landing",
        url: "#",
        path: "svg/svg-0.svg",
      },
    ],
    navLogo: {
      name: "Don Peppe",
      path: "img/h5-logo-divided-header.png",
      url: "#",
    },
  },
  hero: [
    {
      path: "img/cielostellato.png",
      id: 0,
    },
    {
      path: "img/h3-rev-img-1.png",
      id: 1,
    },
    {
      path: "img/h3-rev-img-2.png",
      id: 2,
    },
    {
      path: "img/h3-rev-img-3.png",
      id: 3,
    },
    {
      path: "img/h3-rev-img-4.png",
      id: 4,
    },
    {
      path: "img/h3-rev-img-5.png",
      id: 5,
    },
    {
      path: "img/h3-rev-img-6.png",
      id: 6,
    },
  ],
  gallery: [
    { name: "gallery", path: "img/h3-img-1.jpg" },
    { name: "gallery", path: "img/h3-img-2.jpg" },
    { name: "gallery", path: "img/h3-img-3.jpg" },
    { name: "gallery", path: "img/h3-img-4.jpg" },
  ],
  testimonials: [
    {
      quote:
        "Forget the Trendy pizza shops, this hidden spot makes the best New York-style pizza slice in Naples",
      source: "Washington Post 2018",
    },
    {
      quote:
        "Move over trendy pizza places, this spot nails New York-style slices in Naples!",
      source: "Pizza Insider 2023",
    },
    {
      quote:
        "In Naples, forget the trends - this hidden gem masters New York-style pizza!",
      source: "Slice Aficionado 2023",
    },
  ],
  specialsMenu: [
    {
      name: "Combo Small",
      description: "Classic New York slice with a side salad and drink.",
      price: "$10",
    },
    {
      name: "Combo Medium",
      description: "Pepperoni and sausage pizza with garlic knots and a drink.",
      price: "$20",
    },
    {
      name: "Combo Large",
      description: "Half-and-half pizza, garlic breadsticks, and soda.",
      price: "$30",
    },
  ],
  // Methods
  getImageUrl(path) {
    return new URL(`./assets/${path}`, import.meta.url).href;
  },
});

export default store;
