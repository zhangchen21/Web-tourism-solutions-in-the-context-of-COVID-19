<template>
    <nav class="nav">
         <!-- :class="ifNowIsCityPage" -->
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <div @click="changeToLoginPage"><router-link :to="judge"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></router-link></div>
                <div id="choseCity">
                    <el-dropdown @command="handleCommand" v-show="ifNowIsCityPage">
                        <span class="el-dropdown-link" id="navCity">
                            {{thisCity}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="西安"><router-link to="/Xian">西安</router-link></el-dropdown-item>
                            <el-dropdown-item command="厦门"><router-link to="/Xiamen">厦门</router-link></el-dropdown-item>
                            <el-dropdown-item command="上海"><router-link to="/Xian">上海</router-link></el-dropdown-item>
                            <el-dropdown-item command="青岛"><router-link to="/Xian">青岛</router-link></el-dropdown-item>
                            <el-dropdown-item command="张家界"><router-link to="/Xian">张家界</router-link></el-dropdown-item>
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
            thisCity: "西安",
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser
        },
        judge() {
            return ((this.$store.state.isLoginFlag == "true") ? "/Log" : "/BeforeLog");
        },
        ifNowIsCityPage() {
            return this.$store.state.ifHomeIsCity
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
            this.$store.commit('ChangeIfHomeIsCity', false);
        },
        handleCommand(command) {
            this.thisCity = command;
        },
        changeToLoginPage() {
            this.thisPage = 3;
            this.$store.commit('ChangeIfHomeIsCity', false);
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
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
    padding: 0 1rem;
    overflow: hidden;
    color: var(--gray);
    height: 8vh;
    vertical-align: sub;
    background-color: #f8f8f8;
}
#navCity {
    font-size: 1.2rem;
    color: var(--midnight);
    font-weight:bold
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
.thispage{
    background-color: var(--midnight);
}
.thispage a{
    color: #fff;
}
.city {
    background-color: transparent;
    
}
.city a, .city #navCity {
    color: var(--white);
    font-weight: 100;
}
.city .thispage {
    background-color: transparent;
}
</style>
