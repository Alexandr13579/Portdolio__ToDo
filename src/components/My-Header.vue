<template lang="">
    <header>
        <ul>
            <li><router-link to="/">Main</router-link></li>
            <li><router-link to="/Weather">Weather</router-link></li>
            <li><router-link to="/ToDo">ToDo</router-link></li>
        </ul>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    header{
        width: 15%;
        position: absolute;
        z-index: 2;
        margin-top: 150px;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        // border: 2px solid #4EA8DE;
        color: #4EA8DE;
        border-radius: 15px;
        padding: 10px 20px;

    }

    a{
        color: #4EA8DE;
    }
</style>