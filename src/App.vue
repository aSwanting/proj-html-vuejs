<template>
  <AppHeader :nav="nav" />
  <AppMain />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import store from "./store";
export default {
  components: {
    AppHeader,
    AppMain,
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
  },
};
</script>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/partials/reset";
</style>
