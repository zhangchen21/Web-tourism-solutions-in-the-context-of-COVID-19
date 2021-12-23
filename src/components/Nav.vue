<template>
    <nav class="nav">
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <router-link to="/BeforeLog" id="nav-a-3">登录</router-link>
            </div>
            <ul class="nav-items" @click="changePage">
                <li class="nav-link" :class="ifThisPage()[0]">
                    <router-link to="/Main" id="nav-a-0">主页</router-link>
                </li>
                <li class="nav-link" :class="ifThisPage()[1]">
                    <router-link to="/About" id="nav-a-1">关于我们</router-link>
                </li>
                <li class="nav-link" :class="ifThisPage()[2]">
                    <router-link to="/More" id="nav-a-2">更多</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return {
            thisPage: 0
        }
    },
    methods: {
        ifThisPage(){
            let tmp = [];
            for(let i=0; i<3; i++){
                if(i === this.thisPage) tmp[i] = "thispage";
                else tmp[i] = "";
            }
            return tmp;
        },
        changePage(event){
            this.thisPage = Number(event.target.id.substr(6, 1));
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
    --gray:#ccc;
    --midnight:#104f55;
    --white: #fff;
}
a{
    text-decoration: none;
    color: #354954;
    font-weight:bold
}
ul{
    list-style-type: none;
}
.flex-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.nav{
    background-color: #f8f8f8;; 
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
    padding: 0 1rem;
    overflow: hidden;
    color: var(--gray);
    height: 8vh;
}
.nav-menu{
    justify-content: space-between;
    align-items: center;
}
.nav .nav-menu .nav-brand a{
    font-size: 1.6rem;
    font-family: var(--Lexend);
    padding: 0.5rem 0;
    display: block;
}
.nav .nav-menu .nav-items{
    display: flex;
    margin: 0;
}
.nav .nav-menu .nav-items .nav-link{
    padding: 1.3rem 1rem;
    font-size: 1.1rem;
    font-family: var(--Abel);
    position: relative;
}
.thispage, .nav-link:hover{
    background-color: var(--midnight);
}
.thispage a{
    color: #fff;
}
.nav-link:hover a {
    color: #fff;
}
</style>
