<template lang="">
    <li 
    class="list__item">
        <header class="item__header">
            <h3 class="header__publications-title" v-if="item.source.name != null ? autor = item.source.name : autor = 'anonymous' ">{{ autor }}</h3> 
            <p class="header__time">{{ item.publishedAt }}</p>
        </header>
        <main class="item__main">
            <div class="item__main-content">
                <p class="main__title">{{ item.title }}</p>
                <p class="main__content">{{ item.description }}</p>
            </div>
            <div class="item__main-link"><my-btnSearhPush @click="clickUrl">Link to source</my-btnSearhPush></div>
        </main>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            url: this.item.url,
            autor: ''
        }
    },
    methods: {
        clickUrl() {
            window.open(this.url)
        }
    }
    
}
</script>

<style lang="scss" scoped>
.list {
  &__item {
    display: flex;
    flex-direction: column;
    margin-bottom: 13.5px;
    padding: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    background-color: rgba($color: #333333, $alpha: 0.5);
    border-radius: 8px;
    font-size: 18px;
    font-weight: 400px;

  }
}
.item {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px; 
  }
  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
}
.header {
  &__publications-title {
    font-weight: 600;
  }
  &__time {
    font-style: italic;
  }
}
.item {
  &__main-link {
    flex: 0 0 auto;
    margin-left: 10px;
  }
}
.main {
  &__title {
    font-weight: 500;
    font-size: 19px;
  }
  &__content {
    font-style: italic;
    font-weight: 300;
  }
}


</style>