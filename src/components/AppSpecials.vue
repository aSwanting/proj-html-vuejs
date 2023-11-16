<template>
  <div class="specials">
    <div class="specials-image">
      <img src="../assets/img/h1-img-7n.png" alt="" />
    </div>
    <div class="specials-menu">
      <div class="menu">
        <h2 class="menu-title">Specials</h2>
        <p class="menu-subtitle">
          Take a look at our special combo meals, one for every occasion!
        </p>
        <ul>
          <li v-for="item in menu">
            <p class="item-price">{{ item.price }}</p>
            <h4 class="menu-item">{{ item.name }}</h4>
            <p class="item-description">
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
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
  computed: {
    menu() {
      return this.store.specialsMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.specials {
  display: flex;
  .specials-image,
  .specials-menu {
    width: 50%;
    padding: 100px;
  }
  .specials-image {
    background-image: url(../assets/img/h1-img-4.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 60%;
    }
  }
  .specials-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    .menu {
      color: $mine-shaft;
      .menu-title {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 6px;
      }
      .menu-subtitle {
        font-size: 18px;
        margin-bottom: 24px;
        opacity: 0.8;
      }
    }
    li {
      position: relative;
      margin-bottom: 22px;
      .item-price {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 20px;
        font-weight: 800;
        color: $tall-poppy;
      }
      .menu-item {
        font-size: 20px;
        font-weight: 800;
        padding-left: 36px;
        margin-bottom: 2px;
      }
      .item-description {
        opacity: 0.8;
        padding-left: 36px;
      }
    }
    h2,
    h4 {
      text-transform: uppercase;
    }
  }
}
</style>
