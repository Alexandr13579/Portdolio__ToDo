<template>
    <div @change="selectedOption" class="select__wrapper">
        <ul class="select__list"  @mouseover="eeesho = true" @mouseout="eeesho = false">
            <MyOptionCustom  :options="options" />
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MySelectCustom',
    props: {
        options: {
            type: Array,
        },
    },
    data() {
        return {
            selected: '',
            eeesho: false
        }
    },
    methods: {
        selectedOption() {
            this.$emit('selectedOption', this.selected)
        },
        chek(event) {
            this.select = event.target.value
        }
    }
}
</script>

<style lang="scss" scoped>
    .select {
  &__wrapper {}
  &__selected {}
  &__list {}
}

</style>