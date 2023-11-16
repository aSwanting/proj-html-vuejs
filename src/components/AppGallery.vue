<template>
  <div class="gallery">
    <div v-for="(img, index) in gallery" class="gallery-item">
      <img class="eye" src="../assets/svg/svg-5.svg" alt="" />
      <img class="gallery-img" :src="galleryImg(index)" alt="" />
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    galleryImg(i) {
      return store.getImageUrl(this.gallery[i].path);
    },
  },
  computed: {
    gallery() {
      return this.store.gallery;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-auto-flow: column;
  .gallery-item {
    position: relative;
    height: 200px;
    margin: 6px 4px;
    background: radial-gradient(circle, #c8c8c8 10%, transparent 11%),
      radial-gradient(circle at bottom left, #c8c8c8 5%, transparent 6%),
      radial-gradient(circle at bottom right, #c8c8c8 5%, transparent 6%),
      radial-gradient(circle at top left, #c8c8c8 5%, transparent 6%),
      radial-gradient(circle at top right, #c8c8c8 5%, transparent 6%);
    background-size: 1em 1em;
    background-color: #ffffff;
    opacity: 1;

    .eye {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      transform: translate(-50%, -50%);
    }
  }

  .gallery-img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    &:hover {
      opacity: 0;
    }
  }
}
</style>
