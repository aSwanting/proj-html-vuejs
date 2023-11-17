<template>
  <div class="clients">
    <img
      v-for="(client, index) in clients"
      :src="clientLogo(index)"
      :alt="client.name + index + client.path"
    />
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
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
    // border: 2px solid;
  }
}
</style>
