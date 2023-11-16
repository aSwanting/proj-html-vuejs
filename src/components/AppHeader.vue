<template>
  <header>
    <nav class="container">
      <!-- Nav Left Start -->
      <button class="nav-left btn-primary">
        <a :href="navButton.url">{{ navButton.name }}</a>
      </button>
      <!-- Nav Left End -->

      <!-- Nav Menu Start -->
      <ul class="nav-menu">
        <li
          class="nav-item"
          :class="{ active: index === activeHeaderIndex }"
          @click="activeHeaderIndex = index"
          v-for="(item, index) in navMenu"
          :style="{ order: index }"
        >
          <a :href="item.url"
            ><img
              v-show="index === activeHeaderIndex"
              class="icon"
              :src="iconPath(index)"
            />{{ item.name }}</a
          >
        </li>
        <li class="logo" :style="{ order: logoOrder }">
          <img :src="navLogoPath" :alt="navLogo.name" />
        </li>
      </ul>
      <!-- Nav Menu End -->

      <!-- Nav Right Start -->
      <ul class="nav-right">
        <li class="nav-item" v-for="(item, index) in navRight" :key="index">
          <a href="#"
            ><div v-if="item.name === 'Cart'" class="cart-count">
              {{ cartCount }}
            </div>
            <img class="icon" :src="navRightPath(index)" />{{ item.name }}</a
          >
        </li>
      </ul>
      <!-- Nav Right End -->
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
      cartCount: 0,
    };
  },
  methods: {
    iconPath(i) {
      return store.getImageUrl(this.navMenu[i].path);
    },
    navRightPath(i, p) {
      return store.getImageUrl(this.navRight[i].path);
    },
  },
  computed: {
    navMenu() {
      return this.store.nav.navMenu;
    },
    logoOrder() {
      return Math.round(this.navMenu.length / 2 - 1);
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
      return store.getImageUrl(this.navLogo.path);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
header {
  color: rgba(255, 255, 255);
  padding: 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  position: fixed;
  width: 100%;
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
    gap: 40px;
    .icon {
      filter: invert(1);
    }
    .nav-item {
      opacity: 0.8;
      position: relative;
      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
      }
    }
  }

  .nav-menu {
    .logo {
      // order: 2;
      max-width: 160px;
    }
    .icon {
      position: absolute;
      top: 4px;
      left: -24px;
      width: 18px;
    }
  }

  .nav-right {
    .icon {
      position: absolute;
      top: -2px;
      left: -35px;
      height: 18px;
      width: 36px;
      object-fit: contain;
    }
    .cart-count {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -4px;
      left: -41px;
      width: 15px;
      aspect-ratio: 1;
      font-size: 10px;
      border-radius: 50%;
      background-color: white;
      color: $orange-roughy;
    }
  }
}
</style>
