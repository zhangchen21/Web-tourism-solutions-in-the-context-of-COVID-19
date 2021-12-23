<template>
    <div id="about">
        <div class="container">
            <div class="card">
                <div class="content">
                    <h3>张晨</h3>
                    <p>
                        西安交通大学计算机科学与技术专业硕士在读，研究方向：计算机视觉，曾获西安交通大学优秀本科生、校园一等奖学金等
                    </p>
                    <a href="#">了解更多</a>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h3>赵蕾</h3>
                    <p>
                        西安交通大学计算机科学与技术专业硕士在读，研究方向：数字图像水印技术，曾获陕西省优秀毕业生称号，西安电子科技大学优秀毕业生标兵称号，国家奖学金等
                    </p>
                    <a href="#">了解更多</a>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h3>伍虹颖</h3>
                    <p>
                        伍虹颖，西安交通大学电子科学与技术专业硕士在读。研究方向：超高效率电化学储能。曾获西安交通大学优秀共产党员、特等学业奖学金等。
                    </p>
                    <a href="#">了解更多</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
}
</script>

<style scoped>
#about{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
    background-color: #fff;
    overflow: hidden;
}
.container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
}
.container .card{
    width: 280px;
    height: 400px;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    background-color: rgba(255,255,255,0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: rgba(255,255,255,0.5) 1px solid;
    border-left: rgba(255,255,255,0.5) 1px solid;
    backdrop-filter: blur(5px);
    transition: all 0.5s;
}
.container .card:hover {
    transform: scale(1.1);
}
.container .card .content{
    padding: 20px;
    text-align: center;
}
.container .card .content h3{
    font-size: 1.8em;
    color: black;
}
.container .card .content p{
    font-size: 1em;
    font-weight: 300;
    color: blcak;
}
.container .card .content a{
    display: inline-block;
    color: #000;
    text-decoration: none;
    margin-top: 15px;
    font-weight: 500;
    border-radius: 20px;
    background-color: #fff;
    padding: 8px 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}
</style>