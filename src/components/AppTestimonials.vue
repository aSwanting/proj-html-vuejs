<template>
  <div class="testimonials">
    <div class="testimonials-nav prev" @click="updateTestimonialIndex(-1)">
      prev
    </div>
    <div class="testimonials-nav next" @click="updateTestimonialIndex(+1)">
      next
    </div>
    <div class="testimonials-inner">
      <svg
        class="quote-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
        />
      </svg>
      <div class="testimonials-quote">
        {{ testimonials[testimonialIndex].quote }}
      </div>
      <div class="testimonials-source">
        {{ testimonials[testimonialIndex].source }}
      </div>
      <svg
        v-for="(dot, index) in 3"
        :class="['dot', { active: index === testimonialIndex }]"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      store,
      testimonialIndex: 0,
    };
  },
  methods: {
    updateTestimonialIndex(i) {
      this.testimonialIndex += i;
      if (this.testimonialIndex > 2) this.testimonialIndex = 0;
      if (this.testimonialIndex < 0) this.testimonialIndex = 2;
    },
  },
  computed: {
    testimonials() {
      return this.store.testimonials;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.testimonials {
  height: 200px;
  background-color: $pampas;
  background-image: url(../assets/img/h3-testimonials-bckgrnd.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  .testimonials-inner {
    max-width: 600px;
    .testimonials-quote {
      color: $mine-shaft;
      font-size: 24px;
      font-weight: bold;
      line-height: 1em;
    }
    .testimonials-source {
      color: $orange-roughy;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .quote-icon {
      fill: $tussock;
      transform: scale(1.5) rotate(180deg);
      margin-bottom: 10px;
    }
    .dot {
      width: 6px;
      margin: 3px;
      fill: $tussock;
      opacity: 0.5;
      &.active {
        opacity: 1;
      }
    }
  }
  .testimonials-nav {
    background-color: white;
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
}
</style>
