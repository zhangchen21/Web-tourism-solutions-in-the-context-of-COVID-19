<template>
    <div class="more">
        <h1>更多信息您可以关注以下站点</h1>
        <br>
        <div class="word">如果您期望自主的了解关于天气、新冠疫情情况以及搭配自己的服饰，我们为您挑选了以下内容供您浏览</div>
        <br><br><br>
        <div class="content">
            <div class="abstract">
                <i class="el-icon-eleme symbol"></i>
                <div>天气预报查询</div>
                <div>疫情实时大数据报告</div>
                <div>更多旅游景点查询</div>
                <br><br><br>
                <i class="el-icon-user symbol"></i>
                <div>少女风的3种打开方式</div>
                <div>耐看高级的文艺清冷风适合你吗？</div>
                <div>低调的文艺学院风好学易上手</div>
                <div>穿出法式风情</div>
                <div>黄皮穿什么显白？</div>
            </div> 
            <div class="list">
                <div><a href="http://www.weather.com.cn/forecast/" target="_blank">http://www.weather.com.cn/forecast/</a></div>
                <div><a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner" target="_blank">https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner</a></div>        
                <div><a href="https://www.cncn.com/jingdian/" target="_blank">https://www.cncn.com/jingdian/</a></div>
                <br><br><div class="blank"></div>
                <div><a href="https://mp.weixin.qq.com/s/HVeEnknImAcsoYAZ9ifaSg" target="_blank">https://mp.weixin.qq.com/s/HVeEnknImAcsoYAZ9ifaSg</a></div>
                <div><a href="https://mp.weixin.qq.com/s/1SrGmQHbeytyaopSV7JDYw" target="_blank">https://mp.weixin.qq.com/s/1SrGmQHbeytyaopSV7JDYw</a></div>
                <div><a href="https://mp.weixin.qq.com/s/G-JY2VZZEfjXOkGLNxHwnA" target="_blank">https://mp.weixin.qq.com/s/G-JY2VZZEfjXOkGLNxHwnA</a></div>
                <div><a href="https://mp.weixin.qq.com/s/yD9Z68DjTKRHO9AzVmJLAg" target="_blank">https://mp.weixin.qq.com/s/yD9Z68DjTKRHO9AzVmJLAg</a></div>
                <div><a href="https://mp.weixin.qq.com/s/qmERBtnEvzIcnhPNTEkkEQ" target="_blank">https://mp.weixin.qq.com/s/qmERBtnEvzIcnhPNTEkkEQ</a></div>
            </div>
        </div>
        <Foot/>
    </div>
</template>

<script>
import Foot from "./Foot.vue"

export default {
    name: "More",
    components: {
        Foot,
    },
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .more {
        font-family: "Microsoft YaHei";
        box-sizing: border-box;
        list-style: none;               
        width: 100vw;
        padding-top: 20vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .more h1 {
        margin-top: 1vh;
        text-align: center;
    }
    .more .word {
        width: 60vw;
        font-weight: 100;
        text-align: center;
    }
    .more .content {
        height: 60vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-weight: 100;
        font-size: 1.1rem;
    }
    .more .list {
        padding-top: 2.8rem;
        margin-left: 3rem;
    }
    .blank {
        height: 3.9rem;
    }
    .symbol {
        font-size: 3rem;
    }
    a:link,a:visited {
        text-decoration: none;
        color: darkslategrey;
        font-size: 1.2rem;
    }       
    a:hover {
        color: blue;
    }
 
</style>