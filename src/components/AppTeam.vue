<template>
  <div class="gallery">
    <div v-for="(member, index) in gallery" class="gallery-item">
      <div class="member-info">
        <p class="member-name">{{ member.name }}</p>
        <p class="member-role">{{ member.role }}</p>
        <div class="member-social">
          <fa-icon :icon="['fab', 'instagram']" />
          <fa-icon :icon="['fab', 'twitter']" />
          <fa-icon :icon="['fab', 'facebook']" />
        </div>
      </div>
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
      return this.store.team;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.gallery {
  display: grid;
  grid-auto-flow: column;
  .gallery-item {
    position: relative;
    aspect-ratio: 1;
    background: radial-gradient(circle, #c8c8c8 10%, transparent 11%),
      radial-gradient(circle at bottom left, #c8c8c8 5%, transparent 6%),
      radial-gradient(circle at bottom right, #c8c8c8 5%, transparent 6%),
      radial-gradient(circle at top left, #c8c8c8 5%, transparent 6%),
      radial-gradient(circle at top right, #c8c8c8 5%, transparent 6%);
    background-size: 1em 1em;
    background-color: #ffffff;
    opacity: 1;
    .member-info {
      position: absolute;
      inset: 5%;
      color: white;
      background-color: $orange-roughy;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .member-name {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
      }
      .member-role {
        margin-bottom: 8px;
      }
      .member-social * {
        margin: 4px;
      }
    }
  }
  .gallery-img {
    cursor: pointer;
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
