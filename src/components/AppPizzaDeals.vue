<template>
  <div class="deals">
    <div class="deals-image">
      <img src="../assets/img/h3-img-5a.jpg" alt="" />
    </div>
    <div class="deals-menu">
      <div class="menu">
        <p class="menu-header">Made with love</p>
        <h2 class="menu-title">Delish Pizza Deals</h2>
        <ul>
          <li
            v-for="(deal, index) in deals"
            :class="{ underline: index !== deals.length - 1 }"
          >
            <div class="deal-date">
              <p class="deal-day">{{ deal.day }}</p>
              <p class="deal-month">{{ deal.month }}</p>
            </div>
            <h4 class="deal-name">{{ deal.name }}</h4>
            <p class="deal-location">
              <fa-icon :icon="['fas', 'location-dot']" /> {{ deal.location }}
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
    deals() {
      return this.store.deals;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.deals {
  display: flex;
  flex-direction: row-reverse;
  .deals-image,
  .deals-menu {
    width: 50%;
  }
  .deals-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .deals-menu {
    padding: 100px;
    background-image: url(../assets/img/cielostellato.png);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu {
      color: white;
      .menu-header {
        color: $orange-roughy;
        text-transform: uppercase;
        margin-bottom: 12px;
        font-size: 12px;
      }
      .menu-title {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 32px;
      }
    }
    li {
      position: relative;
      padding-bottom: 10px;
      margin-bottom: 22px;
      &.underline {
        border-bottom: 2px dotted $tussock;
      }
      .deal-date {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 20px;
        font-weight: 800;
        color: $tall-poppy;
        text-align: center;
        .deal-day {
          font-size: 42px;
          line-height: 40px;
        }
        .deal-month {
          line-height: 6px;
          color: white;
        }
      }
      .deal-name,
      .deal-location {
        padding-left: 50px;
      }
      .deal-name {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 2px;
      }
      .deal-location {
        color: $tall-poppy;
      }
    }
    h2,
    h4 {
      text-transform: uppercase;
    }
  }
}
</style>
