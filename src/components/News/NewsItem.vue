<template lang="">
    <li 
    class="list__item">
        <div class="item__content">
            <header class="item__header">
                <h3 class="header__publications-title">{{item.source.name}}</h3> 
                <p class="header__time">{{ item.publishedAt }}</p>
            </header>
            <main class="item__main">
                <p class="main__title">{{ item.title }}</p>
                <p class="main__content">{{ item.description }}</p>
                <div class="Item__link"><p @click="clickUrl">{{ url }}</p></div>
            </main>
        </div>
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
            url: this.item.url
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
        background: #FAFCFC;
        box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
        margin-bottom: 10px;
    }
}
.item {
    &__content {}
    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 18px;
    }
    &__main {

    }
}
.header {
    &__publications-title {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #292929;
    }
    &__time {}
}
.main {
    &__title {
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        color: #292929;
        margin-bottom: 5px;
    }
    &__content {
        font-weight: 400;
        font-size: 13px;
        line-height: 140%;
        color: #292929;
    }
}
.Item {
    &__link {}
}


</style>