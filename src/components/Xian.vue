<template>
    <div id="xian" class="city">
        <div class="title">
            <h2>探索该地的隐藏景点和让人叹为观止的风景</h2>
            <h1>千年古都，“八水润长安”</h1>
        </div>
        <div class="weather"> 
            <h1>查看天气</h1>
            <div class="date">
                <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
                </el-date-picker>
                <div class="demonstration" @click="getWeather">确定</div>
            </div>
            <div class="weatherCardList">
                <div class="weatherCard" :class="day1.wea_img">
                    <div class="cardContent">
                        <div class="cardContent1">{{day1.tem}}</div>
                        <div class="cardContent2">{{day1.date}}</div>
                        <div class="cardContent2">{{day1.day}}</div>
                        <div class="cardContent3">
                            <div>日出 {{day1.sunrise}}</div>
                            <div>日落 {{day1.sunset}}</div>                            
                        </div>
                    </div>
                </div>
                <div class="weatherCard" :class="day2.wea_img">
                    <div class="cardContent">
                        <div class="cardContent1">{{day2.tem}}</div>
                        <div class="cardContent2">{{day2.date}}</div>
                        <div class="cardContent2">{{day2.day}}</div>
                        <div class="cardContent3">
                            <div>日出 {{day2.sunrise}}</div>
                            <div>日落 {{day2.sunset}}</div>                            
                        </div>
                    </div>
                </div>
                <div class="weatherCard" :class="day3.wea_img">
                    <div class="cardContent">
                        <div class="cardContent1">{{day3.tem}}</div>
                        <div class="cardContent2">{{day3.date}}</div>
                        <div class="cardContent2">{{day3.day}}</div>
                        <div class="cardContent3">
                            <div>日出 {{day3.sunrise}}</div>
                            <div>日落 {{day3.sunset}}</div>                            
                        </div>
                    </div>
                </div>
                <div class="weatherCard" :class="day4.wea_img">
                    <div class="cardContent">
                        <div class="cardContent1">{{day4.tem}}</div>
                        <div class="cardContent2">{{day4.date}}</div>
                        <div class="cardContent2">{{day4.day}}</div>
                        <div class="cardContent3">
                            <div>日出 {{day4.sunrise}}</div>
                            <div>日落 {{day4.sunset}}</div>     
                        </div>                       
                    </div>
                </div>
                <div class="weatherCard" :class="day5.wea_img">
                    <div class="cardContent">
                        <div class="cardContent1">{{day5.tem}}</div>
                        <div class="cardContent2">{{day5.date}}</div>
                        <div class="cardContent2">{{day5.day}}</div>
                        <div class="cardContent3">
                            <div>日出 {{day5.sunrise}}</div>
                            <div>日落 {{day5.sunset}}</div>                            
                        </div>
                    </div>
                </div>
                 <div class="weatherCard" :class="day6.wea_img">
                    <div class="cardContent">
                        <div class="cardContent1">{{day6.tem}}</div>
                        <div class="cardContent2">{{day6.date}}</div>
                        <div class="cardContent2">{{day6.day}}</div>
                        <div class="cardContent3">
                            <div>日出 {{day6.sunrise}}</div>
                            <div>日落 {{day6.sunset}}</div>                            
                        </div>
                    </div>
                </div>
                 <div class="weatherCard" :class="day7.wea_img">
                    <div class="cardContent">
                        <div class="cardContent1">{{day7.tem}}</div>
                        <div class="cardContent2">{{day7.date}}</div>
                        <div class="cardContent2">{{day7.day}}</div>
                        <div class="cardContent3">
                            <div>日出 {{day7.sunrise}}</div>
                            <div>日落 {{day7.sunset}}</div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="attractions">
            <h1>景点 & 活动</h1>
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
                        <a href="#">了解更多</a>
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
                        <a href="#">了解更多</a>
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
                        <a href="#">了解更多</a>
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
                        <a href="#">了解更多</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="food">
            <h1>美食 & 小吃</h1>
            <div class="foodCards">
                <div class="bigImg">
                    <div class="imgMask">
                        <img src="../assets/西安/胡辣汤.jpg" alt="">
                        <div class="mask"><h3>胡辣汤</h3>陕西的胡辣汤与河南胡辣汤不同，不仅加入了加入肉丸，而且里边加入了很多蔬菜，吃起来最是美味。</div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/西安/锅盔.jpg" alt=""><div class="mask"><span>锅盔</span><br>风味方便食品</div></div>
                        <div class="imgMask"><img src="../assets/西安/葫芦头.jpg" alt=""><div class="mask"><span>葫芦头</span><br>西安特有的风味小吃</div></div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/西安/凉皮.jpg" alt=""><div class="mask"><span>凉皮</span><br>大米粉调成糊状，筋、薄、细、软</div></div>
                        <div class="imgMask"><img src="../assets/西安/柿饼.jpeg" alt=""><div class="mask"><span>柿饼</span><br>柿子作成的饼状食品，营养价值很高</div></div>
                    </div>
                </div>
                <div class="bigImg">
                    <div>
                        <div class="imgMask"><img src="../assets/西安/油泼面.jpg" alt=""><div class="mask"><span>油泼面</span><br>陕西传统的特色面食之一，有鲜香味、酸辣味、香辣味</div></div>
                        <div class="imgMask"><img src="../assets/西安/肉夹馍.jpg" alt=""><div class="mask"><span>肉夹馍</span><br>馍外观焦黄，皮酥里嫩，饼酥肉香，爽而不腻</div></div>
                    </div>
                    <div>
                        <div class="imgMask"><img src="../assets/西安/牛羊肉泡馍.jpg" alt=""><div class="mask"><span>牛肉泡馍</span><br>料重味重,肉烂汤浓,香气诱人</div></div>
                        <div class="imgMask"><img src="../assets/西安/水煎包.jpg" alt=""><div class="mask"><span>水煎包</span><br>特色传统风味小吃，口感脆而不硬，香而不腻，味道鲜美极致</div></div>
                    </div>
                    <div class="imgMask"><img src="../assets/西安/蜜枣甑糕.jpg" alt=""><div class="mask"><h3>蜜枣甑糕</h3>陕西关中地区的汉族传统糕类早点食品。以糯米和红枣为原料制成的一种甜糕</div></div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    name: "Xian",
    data() {
        return {
            pickerOptions: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近一个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近三个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
                }
            }]
            },
            value2: '',
            day1: {},
            day2: {},
            day3: {},
            day4: {},
            day5: {},
            day6: {},
            day7: {},
        };
    },
    methods: {
        getWeather() {
            this.$axios.get("https://yiketianqi.com/api?unescape=1&version=v1&appid=44324191&appsecret=0XnKD7sG&city=西安")
            .then(response => {
                console.log(response.data)
                let data = response.data.data;
                this.day1 = data[0];
                this.day2 = data[1];
                this.day3 = data[2];
                this.day4 = data[3];
                this.day5 = data[4];
                this.day6 = data[5];
                this.day7 = data[6];
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted() {
            this.$axios.get("https://yiketianqi.com/api?unescape=1&version=v1&appid=44324191&appsecret=0XnKD7sG&city=西安")
            .then(response => {
                console.log(response.data)
                let data = response.data.data;
                this.day1 = data[0];
                this.day2 = data[1];
                this.day3 = data[2];
                this.day4 = data[3];
                this.day5 = data[4];
                this.day6 = data[5];
                this.day7 = data[6];
            }).catch(function (error) {
                console.log(error);
            });        
    }
}
</script>

<style scoped>
    .city {
        display: flex;
        flex-direction: column;
        width: 105vw;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .title {
        width: 100vw;
        height: 55vh;
        background-image: url("../assets/西安/Xian-1.jpg");
        background-size: cover;
        display: flex;
        flex-direction: column;
    }
    .title h2 {
        font-family: "Microsoft YaHei";
        margin-top: 20vh;
        margin-left: 5vw;
        font-size: 1.2rem;
        font-weight: 200;
        color: #fff;
    }
    .title h1 {
        font-family: "Microsoft YaHei";
        margin-top: 1.5vh;
        margin-left: 5vw;
        font-size: 2.8rem;
        font-weight: 500;
        color: #fff;
    }
    .weather {
        margin-left: 3rem;
        margin-top: 2rem;        
    }
    .weather h1 {
        font-size: 2rem;
    }
    .weather .date {
        cursor: pointer;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
    }
    .weather .date .demonstration {
        line-height: 1.8rem;
        padding: 0 1rem;
        border: rgb(141, 139, 139) 0.1rem solid;
        border-radius: 1rem;
        font-size: 1.3rem;
        margin-left: 1rem;
        transition: all 1s;
    }
    .weather .date .demonstration:hover {
        border: transparent;
        font-size: 1.4rem;
    }
    .weather .weatherCardList {
        display: flex;
        margin-top: 1rem;
    }
    .weatherCard {
        width: 10vw;
        height: 25vh;
        margin-right: 1.5rem;
        box-shadow:  0 5px 5px rgba(0,0,0,0.5);
        border-radius: 20px;
    }
    .weatherCard .cardContent {
        display: flex;
        flex-direction: column;
        color: black;
    }
    .cardContent1 {
        font-size: 2rem;
        margin: 2rem auto 0;
    }
    .cardContent2 {
        font-size: 1rem;
        margin: 0.1rem auto;
    }
    .cardContent3 {
        margin: 1rem auto 1rem;
        font-size: 1rem;
    }
    .attractions {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
    }
    .attractions h1 {
        font-size: 2rem;
        margin-left: 3rem;
    }
    .attractions .attractionsCards {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 3rem;
    }
    .attractions .attractionsCards .card{
        background-color: #fff;
        width: 80vw;
        height: 13rem;
        box-shadow:  0 5px 5px rgba(0,0,0,0.5);
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
        transform: scale(1.01);
    }
    .attractions .attractionsCards .card .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
        box-shadow: 0 5px 5px rgba(0,0,0,0.5);
    }
    .food {
        margin-top: 3rem;
        margin-left: 3rem;
        height: 50rem;
    }
    .food .foodCards {
        
        width: 80vw;
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        padding-left: 2rem;
        border-radius: 2rem;
    }
    .food .foodCards .bigImg {
        display: flex;
        flex-direction: row;
        margin-bottom: 3rem;
    }
    .food .foodCards .bigImg .imgMask {
        position: relative;
        transition: all 0.5s;
        cursor: pointer;
        margin: 1rem 2rem;
    }
    .food .foodCards .bigImg .imgMask:hover {
        transform: scale(1.1);
    }
    .food .foodCards .bigImg .mask {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(17,17,17,0.75);;
        opacity: 0.6;
        transition: opacity 0.3s;
        color: #fff;
        border-radius: 0 0 1rem 1rem;
    }
    .food .foodCards .bigImg .imgMask .mask {
        width: 30rem;
        height: 11rem;
    }
    .food .foodCards .bigImg div .imgMask .mask {
        width: 15rem;
        height: 5rem;
    }
    .food .foodCards .bigImg .imgMask:hover .mask {
        opacity: 0;
    }
    .food .foodCards .bigImg div {
        display: flex;
        flex-direction: column;
    }
    .food .foodCards .bigImg .imgMask img {
        width: 30rem;
        height: 24rem;
        border-radius: 1rem;
        box-shadow: 0 5px 5px rgba(0,0,0,0.5);
    }
    .food .foodCards .bigImg div .imgMask img {
        width: 15rem;
        height: 11rem;
        border-radius: 1rem;
        box-shadow: 0 5px 5px rgba(0,0,0,0.5);
    }
    .yu {
        background: url("../assets/yu.jpg");
        background-size: cover;
    }
    .yin {
        background: url("../assets/yin.jpg");
        background-size: cover;
    }
    .xue {
        background: url("../assets/xue.jpg");
        background-size: cover;
    }
    .wu {
        background: url("../assets/wu.jpg");
        background-size: cover;
    }
    .shachen {
        background: url("../assets/shachen.jpg");
        background-size: cover;
    }
    .qing {
        background: url("../assets/qing.jpg");
        background-size: cover;
    }
    .lei {
        background: url("../assets/lei.jpg");
        background-size: cover;
    }
    .yun {
        background: url("../assets/yun.jpg");
        background-size: cover;
    }
</style>