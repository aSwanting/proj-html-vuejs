<template>
  <main>
    <AppHero />
    <AppGallery />
    <AppTestimonials />
    <AppSpecials />
  </main>
</template>

<script>
import AppHero from "./AppHero.vue";
import AppGallery from "./AppGallery.vue";
import AppTestimonials from "./AppTestimonials.vue";
import AppSpecials from "./AppSpecials.vue";
export default {
  components: {
    AppHero,
    AppGallery,
    AppTestimonials,
    AppSpecials,
  },
};
</script>

<style lang="scss" scoped></style>
