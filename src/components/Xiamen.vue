<template>
    <div id="xian" class="city">
        <div class="title">
            <h2>探索该地的隐藏景点和让人叹为观止的风景</h2>
            <h1>再登鼓浪屿  泛舟厦门海</h1>
        </div>
        <div class="Covid">
            <h1><i class="el-icon-zoom-in"></i> 当地疫情情况</h1>
            <Covid v-bind:cityName="cityName"></Covid>
        </div>
        <div class="Weather">
            <h1><i class="el-icon-sunrise"></i> 探索天气</h1>
            <Weather v-bind:cityName="cityName"></Weather>
        </div>   
        <div class="clothes">
            <h1><i class="el-icon-thumb"></i> 穿搭TIPS</h1>
            <Outfit v-bind:tem="tem"></Outfit>
        </div>     
        <div class="attractions">
            <h1><i class="el-icon-map-location"></i> 景点 & 活动</h1>
            <div class="attractionsCards">
                <div class="card">
                    <div class="content">
                        <img src="../assets/厦门/鼓浪屿.jpg" alt="">
                        <div id="text">
                            <h3>鼓浪屿</h3>
                            <p>
                                鼓浪屿，2007年5月8日起被正式批准为国家5A级旅游景区。被国家地理杂志评选为“中国最美五大城区之首”，素有“海上花园”的美称。岛上完好地保留着许多具有中外建筑风格的建筑物，有“万国建筑博览会”之誉。主要旅游景点有日光岩、菽庄花园、海滨浴场、郑成功纪念馆等。
                            </p>
                        </div>
                        <a target="_blank" href="https://baike.baidu.com/item/%E9%BC%93%E6%B5%AA%E5%B1%BF/483700">了解更多</a>
                        <div id="sign0" class="signBtn" @click="changeSign0"><el-button :type="type0" :icon="sign0" circle></el-button></div>    
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <img src="../assets/厦门/南普陀寺.jpg" alt="">
                        <div id="text">
                            <h3>南普陀寺</h3>
                            <p>
                                南普陀寺，位于厦门市思明区，始建于唐末五代，初称泗洲院。北宋僧文翠改建称无尽岩。元废。明初复建，更名普照寺。此后数百年来，经历代主持景峰、省己、喜参诸和尚多次重修扩建，至民国初年，已构成三殿七堂俱全的禅寺格局。
                            </p>
                        </div>
                        <a target="_blank" href="https://baike.baidu.com/item/%E5%8D%97%E6%99%AE%E9%99%80%E5%AF%BA/1180153">了解更多</a>
                        <div id="sign0" class="signBtn" @click="changeSign1"><el-button :type="type1" :icon="sign1" circle></el-button></div>    
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <img src="../assets/厦门/天竺山森林公园.jpg" alt="">
                        <div id="text">
                            <h3>天竺山森林公园</h3>
                            <p>
                                天竺山森林公园，位于厦门市海沧区东孚镇，园内有森林植物200多种、野生动物40多种，珍贵野生动物有金钱豹、林麝、果子狸、狐狸、豹猫、锦鸡、青羊、杜鹃等。园内人文景观60余处，其中古迹6处，景点58个。
                            </p>
                        </div>
                        <a target="_blank" href="https://baike.baidu.com/item/%E5%A4%A7%E5%94%90%E8%8A%99%E8%93%89%E5%9B%AD/5709">了解更多</a>
                        <div id="sign0" class="signBtn" @click="changeSign2"><el-button :type="type2" :icon="sign2" circle></el-button></div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <img src="../assets/厦门/五缘湾湿地公园.jpg" alt="">
                        <div id="text">
                            <h3>五缘湾湿地公园</h3>
                            <p>
                                五缘湾湿地公园，位于厦门市湖里区五缘湾，占地85公顷，是厦门最大的公园，也是最大的湿地生态园区。具有水栖和湿生植物带、水生植物群落、芦苇及湿地区域植物群落。
                            </p>
                        </div>    
                        <a target="_blank" href="https://baike.baidu.com/item/%E4%BA%94%E7%BC%98%E6%B9%BE%E6%B9%BF%E5%9C%B0%E5%85%AC%E5%9B%AD/17393053">了解更多</a>
                        <div id="sign0" class="signBtn" @click="changeSign3"><el-button :type="type3" :icon="sign3" circle></el-button></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="food">
            <h1><i class="el-icon-food"></i> 美食 & 小吃</h1>
            <div class="foodCards">
                <div class="bigImg">
                    <div class="imgMask">
                        <img src="../assets/厦门/沙茶面.png" alt="">
                        <div class="mask"><span>沙茶面</span><br>独特的咸水油面放进开水锅里烫熟，最后淋上一直在锅里炖煮的高汤，放点蔬菜，加入沙茶酱，这就是厦门独有的味道</div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/厦门/姜母鸡.png" alt=""><div class="mask"><span>姜母鸡</span>高品质的番鸭，搭配老姜，慢慢的温火炖煮，美味回味无穷</div></div>
                        <div class="imgMask"><img src="../assets/厦门/蚵仔煎.png" alt=""><div class="mask"><span>蚵仔煎</span>口感香脆，肉馅香滑，新鲜的蚵仔，做出来的海蛎煎丰盛多汁</div></div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/厦门/花生汤.png" alt=""><div class="mask"><span>花生汤</span>汤色乳白，甘甜爽口，黄生仁酥烂不碎，入口即化</div></div>
                        <div class="imgMask"><img src="../assets/厦门/土笋冻.png" alt=""><div class="mask"><span>土笋冻</span>色香俱佳的传统风味小吃，它富含天然的胶质，是厦门最独有的美味</div></div>
                    </div>
                </div>
                <div class="bigImg">
                    <div>
                        <div class="imgMask"><img src="../assets/厦门/五香条.png" alt=""><div class="mask"><span>五香条</span>用豆皮裹上剁碎精肉，加上葱包成春卷状，炸成焦黄，十分诱人</div></div>
                        <div class="imgMask"><img src="../assets/厦门/四果汤.png" alt=""><div class="mask"><span>四果汤</span>清甜的水果，加上豆类杂果，盖上冰和糖水，就是正宗的四果汤</div></div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/厦门/面线糊.png" alt=""><div class="mask"><span>面线糊</span>面线煮成糊状，搭配各种卤料下去熬，高汤是整道美食的灵魂</div></div>
                        <div class="imgMask"><img src="../assets/厦门/烧肉粽.png" alt=""><div class="mask"><span>烧肉粽</span>以虾米和芋头粒为原料，配上虾仁和猪肉，糯米用竹叶包好即可享用</div></div>
                    </div>
                    <div class="imgMask"><img src="../assets/厦门/芋包.png" alt=""><div class="mask"><span>芋包</span><br>芋包看着像是包子的形状，它不是普通包子用面粉做的，而是以芋为皮里面包馅料做成的一种特色小吃。芋包表面会淋上葱头油，芋头馅可以根据个人口味调制，厦门的芋包里面咸香味的有豆干、笋干、卤肉等</div></div>
                </div>
            </div>    
        </div>
        <Foot id="footer"></Foot>
    </div>
</template>

<script>
import Covid from './Covid.vue'
import Foot from './Foot.vue'
import Weather from './Weather.vue'
import Outfit from './Outfit.vue'

export default {
    name: "Xiamen",
    components: {
        Covid,
        Weather,
        Outfit,
        Foot
    },
    data() {
        return {
            cityName: "厦门",
            tem: 15,
            sign0: "el-icon-star-off",
            sign1: "el-icon-star-off",
            sign2: "el-icon-star-off",
            sign3: "el-icon-star-off",
        };
    },
    computed: {
        type0() {
            return (this.sign0 == "el-icon-star-off") ? "primary" : "success";
        },
        type1() {
            return (this.sign1 == "el-icon-star-off") ? "primary" : "success";
        },
        type2() {
            return (this.sign2 == "el-icon-star-off") ? "primary" : "success";
        },
        type3() {
            return (this.sign3 == "el-icon-star-off") ? "primary" : "success";
        },
    },
    methods: {
        addarea(name, num, address) {
                let date = new Date();
                let year = date.getFullYear().toString();
                let month = (date.getMonth()+1).toString();
                let day = date.getDate().toString();
                let time = year+"-"+month+"-"+day;
                console.log(time)
                this.$axios.post("http://127.0.0.1:20001/addArea", {
                        "signDate": time, 
                        "areaNum": num,
                        "areaName": name, 
                        "areaAddress": address, 
                        "areaUser": this.$store.state.currentUser
                    }
                )
                this.$message({
                    message: '收藏成功！',
                    type: 'success'
                }); 
        },
        deletearea(name) {
                this.$axios.post("http://127.0.0.1:20001/deleteArea", {
                        "areaName": name,  
                        "areaUser": this.$store.state.currentUser
                    }
                )
                this.$message({
                    message: '取消收藏成功！',
                    type: 'success'
                });              
        },
        changeSign0() {
            if(this.sign0 == "el-icon-star-off"){
                this.sign0 = "el-icon-check";
                this.addarea("鼓浪屿", 20220200, "福建省厦门市思明区鼓浪屿")                              
            }
            else {
                this.sign0 = "el-icon-star-off";
                this.deletearea("鼓浪屿")      
            }

        },
        changeSign1() {
            if(this.sign1 == "el-icon-star-off"){
                this.sign1 = "el-icon-check";
                this.addarea("南普陀寺", 20220201, "福建省厦门市思明区思明南路515号")
            }
            else {
                this.sign1 = "el-icon-star-off";
                this.deletearea("南普陀寺")
            }
        },
        changeSign2() {
            if(this.sign2 == "el-icon-star-off"){
                this.sign2 = "el-icon-check";
                this.addarea("天竺山森林公园", 20220202, "厦门市郊区西北部的国营天竺山林场内")
            }
            else {
                this.sign2 = "el-icon-star-off";
                this.deletearea("天竺山森林公园")
            }
        },
        changeSign3() {
            if(this.sign3 == "el-icon-star-off"){
                this.sign3 = "el-icon-check";
                this.addarea("五缘湾湿地公园", 20220203, "厦门市湖里区金山路")
            }
            else {
                this.sign3 = "el-icon-star-off";
                this.deletearea("五缘湾湿地公园")
            }
        }
    },
    mounted() {
        //预先标记出用户已经收藏的景点
        this.$axios.get("http://127.0.0.1:20001/getSignArea?areaUser=" + this.$store.state.currentUser)
        .then(res => {
            console.log(res.data);
            res.data.forEach(element => {
                if(element.areaName == "鼓浪屿") this.sign0 = "el-icon-check";
                if(element.areaName == "南普陀寺") this.sign1 = "el-icon-check";
                if(element.areaName == "天竺山森林公园") this.sign2 = "el-icon-check";
                if(element.areaName == "五缘湾湿地公园") this.sign3 = "el-icon-check";
            });
        })
    }
}
</script>

<style scoped>
    .city {
        display: flex;
        flex-direction: column;
        width: 100vw;
        overflow-x: hidden;
        overflow-y: auto;
        align-items: center;
        font-family: "Microsoft Yahei";
    }
    .title {
        width: 100vw;
        height: 65vh;
        background-image: url("../assets/厦门/bg.jpg");
        background-size: cover;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .title h2 {
        font-family: "Microsoft YaHei";
        margin-top: 20vh;
        /* margin-left: 13vw; */
        font-size: 1.2rem;
        font-weight: 200;
        color: #fff;
    }
    .title h1 {
        font-family: "Microsoft YaHei";
        margin-top: 1.5vh;
        /* margin-left: 13vw; */
        font-size: 2.8rem;
        font-weight: 500;
        color: #fff;
    }
    .Covid {
        width: 100vw;
        height: 80vh;
        margin-top: 3rem;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .Covid h1 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
    .Weather {
        width: 100vw;
        height: 75vh;
        margin-top: 10rem;
        padding-top: 3rem;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fbfbfb;
    }
    .Weather h1 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
    .clothes {
        width: 100vw;
        height: 100vh;
        padding-top: 3rem;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .clothes h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    .attractions {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 160vh;
        padding-top: 7vh;
        align-items: center;
        background-color: #fbfbfb;
    }
    .attractions h1 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
    .attractions .attractionsCards {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .attractions .attractionsCards .card{
        background-color: #fff;
        width: 80vw;
        height: 13rem;
        /* box-shadow:  0 5px 5px rgba(0,0,0,0.5); */
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        border-radius: 20px;
        overflow: hidden;
        border-top: rgba(255,255,255,0.5) 1px solid;
        border-left: rgba(255,255,255,0.5) 1px solid;
        backdrop-filter: blur(5px);
        transition: all 0.5s;
        margin-top: 2rem;
        cursor: pointer;
    }
    .attractions .attractionsCards .card:hover {
        transform: scale(1);
        box-shadow:  0 7px 7px rgba(0,0,0,0.5);
    }
    .attractions .attractionsCards .card .signBtn {
        width: 3rem;
        height: 3rem;
    }
    .attractions .attractionsCards .card .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .attractions .attractionsCards .card .content img {
        height: 13rem;
        width: 25rem;
    }
    .attractions .attractionsCards .card .content #text {
        width: 30rem;
    }
    .attractions .attractionsCards .card .content h3{
        font-size: 1.5em;
        color: black;
    }
    .attractions .attractionsCards .card .content p{
        font-size: 1em;
        font-weight: 300;
        color: rgb(83, 81, 81);
    }
    .attractions .attractionsCards .card .content a{
        margin: auto 0;
        color: #000;
        text-decoration: none;
        font-weight: 500;
        border-radius: 20px;
        background-color: #fff;
        padding: 0.5rem 0.8rem;
    }
    .attractions .attractionsCards .card .content a:hover {
        color: blue;
    }
    .food {
        width: 100vw;
        height: 150vh;
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .food h1 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
    .food .foodCards {
        /* width: 80vw; */
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
    }
    .food .foodCards .bigImg {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
    }
    .food .foodCards .bigImg .imgMask {
        position: relative;
        transition: all 0.5s;
        cursor: pointer;
        margin: 1rem 1rem;
    }
    .food .foodCards .bigImg .imgMask:hover {
        transform: scale(1);
    }
    .food .foodCards .bigImg .mask {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #fbfbfb;
        opacity: 0.7;
        transition: opacity 0.3s;
        color: black;
        border-radius: 0 0 0.5rem 0.5rem;
    }
    .food .foodCards .bigImg .mask span {
        font-size: 1.2rem;
        font-weight: 200;
        margin-top: 0.5vh;
        margin-bottom: 0.5vh;
        text-align: center;
    }
    .food .foodCards .bigImg .imgMask .mask {
        width: 34rem;
        height: 10rem;
    }
    .food .foodCards .bigImg div .imgMask .mask {
        width: 17rem;
        height: 4.5rem;
        font-weight: 100;
    }
    .food .foodCards .bigImg .imgMask:hover .mask {
        opacity: 0;
    }
    .food .foodCards .bigImg .imgMask:hover{
        box-shadow:  0 7px 7px rgba(0,0,0,0.5);
        border-radius: 0.5rem;
        transform: scale(1.03);
    }
    .food .foodCards .bigImg div {
        display: flex;
        flex-direction: column;
    }
    .food .foodCards .bigImg .imgMask img {
        width: 34rem;
        height: 24rem;
        border-radius: 0.5rem;
        /* box-shadow: 0 5px 5px rgba(0,0,0,0.5); */
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .food .foodCards .bigImg div .imgMask img {
        width: 17rem;
        height: 11rem;
        border-radius: 0.5rem;
        /* box-shadow: 0 5px 5px rgba(0,0,0,0.5); */
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
</style>