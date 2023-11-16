<template>
  <div class="hero" :style="{ backgroundImage: `url(${fetchBackgroundImg})` }">
    <div class="hero-nav prev" @click="updateSliceIndex(-2)">prev</div>
    <div class="hero-nav next" @click="updateSliceIndex(+2)">next</div>
    <img class="slice-bg" :src="updateHeroImgBg" />
    <img class="slice" :src="updateHeroImg" />
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      store,
      sliceBgIndex: 1,
      sliceIndex: 2,
    };
  },
  methods: {
    updateSliceIndex(i) {
      this.sliceBgIndex += i;
      if (this.sliceBgIndex > 5) this.sliceBgIndex = 1;
      if (this.sliceBgIndex < 1) this.sliceBgIndex = 5;
      this.sliceIndex += i;
      if (this.sliceIndex > 6) this.sliceIndex = 2;
      if (this.sliceIndex < 2) this.sliceIndex = 6;
    },
  },
  computed: {
    hero() {
      return this.store.hero;
    },
    fetchBackgroundImg() {
      return this.store.getImageUrl(this.hero[0].path);
    },
    updateHeroImgBg() {
      return this.store.getImageUrl(this.hero[this.sliceBgIndex].path);
    },
    updateHeroImg() {
      return this.store.getImageUrl(this.hero[this.sliceIndex].path);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.hero {
  height: 600px;
  background-color: $cod-gray;
  background-size: cover;
  position: relative;
  overflow: hidden;
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
    user-select: none;
    &.prev {
      left: calc(0% - 8px);
      transform: translate(-50%, -50%) rotate(90deg);
    }
    &.next {
      left: calc(100% + 8px);
      transform: translate(-50%, -50%) rotate(-90deg);
    }
  }
  .slice,
  .slice-bg {
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .slice {
    height: 62%;
    top: 60%;
    left: 50%;
  }
  .slice-bg {
    height: 45%;
    top: 55%;
    left: 50%;
  }
}
</style>
