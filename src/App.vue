<template>
  <AppHeader :nav="navMenu" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import store from "./store";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    navMenu() {
      return this.store.nav;
    },
  },
};
</script>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/partials/reset";
</style>
