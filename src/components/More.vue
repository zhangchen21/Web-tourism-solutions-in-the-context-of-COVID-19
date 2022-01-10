<template>
    <div class="more">
        <h2>更多信息请关注以下站点</h2>
        <el-divider></el-divider>
        <ul>
            <li><strong>天气预报查询</strong></li>
            <li><a href="http://www.weather.com.cn/forecast/" target="_blank">http://www.weather.com.cn/forecast/</a></li>
            <li><strong>疫情实时大数据报告</strong></li>
            <li><a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner" target="_blank">https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner</a></li>
            <li><strong>更多旅游景点查询</strong></li>
            <li><a href="https://www.cncn.com/jingdian/" target="_blank">https://www.cncn.com/jingdian/</a></li>
            <li><strong>穿搭笔记推荐</strong></li>
            <li>少女风的3种打开方式<br><a href="https://mp.weixin.qq.com/s/HVeEnknImAcsoYAZ9ifaSg" target="_blank">https://mp.weixin.qq.com/s/HVeEnknImAcsoYAZ9ifaSg</a></li>
            <li>耐看高级的文艺清冷风适合你吗？<br><a href="https://mp.weixin.qq.com/s/1SrGmQHbeytyaopSV7JDYw" target="_blank">https://mp.weixin.qq.com/s/1SrGmQHbeytyaopSV7JDYw</a></li>
            <li>低调的文艺学院风好学易上手<br><a href="https://mp.weixin.qq.com/s/G-JY2VZZEfjXOkGLNxHwnA" target="_blank">https://mp.weixin.qq.com/s/G-JY2VZZEfjXOkGLNxHwnA</a></li>
            <li>穿出法式风情<br><a href="https://mp.weixin.qq.com/s/yD9Z68DjTKRHO9AzVmJLAg" target="_blank">https://mp.weixin.qq.com/s/yD9Z68DjTKRHO9AzVmJLAg</a></li>
            <li>黄皮穿什么显白？<br><a href="https://mp.weixin.qq.com/s/qmERBtnEvzIcnhPNTEkkEQ" target="_blank">https://mp.weixin.qq.com/s/qmERBtnEvzIcnhPNTEkkEQ</a></li>
        </ul>
    </div>   
</template>

<script>
export default {
    name: "More",
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    a,a:link,a:visited {
        text-decoration: none;
        color: darkslategrey;
    }
    .more {
        font-family: "Microsoft YaHei";
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;      
        background: url("../assets/more/svg.png") no-repeat;          
        width: 100vw;
        height: 92vh;
        margin-top: 8vh;
        padding-top: 1vh;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .more h2 {
        margin-top: 1vh;
        margin-left: 5vw;
    }
    .more li {
        margin-top: 1vh;
        font-size: 3vh;
        margin-left: 5vw;
    }
    .more li a {
        margin-left: 3vw;
        font-size: 1.3rem;
    }
    .more li a:hover {
        color: rgb(22, 22, 129);
    }
</style>