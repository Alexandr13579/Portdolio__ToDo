<template lang="">
        <div class="info__no">
            <p class="info__no-text">Weather forecast will be shown here</p>
            <div class="info__no-btn"><span class="material-symbols-outlined">expand_more</span></div>
        </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    .info__no{
        padding: 30px 0px;
        font-size: 21px;

        @keyframes infoNo__Btn {
            0%{
                transform: translate(0px, 0px);
            }
            50%{
                transform: translate(0px, 20px);
            }
            100%{
                transform: translate(0px, 0px);
            }
        }

        &-btn{
            animation: infoNo__Btn ease 1s 3;

            span{
                font-size: 35px;
            }
        }
    }

    .noInfoAnimation-enter-active,
    .noInfoAnimation-leave-active {
    transition: opacity 0.5s ease;
    }

    .noInfoAnimation-enter-from,
    .noInfoAnimation-leave-to {
    opacity: 0;
    }
</style>