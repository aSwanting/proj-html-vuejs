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
  .hero-nav {
    background-color: $pampas;
    color: $orange-roughy;
    text-transform: uppercase;
    padding-top: 6px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    font-size: 12px;
    font-weight: 600;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    &.prev {
      left: calc(0% - 8px);
      transform: translate(-50%, -50%) rotate(90deg);
    }
    &.next {
      left: calc(100% + 8px);
      transform: translate(-50%, -50%) rotate(-90deg);
    }
  }
}
</style>
