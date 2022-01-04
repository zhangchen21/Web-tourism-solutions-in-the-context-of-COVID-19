<template>
    <nav class="nav">
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <router-link to="/BeforeLog" id="nav-a-3">登录</router-link>
                <div id="choseCity">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{thisCity}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="西安"><router-link to="/Xian">西安</router-link></el-dropdown-item>
                            <el-dropdown-item command="北京">北京</el-dropdown-item>
                            <el-dropdown-item command="上海">上海</el-dropdown-item>
                            <el-dropdown-item command="青岛">青岛</el-dropdown-item>
                            <el-dropdown-item command="张家界">张家界</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
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
            thisPage: 0,
            thisCity: "西安"
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
        },
        handleCommand(command) {
            this.thisCity = command;
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
    /* opacity: 0; */
}
.nav-menu{
    justify-content: space-between;
    align-items: center;
}
.nav .nav-menu .nav-brand {
    display: flex;
    align-items: center;
}
.nav .nav-menu .nav-brand a{
    font-size: 2rem;
    font-family: var(--Lexend);
    padding: 0.5rem 1.5rem 0.5rem 0rem;
    display: block;
}
.el-dropdown-link {
    cursor: pointer;
    font-size: 1.1rem;
}
.el-icon-arrow-down {
    font-size: 12px;
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
