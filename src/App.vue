<template>
  <div class="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import "@/assert/reset.css";

#app {
  width: 100%;
  height: 100%;
  background-color: #1A1A1A;
  font-family:Arial, Helvetica, sans-serif;
  position: relative;
  box-sizing: border-box;
}

.container{
  position: relative;
  z-index: 2;
  width: 50%;
  margin: auto;
}

</style>
