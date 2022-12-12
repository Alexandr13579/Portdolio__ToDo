<template lang="">
    <aside class="aside"
    :class="{ 'swap__menu' : swap, 'openLitle': openLitle }">
        <div class="logo"><span class="material-symbols-outlined">person</span></div>
        <div class="button-swap__menu" @click="swapMenu">
            <button>
                <span @mouseover="openLitleSwap" @mouseout="openLitleSwap" class="material-symbols-outlined btn">double_arrow</span>
            </button>
        </div>
        <div class="menu__list">
            <router-link to="/">
                <span class="material-symbols-outlined">home</span>
                <span class="text">Main</span>
            </router-link>
            <router-link to="/Weather">
                <span class="material-symbols-outlined">thermostat</span>
                <span class="text">Weather</span>
            </router-link>
            <router-link to="/ToDo">
                <span class="material-symbols-outlined">checklist</span>
                <span class="text">ToDo</span>
            </router-link>
            <router-link to="/">
                <span class="material-symbols-outlined">open_with</span>
                <span class="text">DaTo</span>
            </router-link>
        </div>

    </aside>
</template>
<script>
export default {
    data () {
        return {
            swap: false,
            openLitle: false
        }
    },
    methods: {
        swapMenu() {
            this.swap = !this.swap
        },
        openLitleSwap() {
            this.openLitle = !this.openLitle
        }
    }
}
</script>
<style lang="scss" scoped>
    .aside{
        width: 64px;
        background-color: #394C60;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        padding: 10px;
        
        color: #EFECE7;
        transition: width .3s ease-out;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;

        &.openLitle{
        width: 70px;
    }

        .logo{
            margin: 16px 0px 16px 0px;
            span{
                font-size: 40px;
            }
        }

        .button-swap__menu{
            position: relative;
            top: 0;
            margin-bottom: 32px;
            transition: all ease-out .3s;
            cursor: pointer;

            button{
                background: none;
                outline: none;
                appearance: none;                

                span{
                    transform: translate(6px, 0px);
                    color: #FFFFFF;
                    font-size: 24px;
                    display: block;
                    transition: all ease-out .3s;

                    &:hover{
                        transform: translate(11px, 0px);
                        color: #A38970;

                    }
                }
            }
        }
        .menu__list{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5px; 
            align-items: flex-start;          
            .material-symbols-outlined{
                color: #FFFFFF;
                font-size: 28px;
                text-align: center;
            }
            .text {
                margin-left: 10px;

                opacity: 0;
                visibility: hidden;
                font-size: 0px;
                color: #FFFFFF;

                transform: translate(-15px);
                transition: opacity .3s ease-out, transform .3s ease-out;
            }

            a{
                margin-bottom: 17px;
                display: flex;
                align-items: center;
                cursor: pointer;
                
                &:hover{
                    .material-symbols-outlined, .text{
                        color: #A38970;
                    }
                }
            }
        }

        &.swap__menu{
            width: 300px;
            animation: wrapAside none;
            .button-swap__menu{
            top: - 50px;
            align-self: flex-end;
            transform: rotate(180deg);

            button{
                background: none;
                outline: none;
                appearance: none;

                span{
                    color: #FFFFFF;
                    font-size: 24px;
                    animation: wrapButton none;

                    &:hover{
                        transform: translate(11px, 0px);
                        color: #A38970;
                    }

                }
            }
        }
            .menu__list{
            .text {
                opacity: 1;
                visibility: visible;
                font-size: 22px;
                transform: translate(0px);
            }
        }
        }
    }
    a.router-link-active{
       a{
        .material-symbols-outlined, .text{
                        color: #A38970;
        }
       }
}
</style>