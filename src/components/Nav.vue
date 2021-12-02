<template>
    <nav class="nav">
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <a href="#" @click="login">登录</a>
            </div>
            <ul class="nav-items" @click="changePage">
                <li class="nav-link" :class="ifThisPage()[0]">
                    <router-link to="/Main" id="nav-a-0">主页</router-link>
                </li>
                <li class="nav-link" :class="ifThisPage()[1]">
                    <router-link to="/About" id="nav-a-1">关于我们</router-link>
                </li>
                <li class="nav-link" :class="ifThisPage()[2]">
                    <a href="#" @click="login" id="nav-a-2">更多</a>
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
        login(){
            alert("登录界面")
        },
        getMore(){
          alert("更多")
        },
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
}
a{
    text-decoration: none;
    color: var(--gray);
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
    /* background-color: rgba(85, 84, 84, 0.75); */
    background-color: rgb(0, 0, 0); 
    box-shadow: 0px 3px 7px 0px rgb(0 0 0 / 35%);
    padding: 0 1rem;
    overflow: hidden;
    color: var(--gray);

}
.nav-menu{
    justify-content: space-between;
    align-items: center;
}
.nav-brand a{
    color: var(--gray);
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    padding: 1rem 0;
    display: block;
}
.nav-items{
    display: flex;
    justify-content: right;
}
.nav-link{
    padding: 0 1rem;
    font-size: 1.1rem;
}
.thispage a{
    border-bottom: rgb(226, 223, 223) 0.1rem solid;
}
.nav-link:hover a,
.nav-brand:hover a{
    text-shadow: 0 0 10px #69e0ff,0 0 20px #69e0ff,0 0 40px #69e0ff;
}
</style>
