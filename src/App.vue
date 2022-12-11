<template>
  <div class="app">
      <myHeader />
      <router-view></router-view>
  </div>
</template>

<script>
import myHeader from '@/components/My-Header.vue'
    
  export default {
    components: {
      myHeader
    }
  }
</script>

<style lang="scss">
@import "@/assert/reset.css";

.app {
  width: 100vw;
  height: 100vh;
  background-color: #1A1A1A;
  font-family:Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  display: flex;
}

.container{
  position: relative;
  z-index: 2;
  width: 70%;
  margin: 0 auto;
}

</style>
