<template>
  <AppHeader :nav="nav" />
  <AppMain />
  <AppFooter :footer="footerInfo" />
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
</style>
