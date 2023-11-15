<template>
  <main><AppHero /></main>
</template>

<script>
import AppHero from "./AppHero.vue";
export default {
  components: {
    AppHero,
  },
};
</script>

<style lang="scss" scoped>
main {
  border: 2px solid magenta;
}
</style>
