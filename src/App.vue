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
}

main{
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
  main{
    // margin-left: 54px;
    width: 100%;
  }

  .container{
    padding: 0px 10px;
  }
}
</style>
