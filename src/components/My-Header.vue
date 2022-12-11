<template lang="">
    <aside class="aside">
        <div class="wrapper">
            <div class="logo"><span class="material-symbols-outlined">cruelty_free</span></div>
        <div class="swap__menu">
            <button>
                <span class="material-symbols-outlined">double_arrow</span>
            </button>
        </div>
        <div class="menu__list">
            <router-link to="/">
                <span class="material-symbols-outlined">home</span>
                <!-- <span class="text">Main</span> -->
            </router-link>
            <router-link to="/Weather">
                <span class="material-symbols-outlined">thermostat</span>
                <!-- <span class="text">Weather</span> -->
            </router-link>
            <router-link to="/ToDo">
                <span class="material-symbols-outlined">checklist</span>
                <!-- <span class="text">ToDo</span> -->
            </router-link>
            <router-link to="/">
                <span class="material-symbols-outlined">star</span>
                <!-- <span class="text">DaTo</span> -->
            </router-link>
        </div>

        </div>
    </aside>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
span {
    cursor: pointer;
}
    .aside{
        width: 80px;

        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #040432;
            color: #FFFFFF;
            padding: 5px;
            min-height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99;
        }

        .logo{
            margin: 16px 0px 16px 0px;
            span{
                font-size: 40px;
            }

        }

        .swap__menu{
            position: relative;
            top: 0;
            margin-bottom: 32px;

            button{
                background: none;
                outline: none;
                appearance: none;

                span{
                    color: #FFFFFF;
                    font-size: 24px;
                    margin-left: -10px;
                }
            }
        }

        .menu__list{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            :only-child {
                margin-bottom: 15px;
                color: #FFFFFF;
                font-size: 28px;
            }
        }
    }
</style>