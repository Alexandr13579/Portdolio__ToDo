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
            font-size: 26px;
            font-weight: 400;
            font-style: italic;

            @media (max-width: 520px) {
                font-size: 18px;
            }
        }
</style>