<template>
  <div class="menu">
    <div class="menu-text">
      <p class="menu-header">Choose your flavor</p>
      <h2 class="menu-title">The best pizza in town</h2>
      <p class="menu-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rem
        optio fugiat corporis quaerat officiis!
      </p>
    </div>
    <div class="menu-pizzas" ref="pizzaScroll">
      <div
        class="pizza"
        v-for="(pizza, index) in pizzaMenu"
        @click="toggleCart(index)"
      >
        <div v-show="pizza.inCart === true" class="badge">Sold</div>
        <img :src="pizzaImg(index)" :alt="pizza.name" />
        <p class="pizza-name">{{ pizza.name }}</p>
        <p class="pizza-price">${{ pizza.price.toFixed(2) }}</p>
      </div>
    </div>
    <div class="scroll">
      <img
        class="left"
        @click="pizzaScroll('left')"
        src="../assets/svg/svg-4.svg"
        alt=""
      />
      <img
        class="right"
        @click="pizzaScroll('right')"
        src="../assets/svg/svg-4.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      store,
      scrollBy: 0,
    };
  },
  methods: {
    toggleCart(index) {
      this.pizzaMenu[index].inCart = !this.pizzaMenu[index].inCart;
    },
    pizzaImg(i) {
      return store.getImageUrl(this.pizzaMenu[i].path);
    },
    pizzaScroll(direction) {
      const pizzaScroll = this.$refs.pizzaScroll;
      if (direction === "left") this.scrollBy = -pizzaScroll.scrollWidth / 3;
      if (direction === "right") this.scrollBy = pizzaScroll.scrollWidth / 3;
      console.log(pizzaScroll.scrollLeft, pizzaScroll.scrollWidth);

      pizzaScroll.scrollBy({
        top: 0,
        left: this.scrollBy,
        behavior: "smooth",
      });
    },
  },
  computed: {
    pizzaMenu() {
      return this.store.pizzaMenu;
    },
  },
  mounted() {
    this.pizzaMenu.forEach((pizza) => {
      pizza.inCart = false;
    });
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.menu {
  padding: 60px 0;
  overflow: hidden;
  .menu-text {
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
    & > *:not(:last-child) {
      text-transform: uppercase;
    }
    .menu-header {
      color: $orange-roughy;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .menu-title {
      color: $mine-shaft;
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 18px;
    }
    .menu-description {
      font-size: 12px;
      opacity: 0.8;
      margin-bottom: 50px;
    }
  }
  .menu-pizzas {
    display: flex;
    align-items: flex-start;
    padding: 30px;
    overflow: auto;
    gap: 80px;
    .pizza {
      position: relative;
      text-align: center;
      cursor: pointer;
      flex-shrink: 0;
      overflow: visible;
      .badge {
        background-color: $orange-roughy;
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        aspect-ratio: 1;
        border-radius: 50%;
        font-size: 10px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      img {
        width: 150px;
        display: block;
        margin-bottom: 18px;
        transition: 200ms all;
        &:hover {
          transform: scale(102%);
        }
      }
      .pizza-name {
        color: $tussock;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 16px;
      }
      .pizza-price {
        color: $orange-roughy;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 14px;
      }
    }
  }
}

.scroll {
  display: flex;
  justify-content: center;
  gap: 10%;
  padding: 20px;
  img {
    cursor: pointer;
    transition: 200ms all;
    width: 30px;
  }
  .left {
    transform: rotate(-90deg);
    &:hover {
      transform: rotate(-90deg) scale(110%);
    }
  }
  .right {
    transform: rotate(90deg);
    &:hover {
      transform: rotate(90deg) scale(110%);
    }
  }
}
</style>
