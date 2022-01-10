<template>
  <div id="footer">
    <div id="empty"></div>
    <div class="rowBox">
        <div>运营</div>
        <div @click="gotoCodeUrl">前往代码仓库</div>
        <div>
            联系我们<br><br>
            Tel: 13309277942 <br>
            E-mail: 244551528@qq.com
        </div>
        <div id="lastBox">贡献指南</div>        
    </div>
    <div class="columnBox">
            <p>关注我们</p>
            <p>隐私政策</p>
            <p>Cookie</p>
            <p>政策条款与条件</p>
            <p id="lastP">品牌准则</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "footer",
    methods: {
        gotoCodeUrl() {
            window.open("https://github.com/zhangchen21/Web-tourism-solutions-in-the-context-of-COVID-19")
        }
    }
}
</script>

<style scoped>
    #footer {
        width: 101vw;
        height: 30vh;
        background-color: #104f55;
        color: white;
        font-family: "Microsoft YaHei";
        font-weight: 100;
        font-size: 0.85rem;
    }
    #empty {
        width: 100vw;
        height: 5vh;

    }
    .rowBox {
        width: 86vw;
        display: flex;
        flex-direction: row;  
        margin: 0 auto;      
    }
    .rowBox div {
        padding-top: 1.5vh;
        height: 12vh;
        width: 20vw;      
        margin-left: 2vw;  
        cursor: pointer;
    }
    .rowBox div:not(#lastBox) {
        border-right: white 0.05rem solid;
    }    
    .columnBox {
        width: 84vw;
        margin: 0 auto;
        margin-top: 2.5vh;
        border-top: rgb(160, 158, 158) 0.001rem solid;
        display: flex;
        flex-direction: row;
    }
    .columnBox p {
        cursor: pointer;
        margin-top: 3vh;       
    }
    .columnBox p:not(#lastP) {
        margin-right: 3vw;

    }
    .columnBox #lastP {
        margin-left: 50vw;
    }
</style>