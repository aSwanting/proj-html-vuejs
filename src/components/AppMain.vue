<template>
  <main>
    <AppHero />
    <AppGallery />
  </main>
</template>

<script>
import AppHero from "./AppHero.vue";
import AppGallery from "./AppGallery.vue";
export default {
  components: {
    AppHero,
    AppGallery,
  },
};
</script>

<style lang="scss" scoped></style>
