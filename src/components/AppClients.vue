<template>
  <div class="clients">
    <div class="client-logo" v-for="(client, index) in clients">
      <img :src="clientLogo(index)" :alt="client.name + index + client.path" />
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
    clientLogo(i) {
      return this.store.getImageUrl(this.clients[i].path);
    },
  },
  computed: {
    clients() {
      return this.store.clients;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.clients {
  background-color: $pampas;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    display: block;
    // width: 150px;
    // border: 2px solid;
  }
}
</style>
