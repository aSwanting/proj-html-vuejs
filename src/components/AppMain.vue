<template>
  <main>
    <AppHero />
    <AppGallery />
    <AppTestimonials />
    <AppSpecials />
    <AppImagePuzzle />
    <AppTeam />
  </main>
</template>

<script>
import AppHero from "./AppHero.vue";
import AppGallery from "./AppGallery.vue";
import AppTestimonials from "./AppTestimonials.vue";
import AppSpecials from "./AppSpecials.vue";
import AppImagePuzzle from "./AppImagePuzzle.vue";
import AppTeam from "./AppTeam.vue";
export default {
  components: {
    AppHero,
    AppGallery,
    AppTestimonials,
    AppSpecials,
    AppImagePuzzle,
    AppTeam,
  },
};
</script>

<style lang="scss" scoped>
main * {
  margin-block: 6px;
}
</style>
