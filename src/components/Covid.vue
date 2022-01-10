<template>
    <div class="getCovidData">
        <div class="head"></div>
        <el-alert
            :title="riskMsg"
            :type="risk"
            show-icon>
        </el-alert>          
        <div class="newsBox">
            <el-divider  content-position="left">新闻播报</el-divider>
            <a :href="news[0].sourceUrl" target="_blank">{{news[0].pubDateStr}} : {{news[0].title}}</a><br>
            <a :href="news[1].sourceUrl" target="_blank">{{news[1].pubDateStr}} : {{news[1].title}}</a><br>
            <a :href="news[2].sourceUrl" target="_blank">{{news[2].pubDateStr}} : {{news[2].title}}</a><br>            
        </div>
        <div class="yesterdayNum">
            <el-divider  content-position="left">新增病例</el-divider>
            <el-progress type="circle" :percentage="yesterdaySuspectedCountIncr*100/(yesterdayConfirmedCountIncr+yesterdaySuspectedCountIncr)" status="warning"></el-progress>
            昨日新增疑似（全国）： {{yesterdaySuspectedCountIncr}}
            <el-progress type="circle" :percentage="yesterdayConfirmedCountIncr*100/(yesterdayConfirmedCountIncr+yesterdaySuspectedCountIncr)" status="exception"></el-progress>
            昨日新增确诊（全国）： {{yesterdayConfirmedCountIncr}}
        </div>
        <div class="Riskarea">
            <el-divider  content-position="left">现存风险地区</el-divider>
            {{cityName}}存在的中风险地区有 {{midRiskarea1.length}} 个 <el-button :plain="true" @click="open1">查看</el-button> <br><br>
            {{cityName}}存在的高风险地区有 {{highRiskarea1.length}} 个 <el-button :plain="true" @click="open2">查看</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Covid",
    props: {
        cityName:{    
            type: String,
            required: true
        }
    },
    data() {
        return {
            news: {
            },
            yesterdayConfirmedCountIncr: 0,
            yesterdaySuspectedCountIncr: 0,
            currentConfirmedCount: 0,
            midRiskarea: [],
            midRiskarea1: [],
            highRiskarea: [],
            highRiskarea1: [],
        }
    },
    computed: {
        risk(){
            if(this.highRiskarea1 != null) return "error";
            else if(this.midRiskarea1 != null) return "warning";
            else return "success"
        },
        riskMsg(){
            if(this.highRiskarea1 != null) return "该城市存在疫情高风险地区，请谨慎前往！";
            else if(this.midRiskarea1 != null) return "该城市存在疫情中风险地区，请注意个人卫生防护！";
            else return "该城市无疫情风险，可放心前往！"            
        }    
    },
    methods: {
        open1() {
            this.$message({
                showClose: true,
                message: '现存中风险地区：' + this.midRiskarea1
            });
        },
        open2() {
            this.$message({
                showClose: true,
                message: '现存高风险地区：' + this.highRiskarea1
            });
        },
    },
    mounted() {
        this.$axios.get("http://api.tianapi.com/ncov/index?key=be96ea1595db2d984d8c5e821b725f5c")
        .then(res => {
            console.log(res.data);
            this.midRiskarea = res.data.newslist[0].riskarea.mid;
            this.highRiskarea = res.data.newslist[0].riskarea.high;
            this.news = res.data.newslist[0].news;
            this.yesterdaySuspectedCountIncr = res.data.newslist[0].desc.yesterdaySuspectedCountIncr;
            this.yesterdayConfirmedCountIncr = res.data.newslist[0].desc.yesterdayConfirmedCountIncr;
            this.currentConfirmedCount = res.data.newslist[0].desc.currentConfirmedCount;
            this.midRiskarea.forEach(element => {
                if(element.indexOf(this.cityName) != -1) this.midRiskarea1.push(element); 
            });
            this.highRiskarea.forEach(element => {
                if(element.indexOf(this.cityName) != -1) this.highRiskarea1.push(element); 
            });
        }).catch(function (error) {
                console.log(error);
        });
    }
}
</script>

<style scoped>
    .getCovidData {
        width: 78vw;
        height: 70vh;
    }
    .getCovidData .head {
        height: 2vh;
    }
    .getCovidData .newsBox a {
        text-decoration: none;
        color: rgb(31, 5, 128);
    }
    .getCovidData .newsBox a:hover {
        color: rgb(51, 86, 138);
    }    
</style>