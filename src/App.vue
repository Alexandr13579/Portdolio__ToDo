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
  height: 100vh;
  background-color: #1A1A1A;
  font-family:Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
}

main{
  margin-left: 64px;
}

.container{
  position: relative;
  z-index: 2;
  padding: 0px 10px;
  width: 100%;
  margin: 0 auto;
}

</style>
