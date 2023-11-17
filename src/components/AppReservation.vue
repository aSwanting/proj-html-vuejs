<template>
  <div class="reservation">
    <div class="input-group">
      <input type="text" placeholder="1 Person" />
      <p class="label">Powered by OpenTable</p>
      <fa-icon class="icon" :icon="['fas', 'user-group']" />
    </div>

    <span>for</span>

    <div class="input-group">
      <input type="text" placeholder="11/9/2020" />
      <fa-icon class="icon" :icon="['fas', 'calendar']" />
    </div>

    <span>at</span>

    <div class="input-group">
      <input type="text" placeholder="7:00 pm" />
      <fa-icon class="icon" :icon="['fas', 'clock']" />
    </div>

    <button class="btn-primary">book a table</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.reservation {
  padding: 80px 0px;
  background-image: url(../assets/img/h3-background-img-3.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 50px;
  input,
  button {
    width: 160px;
    line-height: 35px;
    padding: 3px 10px;
  }
  button,
  span {
    text-transform: uppercase;
  }
  span {
    text-align: center;
    width: 30px;
    margin-inline: -35px;
  }
  .input-group {
    position: relative;
  }
  .icon {
    color: $tussock;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    font-size: 12px;
    opacity: 0.8;
  }
  .label {
    position: absolute;
    font-size: 12px;
    top: 105%;
  }
}
</style>
