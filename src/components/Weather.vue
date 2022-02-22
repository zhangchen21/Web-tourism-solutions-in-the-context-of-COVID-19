<template>
        <div class="weather"> 
            <div class="date">
                <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择出发日期"
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
                 <!-- <div class="weatherCard" :class="day6.wea_img">
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
                </div> -->
            </div>
        </div>
</template>

<script>
export default {
    name: "weather",
    props: {
        cityName:{    
            type: String,
            required: true
        }        
    },
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
        }
    },
    methods: {
        getWeather() {//糊弄的
            this.$axios.get("https://yiketianqi.com/api?unescape=1&version=v1&appid=44324191&appsecret=0XnKD7sG&city=" + this.cityName)
            .then(response => {
                console.log(response.data)
                let data = response.data.data;
                this.day1 = data[1];
                this.day2 = data[2];
                this.day3 = data[3];
                this.day4 = data[4];
                this.day5 = data[5];
                // this.day6 = data[5];
                // this.day7 = data[6];
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted() {
            this.$axios.get("https://yiketianqi.com/api?unescape=1&version=v1&appid=44324191&appsecret=0XnKD7sG&city=" + this.cityName)
            .then(response => {
                console.log(response.data)
                let data = response.data.data;
                this.day1 = data[0];
                this.day2 = data[1];
                this.day3 = data[2];
                this.day4 = data[3];
                this.day5 = data[4];
                // this.day6 = data[5];
                // this.day7 = data[6];
            }).catch(function (error) {
                console.log(error);
            });        
    }    
}
</script>

<style scoped>
    .weather {
        margin-left: 3rem;
        display: flex;     
        flex-direction: column;
        align-items: center;
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
        transition: all 0.3s;
    }
    .weather .date .demonstration:hover {
        border: white 0.1rem solid;
    }
    .weather .weatherCardList {
        display: flex;
        margin-top: 2rem;
    }
    .weatherCard {
        width: 14vw;
        height: 35vh;
        margin-right: 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        border-radius: 20px;
        transition: all 0.5s;
        cursor: pointer;
    }
    .weatherCard:hover {
        box-shadow:  0 7px 7px rgba(0,0,0,0.5);
    }
    .weatherCard .cardContent {
        display: flex;
        flex-direction: column;
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
    .yu {
        background: url("../assets/weather/yu.jpg");
        background-size: cover;
        color: white;
    }
    .yin {
        background: url("../assets/weather/yin.jpg");
        background-size: cover;
    }
    .xue {
        background: url("../assets/weather/xue.jpg");
        background-size: cover;
    }
    .wu {
        background: url("../assets/weather/wu.jpg");
        background-size: cover;
    }
    .shachen {
        background: url("../assets/weather/shachen.jpg");
        background-size: cover;
    }
    .qing {
        background: url("../assets/weather/qing.jpg");
        background-size: cover;
    }
    .lei {
        background: url("../assets/weather/lei.jpg");
        background-size: cover;
    }
    .yun {
        background: url("../assets/weather/yun.jpg");
        background-size: cover;
    }
</style>