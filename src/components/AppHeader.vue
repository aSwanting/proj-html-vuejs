<template>
  <header>
    <nav class="container">
      <button class="nav-left btn-primary">
        <a :href="navButton.url">{{ navButton.name }}</a>
      </button>
      <ul class="nav-menu">
        <li
          class="nav-item"
          :class="{ active: index === activeHeaderIndex }"
          @click="activeHeaderIndex = index"
          v-for="(item, index) in navMenu"
          :style="{ order: index }"
        >
          <a :href="item.url"
            ><img class="icon" :src="iconPath(index)" />{{ item.name }}</a
          >
        </li>
        <li class="logo"><img :src="navLogoPath" :alt="navLogo.name" /></li>
      </ul>
      <ul class="nav-right">
        <li class="nav-item" v-for="(item, index) in navRight" :key="index">
          <a href="#"
            ><img class="icon" :src="navRightPath(index)" />{{ item.name }}</a
          >
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
  methods: {
    iconPath(i) {
      return store.getImageUrl(this.navMenu[i].path);
    },
    navRightPath(i) {
      return store.getImageUrl(this.navRight[i].path);
    },
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
      return store.getImageUrl(this.navLogo.path);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: black;
  color: rgba(255, 255, 255);
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
    gap: 50px;
    .icon {
      filter: invert(1);
    }
  }

  .nav-menu {
    .nav-item {
      opacity: 0.7;
      position: relative;
      .icon {
        position: absolute;
        top: 4px;
        left: -24px;
        width: 18px;
        opacity: 0;
      }
      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
        & .icon {
          opacity: 1;
        }
      }
    }
  }

  .nav-right {
    .nav-item {
      position: relative;
      .icon {
        position: absolute;
        top: -2px;
        left: -35px;
        height: 18px;
        width: 36px;
        object-fit: contain;
      }
    }
  }
  .logo {
    order: 2;
    max-width: 124px;
  }
}
</style>
