<template>
    <div id="xian" class="city">
        <div class="title">
            <h2>探索该地的隐藏景点和让人叹为观止的风景</h2>
            <h1>千年古都  “八水润长安”</h1>
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
                        <img src="../assets/西安/大雁塔.jpg" alt="">
                        <div id="text">
                            <h3>大雁塔</h3>
                            <p>
                                世界文化遗产、全国重点文物保护单位、国家AAAAA级旅游景区。大雁塔被视为古都西安的象征。大雁塔是8世纪为保存玄奘法师由天竺经丝绸之路带回长安的经卷佛像而建。
                            </p>
                        </div>
                        <a target="_blank" href="https://baike.baidu.com/item/%E5%A4%A7%E9%9B%81%E5%A1%94/29143">了解更多</a>
                        <div id="sign0" class="signBtn" @click="changeSign0"><el-button :type="type0" :icon="sign0" circle></el-button></div>    
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <img src="../assets/西安/大明宫.jpg" alt="">
                        <div id="text">
                            <h3>大明宫</h3>
                            <p>
                                世界文化遗产、全国重点文物保护单位、国家AAAAA级旅游景区。大明宫是东方宫殿建筑艺术的杰出代表，被誉为丝绸之路的东方圣殿。
                            </p>
                        </div>
                        <a target="_blank" href="https://baike.baidu.com/item/%E5%A4%A7%E6%98%8E%E5%AE%AB%E5%9B%BD%E5%AE%B6%E9%81%97%E5%9D%80%E5%85%AC%E5%9B%AD/4985373?fromtitle=%E5%A4%A7%E6%98%8E%E5%AE%AB%E9%81%97%E5%9D%80%E5%85%AC%E5%9B%AD&fromid=9827321">了解更多</a>
                        <div id="sign0" class="signBtn" @click="changeSign1"><el-button :type="type1" :icon="sign1" circle></el-button></div>    
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <img src="../assets/西安/大唐芙蓉园.jpg" alt="">
                        <div id="text">
                            <h3>大唐芙蓉园</h3>
                            <p>
                                国家AAAAA级旅游景区。大唐芙蓉园是首家唐文化主题公园，拥有全球幅宽最大的水幕电影，是国内最长的唐文化长廊。
                            </p>
                        </div>
                        <a target="_blank" href="https://baike.baidu.com/item/%E5%A4%A7%E5%94%90%E8%8A%99%E8%93%89%E5%9B%AD/5709">了解更多</a>
                        <div id="sign0" class="signBtn" @click="changeSign2"><el-button :type="type2" :icon="sign2" circle></el-button></div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <img src="../assets/西安/秦岭野生动物园.jpg" alt="">
                        <div id="text">
                            <h3>秦岭野生动物园</h3>
                            <p>
                                国家AAAA级旅游景区。景点位于秦岭北麓浅山地带，是集野生动物移地保护、科普教育、旅游观光、休闲度假等功能于一体的综合性园林项目。
                            </p>
                        </div>    
                        <a target="_blank" href="https://baike.baidu.com/item/%E8%A5%BF%E5%AE%89%E7%A7%A6%E5%B2%AD%E9%87%8E%E7%94%9F%E5%8A%A8%E7%89%A9%E5%9B%AD?fromtitle=%E7%A7%A6%E5%B2%AD%E9%87%8E%E7%94%9F%E5%8A%A8%E7%89%A9%E5%9B%AD&fromid=1623286">了解更多</a>
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
                        <img src="../assets/西安/胡辣汤.jpg" alt="">
                        <div class="mask"><span>胡辣汤</span><br>陕西的胡辣汤与河南胡辣汤不同，不仅加入了加入肉丸，而且里边加入了很多蔬菜，吃起来最是美味</div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/西安/锅盔.jpg" alt=""><div class="mask"><span>锅盔</span>饼大直径二尺外，又圆又厚像锅盖,风味方便食品</div></div>
                        <div class="imgMask"><img src="../assets/西安/葫芦头.jpg" alt=""><div class="mask"><span>葫芦头</span>馍块洁白晶亮、软绵滑韧，肉嫩汤鲜，肥而不腻</div></div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/西安/凉皮.jpg" alt=""><div class="mask"><span>凉皮</span>大米粉调成糊状，筋、薄、细、软</div></div>
                        <div class="imgMask"><img src="../assets/西安/柿饼.jpeg" alt=""><div class="mask"><span>柿饼</span>柿子作成的饼状食品，营养价值很高</div></div>
                    </div>
                </div>
                <div class="bigImg">
                    <div>
                        <div class="imgMask"><img src="../assets/西安/油泼面.jpg" alt=""><div class="mask"><span>油泼面</span>陕西传统的特色面食之一，有鲜香味、酸辣味、香辣味</div></div>
                        <div class="imgMask"><img src="../assets/西安/肉夹馍.jpg" alt=""><div class="mask"><span>肉夹馍</span>馍外观焦黄，皮酥里嫩，饼酥肉香，爽而不腻</div></div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/西安/牛羊肉泡馍.jpg" alt=""><div class="mask"><span>牛肉泡馍</span>料重味重,肉烂汤浓,香气诱人</div></div>
                        <div class="imgMask"><img src="../assets/西安/水煎包.jpg" alt=""><div class="mask"><span>水煎包</span>特色传统风味小吃，口感脆而不硬，香而不腻，味道鲜美极致</div></div>
                    </div>
                    <div class="imgMask"><img src="../assets/西安/蜜枣甑糕.jpg" alt=""><div class="mask"><span>蜜枣甑糕</span><br>陕西关中地区的汉族传统糕类早点食品。以糯米和红枣为原料制成的一种甜糕,蒸出锅后，吃起来软糯香甜 ，特别深受一些老人、小孩和女孩子们的喜爱</div></div>
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
    name: "Xian",
    components: {
        Covid,
        Weather,
        Outfit,
        Foot
    },
    data() {
        return {
            cityName: "西安",
            tem: 7,
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
                this.addarea("大雁塔", 20220100, "陕西省西安市雁塔区大慈恩寺内")                              
            }
            else {
                this.sign0 = "el-icon-star-off";
                this.deletearea("大雁塔")      
            }

        },
        changeSign1() {
            if(this.sign1 == "el-icon-star-off"){
                this.sign1 = "el-icon-check";
                this.addarea("大明宫", 20220101, "陕西省西安市太华南路")
            }
            else {
                this.sign1 = "el-icon-star-off";
                this.deletearea("大明宫")
            }
        },
        changeSign2() {
            if(this.sign2 == "el-icon-star-off"){
                this.sign2 = "el-icon-check";
                this.addarea("大唐芙蓉园", 20220102, "西安市雁塔区曲江新区芙蓉西路99号")
            }
            else {
                this.sign2 = "el-icon-star-off";
                this.deletearea("大唐芙蓉园")
            }
        },
        changeSign3() {
            if(this.sign3 == "el-icon-star-off"){
                this.sign3 = "el-icon-check";
                this.addarea("秦岭野生动物园", 20220103, "西安市长安区滦镇107省道")
            }
            else {
                this.sign3 = "el-icon-star-off";
                this.deletearea("秦岭野生动物园")
            }
        }
    },
    mounted() {
        //预先标记出用户已经收藏的景点
        this.$axios.get("http://127.0.0.1:20001/getSignArea?areaUser=" + this.$store.state.currentUser)
        .then(res => {
            console.log(res.data);
            res.data.forEach(element => {
                if(element.areaName == "大雁塔") this.sign0 = "el-icon-check";
                if(element.areaName == "大明宫") this.sign1 = "el-icon-check";
                if(element.areaName == "大唐芙蓉园") this.sign2 = "el-icon-check";
                if(element.areaName == "秦岭野生动物园") this.sign3 = "el-icon-check";
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
        height: 700vh;
        overflow-x: hidden;
        overflow-y: auto;
        align-items: center;
        font-family: "Microsoft Yahei";
    }
    .title {
        width: 100vw;
        height: 65vh;
        background-image: url("../assets/西安/3.jpg");
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