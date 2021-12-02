<template>
    <div id="app">
        <Nav/>
        <div id="home">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Nav from './components/Nav.vue'
// import Main from './components/Main.vue'
// import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Nav,
    // Main,
    // About,
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
    overflow-x: hidden;
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
