<template>
  <footer>
    <div class="footer-left">
      <div class="restaurants">
        <h2>Find our restaurants</h2>
        <ul>
          <li v-for="restaurant in restaurants">
            <p>{{ restaurant.address1 }}</p>
            <p>{{ restaurant.address2 }}</p>
            <p>{{ restaurant.phone }}</p>
          </li>
        </ul>
      </div>
      <div class="hours">
        <h2>Working Hours</h2>
        <ul>
          <li v-for="info in workingHours">
            <h3>
              {{ info.day }} <span v-show="info.day === 'Saturday'">*</span>
            </h3>
            <p :class="{ closed: info.day === 'Monday' }">{{ info.hours }}</p>
          </li>
          <li>
            <div class="socials">
              <h3>Follow us:</h3>
              <ul>
                <li>
                  <a href="#"
                    ><fa-icon class="icon" :icon="['fab', 'instagram']"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><fa-icon class="icon" :icon="['fab', 'twitter']"
                  /></a>
                </li>
                <li>
                  <a href="#">
                    <fa-icon class="icon" :icon="['fab', 'facebook']"
                  /></a>
                </li>
                <li>
                  <a href="#">
                    <fa-icon class="icon" :icon="['fab', 'linkedin']"
                  /></a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="quote">
        <p>
          The Don Peppe Crew first and foremost values an authentic, well baked
          slice of pizza.
        </p>
      </div>
      <div class="footer-left-bottom">
        <p>Created with love by <span>Qode Interactive</span></p>
        <img src="../assets/img/footer-bottom-img.png" alt="" />
      </div>
    </div>
    <img class="footer-right" src="../assets/img/footer-img-1.jpg" alt="" />
  </footer>
</template>

<script>
export default {
  props: {
    footer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurants: this.footer.restaurants,
      workingHours: this.footer.workingHours,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
footer {
  display: flex;
  color: #ffffffcc;
  font-size: 10px;
  height: 400px;

  h2,
  h3 {
    text-transform: uppercase;
    color: $tussock;
  }
  h2 {
    font-size: 14px;
    margin-bottom: 16px;
  }
  h3 {
    margin-bottom: 2px;
  }
}
.footer-left {
  width: 50%;
  padding: 50px;
  background-image: url(../assets/img/cielostellato.png);
  display: flex;
  flex-wrap: wrap;
  .restaurants,
  .hours,
  .quote {
    flex-basis: calc(100% / 3);
    height: 1px;
  }
  .restaurants {
    li {
      margin-bottom: 20px;
    }
  }
  .hours {
    .closed {
      color: $orange-roughy;
    }
    li {
      margin-bottom: 20px;
      span {
        color: $orange-roughy;
      }
      .socials {
        display: flex;
        gap: 6px;
        ul {
          display: flex;
          gap: 6px;
        }
        .icon {
          font-size: 10px;
        }
      }
    }
  }
  .quote {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
  }
}
.footer-right {
  width: 50%;
  object-fit: cover;
}
.footer-left-bottom {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  p {
    font-size: 10px;
  }
  span {
    color: green;
  }
  img {
    width: 70px;
  }
}
</style>
