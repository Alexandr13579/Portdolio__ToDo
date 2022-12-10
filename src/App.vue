<template>
  <div class="app">
      
      <router-view></router-view>
  </div>
</template>

<script>
import my_header from '@/components/My-Header.vue'

</script>

<style lang="scss">
@import "@/assert/reset.css";

#app {
  width: 100%;
  height: 100%;
  background-color: #1A1A1A;
  font-family:Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  // overflow: hidden;
}

.container{
  position: relative;
  z-index: 2;
  width: 70%;
  margin: 0 auto;
}

</style>
