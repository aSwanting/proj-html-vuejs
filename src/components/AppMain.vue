<template>
  <main>
    <AppHero />
    <AppGallery />
    <AppTestimonials />
  </main>
</template>

<script>
import AppHero from "./AppHero.vue";
import AppGallery from "./AppGallery.vue";
import AppTestimonials from "./AppTestimonials.vue";
export default {
  components: {
    AppHero,
    AppGallery,
    AppTestimonials,
  },
};
</script>

<style lang="scss" scoped></style>
