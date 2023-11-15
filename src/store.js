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

  // Methods
  getImageUrl(path) {
    return new URL(`./assets/${path}`, import.meta.url).href;
  },
});

export default store;
