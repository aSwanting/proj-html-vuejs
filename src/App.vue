<template>
  <AppHeader :nav="nav" />
  <AppMain />
  <AppFooter :footer="footerInfo" />
  <div class="top-slice" @click="scrollToTop()">
    <img src="./assets/svg/svg-4.svg" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import store from "./store";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
  computed: {
    nav() {
      return this.store.nav;
    },
    footerInfo() {
      return this.store.footer;
    },
  },
};
</script>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/partials/reset";
.top-slice {
  cursor: pointer;
  position: fixed;
  bottom: 3%;
  right: 2%;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
