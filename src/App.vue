<template>
    <div id="app">
        <v-header></v-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
     </div>
</template>

<script>
import header from './components/header/header'

export default {
    components: {
        'v-header': header
    }
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
