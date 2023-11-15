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
      },
      {
        name: "Search",
        url: "#",
      },
    ],
    navMenu: [
      {
        name: "Home",
        url: "#",
      },
      {
        name: "Pages",
        url: "#",
      },
      {
        name: "Menu",
        url: "#",
      },
      {
        name: "Event",
        url: "#",
      },
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Landing",
        url: "#",
      },
    ],
    navLogo: {
      name: "Don Peppe",
      path: "h5-logo-divided-header",
      url: "#",
    },
  },

  // Methods
  getImageUrl(name, ext) {
    return new URL(`./assets/img/${name}.${ext}`, import.meta.url).href;
  },
});

export default store;
