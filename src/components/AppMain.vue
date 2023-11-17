<template>
  <main>
    <AppHero />
    <div class="app-body">
      <AppGallery />
      <AppTestimonials />
      <AppSpecials />
      <AppCTA />
      <AppTeam />
      <AppClients />
      <AppPizzaMenu />
      <AppPizzaDeals />
      <AppReservation />
    </div>
  </main>
</template>

<script>
import AppHero from "./AppHero.vue";
import AppGallery from "./AppGallery.vue";
import AppTestimonials from "./AppTestimonials.vue";
import AppSpecials from "./AppSpecials.vue";
import AppCTA from "./AppCTA.vue";
import AppTeam from "./AppTeam.vue";
import AppClients from "./AppClients.vue";
import AppPizzaMenu from "./AppPizzaMenu.vue";
import AppPizzaDeals from "./AppPizzaDeals.vue";
import AppReservation from "./AppReservation.vue";

export default {
  components: {
    AppHero,
    AppGallery,
    AppTestimonials,
    AppSpecials,
    AppCTA,
    AppTeam,
    AppClients,
    AppPizzaMenu,
    AppPizzaDeals,
    AppReservation,
  },
};
</script>

<style lang="scss" scoped>
.app-body * {
  margin-block: 6px;
  margin-inline: auto;
  // max-width: 1200px;
}
</style>
