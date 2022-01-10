<template>
    <div id="app">
        <div class="Nav"><Nav></Nav></div>
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
@font-face {
    font-family: Abel;
    src: url('./fonts/Abel/Abel-Regular.ttf');
}
html,body{
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
:root{
    --Abel:'Abel',cursive;
}
#app {
    font-family: var(--Abel);
}
.Nav {
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 999;
}
</style>
