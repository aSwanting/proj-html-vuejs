<template>
  <div class="hero">
    <div class="hero-nav prev">prev</div>
    <div class="hero-nav next">next</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.hero {
  height: 500px;
  background-color: $cod-gray;
  background-image: url(../assets/img/cielostellato.PNG);
  background-size: cover;
  position: relative;
}
</style>
