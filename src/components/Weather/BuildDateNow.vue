<template lang="">
    <div class="info__date">
        {{ dateBuilder() }}
    </div>
</template>
<script>
export default {
    props: {
        dateBuilder: {
            type: Function,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .info__date {
            font-size: 32px;
            font-weight: 400;
            font-style: italic;
        }
</style>