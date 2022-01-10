<template>
    <div id="about">
        <div class="introduction">
            <h1>我们为何要旅行</h1>
            <div id="words">生命就是一场旅行。而关于旅行的意义，每个人都有自己的答案。要一辈子缩在一个角落里吗？还是和我们一起换上新衣，探寻人生的意义，拥抱更大的世界。着一身深绿色的连衣纱裙遇见葱葱草木？换上皮衣夹克去邂逅日落最后一丝光影？裹一件温暖的呢子大衣感受傍晚原野里的每一次心跳？无论何时、无论何地，和我们一起盛装出席</div>
            <div class="cards">
                <div class="card"><h1>01</h1><span>自我</span></div>
                <div class="card"><h1>02</h1><span>世界</span></div>
                <div class="card"><h1>03</h1><span>未来</span></div>
            </div>
        </div>
        <div class="container">
            <h1>我们的团队</h1>
            <div>
                <h3>张晨</h3>
                <el-divider></el-divider>
                <p>西安交通大学计算机科学与技术专业硕士在读</p>
                <p>研究方向：计算机视觉，曾获西安交通大学优秀本科生、校园一等奖学金等</p>
                <el-button type="success" plain>了解更多</el-button>
            </div>
            <div>
                <h3>赵蕾</h3>
                <el-divider></el-divider>
                <p>西安交通大学计算机科学与技术专业硕士在读</p> 
                <p>研究方向：数字图像水印技术，曾获陕西省优秀毕业生称号，西安电子科技大学优秀毕业生标兵称号，国家奖学金等</p>
                <el-button type="success" plain>了解更多</el-button>
            </div>
            <div>
                <h3>伍虹颖</h3>
                <el-divider></el-divider>
                <p>西安交通大学电子科学与技术专业硕士在读</p>
                <p>研究方向：超高效率电化学储能。曾获西安交通大学优秀共产党员、特等学业奖学金等</p>
                <el-button type="success" plain>了解更多</el-button>
            </div>
        </div>
        <Foot id="footer"></Foot>
    </div>
</template>

<script>
import Foot from './Foot.vue'

export default {
    name: "About",
    components: {
        Foot
    },
}
</script>

<style scoped>
#about{
    margin-top: 10vh;
    font-family: "Microsoft YaHei";
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 101vw;
    overflow-x: hidden;
    overflow-y: auto;
}
.introduction {
    width: 101vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.introduction h1 {
    text-align: center;
}
.introduction #words {
    width: 60vw;
    font-weight: 100;
}
.introduction .cards {
    display: flex;
    flex-direction: row;
}
.introduction .cards .card {
    width: 15vw;
    height: 40vh;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 100;
}
.introduction .cards .card h1 {
    font-size: 1.2rem;
}
.introduction .cards .card:first-child {
    background: url("../assets/about/bg1.jpg");
    background-size: cover;
}
.introduction .cards .card:nth-child(2) {
    background: url("../assets/about/bg2.jpg");
    background-size: cover;
}
.introduction .cards .card:nth-child(3) {
    background: url("../assets/about/bg3.jpg");
    background-size: cover;
}
.container {
    width: 100vw;
    height: 120vh;
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfb;
}
.container h1 {
    text-align: center;
}
.container div {
    width: 60vw;
    font-weight: 100;
    margin-top: 3vh;
}
.container div a {
    text-decoration: none;
}
</style>