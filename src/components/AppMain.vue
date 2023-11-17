<template>
  <main>
    <AppHero />
    <AppGallery />
    <AppTestimonials />
    <AppSpecials />
    <AppImagePuzzle />
  </main>
</template>

<script>
import AppHero from "./AppHero.vue";
import AppGallery from "./AppGallery.vue";
import AppTestimonials from "./AppTestimonials.vue";
import AppSpecials from "./AppSpecials.vue";
import AppImagePuzzle from "./AppImagePuzzle.vue";
export default {
  components: {
    AppHero,
    AppGallery,
    AppTestimonials,
    AppSpecials,
    AppImagePuzzle,
  },
};
</script>

<style lang="scss" scoped></style>
