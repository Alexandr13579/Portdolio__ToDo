<template>
    <aside class="aside"
    :class="{ 'swap__menu' : swap, 'openLitle': openLitle }">
        <div class="logo"><span class="material-symbols-outlined">person</span></div>
        <div class="button-swap__menu"
            @mouseenter ="openLitle = true" 
            @mouseleave ="openLitle = false">
            <button 
            type="button"
            class="btn__swap btn__laptop"
            @click="swap = !swap"
            @touchstart="swapFunc"
            >
                <span class="material-symbols-outlined btn">double_arrow</span>
            </button>
        </div>
        <div class="menu__list">
            <router-link to="/">
                <span class="material-symbols-outlined">cottage</span>
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
            <router-link to="/News">
                <span class="material-symbols-outlined">newspaper</span>
                <span class="text">News</span>
            </router-link>
        </div>
    </aside>
</template>

<script>
import { Ref } from 'vue';
export default {
    name: 'my-header',
    data () {
        return {
            swap: false,
            openLitle: false
        }
    },
    methods: {
        swapFunc() {
            this.openLitle = false;
            this.swap = !this.swap;
        },
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
        padding: 16px;
        
        color: #EFECE7;
        transition: width .3s ease-out;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;

        &.openLitle{
        width: 70px;

    }

        .logo{
            margin: 16px 0px 16px 0px;  
            span{
                font-size: 32px;
            }
        }

        .button-swap__menu{
            position: relative;
            top: 0;
            margin-bottom: 32px;
            transition: all ease-out .3s;
            cursor: pointer;

            .btn__swap{
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
            align-items: flex-start;      
            
            a{
                margin-bottom: 17px;
                display: flex;
                align-items: center;
                text-align: center;
                cursor: pointer;
                transition: all ease-out .3s;

                
                &:hover{
                    .material-symbols-outlined, .text{
                        color: #A38970;
                        transition: all ease-out .3s;

                    }
                }
            }
            a.router-link-active{
        
                .material-symbols-outlined, .text{
                    transition: all ease-out .3s;
                    color: #A38970;
                }
}
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
                transition: all .2s ease-out;
            }
        }

        &.swap__menu{
            width: 300px;

            &.openLitle{
                width: 300px;

            }
            .button-swap__menu{
            top: - 50px;
            align-self: flex-end;
            transform: rotate(180deg);

            .btn__swap{
                span{

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
                font-size: 24px;
                transform: translate(0px);
            }
        }
        }
    }

    @media (max-width: 420px) {
    .aside{
        width: 50px;
        padding: 11px;

        .logo{
            margin: 16px 0px 16px 0px;  
            span{
                font-size: 28px;
            }
        }

        .button-swap__menu{
            .btn__swap{
                span{
                    font-size: 22px;
                }
            }
        }
        .menu__list{
            a{
                width: 24px;
            }
            .material-symbols-outlined{
                font-size: 24px;
            }
        }
    }
}

// @media (max-width: 500px) {
//     .btn__laptop{
//         display: none;
//     }
// }

// @media (min-width: 500px) {
//     .btn__mobile{
//         display: none;
//     }
// }
</style>