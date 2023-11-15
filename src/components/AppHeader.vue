<template>
  <header>
    <nav class="container">
      <button class="nav-left btn-primary">
        <a :href="navButton.url">{{ navButton.name }}</a>
      </button>
      <ul class="nav-menu">
        <li
          :class="{ active: index === activeHeaderIndex }"
          @click="activeHeaderIndex = index"
          v-for="(item, index) in navMenu"
          :style="{ order: index }"
        >
          <a :href="item.url">{{ item.name }}</a>
        </li>
        <li class="logo"><img :src="navLogoPath" :alt="navLogo.name" /></li>
      </ul>
      <ul class="nav-right">
        <li v-for="(item, index) in navRight">
          <a href="#">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import store from "../store";

export default {
  props: {
    nav: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      store,
      activeHeaderIndex: 0,
    };
  },
  computed: {
    navMenu() {
      return this.store.nav.navMenu;
    },
    navRight() {
      return this.store.nav.navRight;
    },
    navButton() {
      return this.store.nav.navButton;
    },
    navLogo() {
      return this.store.nav.navLogo;
    },
    navLogoPath() {
      console.log(this.navLogo.path);
      return store.getImageUrl(this.navLogo.path, "png");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: black;
  color: rgba(255, 255, 255, 0.6);
  padding: 20px;
  font-weight: 600;
  text-transform: uppercase;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-menu,
  .nav-left,
  .nav-right {
    display: flex;
    align-items: center;
    li:hover,
    li.active {
      color: white;
    }
  }

  .nav-menu {
    gap: 50px;
  }

  .nav-right {
    gap: 15px;
  }
  .logo {
    order: 2;
    max-width: 124px;
  }
}
</style>
