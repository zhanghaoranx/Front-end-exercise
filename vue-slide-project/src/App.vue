<template>
  <div class="container">
    <div v-slide-in :key="n" v-for="n in 10" class="item">{{ n }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.container {
  margin: 1em auto;
  width: 80%;
}
.item {
  width: 100%;
  margin: 5vw 0;
  border-radius: 5px;
  display: flex;
  color: #fff;
  aspect-ratio: 2/1;
  justify-content: center;
  align-items: center;
  font-size: 10vw;
  background: #ecd078;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  &:nth-child(2n) {
    background: #42b983;
  }
  &:nth-child(3n) {
    background: #66c7f4;
  }
  &:nth-child(5n) {
    background: #c02942;
  }
}
</style>
