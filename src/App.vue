<template>
    <div id="app">
        <Nav/>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>
/********** 字体 *********/
@font-face {
    font-family: Abel;
    src: url('./fonts/Abel/Abel-Regular.ttf');
}
html,body{
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
}
/******************全局变量******************/
:root{
    --Abel:'Abel',cursive;
}
/*****************布局*****************/
#app {
    font-family: var(--Abel);
}
</style>
