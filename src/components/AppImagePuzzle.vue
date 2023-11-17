<template>
  <div class="cta-wrapper">
    <div class="cta-bg top"></div>
    <div class="cta-bg mid"></div>
    <div class="cta-bg bottom"></div>
    <div class="cta-caption">
      <h2>
        Go ahead and <br />
        build your <br />own pizza <br />
        we won't <br />judge!
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cta-wrapper {
  // aspect-ratio: 21/6;
  height: 360px;
  position: relative;
}
.cta-caption {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  h2 {
    color: white;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    line-height: 1em;
  }
}
.cta-bg {
  background-image: url(../assets/img/h3-background-img.jpg);
  background-size: 80%;
  background-position: center;
  object-fit: cover;
}
.cta-bg.top {
  height: 25%;
  background-position-y: 100%;
}
.cta-bg.mid {
  height: 50%;
  background-position-y: 0%;
}
.cta-bg.bottom {
  height: 25%;
  background-position-y: 50%;
}
</style>
