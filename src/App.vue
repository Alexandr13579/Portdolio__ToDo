<template>
  <div class="app">
    <my-header />
    <div class="body">
      <router-view></router-view>
      <!-- <my-footer /> -->
    </div>
  </div>
</template>

<script>

  export default {
  }
</script>

<style lang="scss">
@import "@/assert/reset.css";

.app {
  height: 100%;
  min-height: 100vh;
  background-color: #1A1A1A;
  color: rgba(255, 255, 255, 0.9);
  font-family:Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  display: flex;
}

.body{
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  width: 100%;
}

.container{
  position: relative;
  z-index: 2;
  padding: 0px 15px;
  width: 100%;
  margin: 0 auto;
}


@media (max-width: 420px) {
  .body{
    margin-left: 50px;
  }

  .container{
    padding: 0px 10px;
  }
}
</style>
