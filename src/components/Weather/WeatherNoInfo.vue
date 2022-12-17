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
        
        position: absolute;
        top: 155px;
        left: 0;
        right: 0;
        bottom: 0;

        .info__no-text{
            font-size: 21px;
            color: #394C60;
        }

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
        @media (max-width: 520px) {
            top: 140px;
            padding: 0px 10px;

            .info__no-text{
            font-size: 19px;
        }
        }
    }
</style>