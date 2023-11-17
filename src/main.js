import { createApp } from "vue";
import App from "./App.vue";

import "@fontsource-variable/sofia-sans";
import "@fontsource-variable/sofia-sans-condensed";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faFacebook, faTwitter, faLocationDot);

createApp(App).component("fa-icon", FontAwesomeIcon).mount("#app");
