<template>
    <div class="getCovidData">
        <div class="alert">
            <el-alert
                :title="riskMsg"
                :type="risk"
                show-icon>
            </el-alert>             
        </div>
        <div class="newsBox">
            <el-divider  content-position="left">新闻播报</el-divider>
            <a :href="news[0].sourceUrl" target="_blank">{{news[0].pubDateStr}} : {{news[0].title}}</a><br>
            <a :href="news[1].sourceUrl" target="_blank">{{news[1].pubDateStr}} : {{news[1].title}}</a><br>
            <a :href="news[2].sourceUrl" target="_blank">{{news[2].pubDateStr}} : {{news[2].title}}</a><br>            
        </div>
        <br>
        <div class="yesterdayNum">
            <el-divider  content-position="left">新增病例</el-divider>
            <div class="addNumBox">
                <div class="addNum">
                    <el-progress type="circle" :percentage="yesterdaySuspectedCountIncr*100/(yesterdayConfirmedCountIncr+yesterdaySuspectedCountIncr)" status="warning"></el-progress>
                    <div>昨日新增疑似（全国）： {{yesterdaySuspectedCountIncr}}</div>
                </div>
                <div class="addNum">
                    <el-progress type="circle" :percentage="yesterdayConfirmedCountIncr*100/(yesterdayConfirmedCountIncr+yesterdaySuspectedCountIncr)" status="exception"></el-progress>
                    <div>昨日新增确诊（全国）： {{yesterdayConfirmedCountIncr}}</div>                
                </div>
            </div>
        </div>
        <div class="Riskarea">
            <el-divider  content-position="left">现存风险地区</el-divider>
            {{cityName}}目前存在的中风险地区有 {{midRiskAreaData.length}} 个 <el-button plain type="primary" @click="table1 = true">查看</el-button> <br><br>
            <el-drawer
            title="现存中风险地区"
            :visible.sync="table1"
            direction="rtl"
            size="50%">
                <el-table :data="midRiskAreaData">
                <el-table-column property="risk" label="风险" width="150"></el-table-column>
                <el-table-column property="address" label="地区"></el-table-column>
                </el-table>
            </el-drawer>
            {{cityName}}目前存在的高风险地区有 {{highRiskAreaData.length}} 个 <el-button plain type="primary" @click="table2 = true">查看</el-button>
            <el-drawer
            title="现存高风险地区"
            :visible.sync="table2"
            direction="rtl"
            size="50%">
                <el-table :data="highRiskAreaData">
                <el-table-column property="risk" label="风险" width="150"></el-table-column>
                <el-table-column property="address" label="地区"></el-table-column>
                </el-table>
            </el-drawer>
        </div>
    </div>
</template>

<script>
export default {
    name: "getCovidData",
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
            highRiskarea: [],
            table1: false,
            table2: false,
            midRiskAreaData: [],
            highRiskAreaData: [],
        }
    },
    computed: {
        risk(){
            if(this.highRiskAreaData.length != 0) return "error";
            else if(this.midRiskAreaData.length != 0) return "warning";
            else return "success"
        },
        riskMsg(){
            if(this.highRiskAreaData.length != 0) return "该城市存在疫情高风险地区，请谨慎前往！";
            else if(this.midRiskAreaData.length != 0) return "该城市存在疫情中风险地区，请注意个人卫生防护！";
            else return "该城市无疫情风险，可放心前往！"            
        }    
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
                if(element.indexOf(this.cityName) != -1) {
                    let obj = {
                        risk: '中风险',
                        address: element
                    }
                    this.midRiskAreaData.push(obj); 
                }
            });
            this.highRiskarea.forEach(element => {
                if(element.indexOf(this.cityName) != -1){
                    let obj1 = {
                        risk: '高风险',
                        address: element
                    }
                    this.highRiskAreaData.push(obj1); 
                }
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
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.3rem;
    }
    .getCovidData .alert {
        width: 66vw;       
    }
    .getCovidData .newsBox {
        width: 66vw;
        text-align: center;
    }
    .getCovidData .newsBox a {
        text-decoration: none;
        color: rgb(31, 5, 128);
    }
    .getCovidData .newsBox a:hover {
        color: rgb(51, 86, 138);
    }   
    .getCovidData .yesterdayNum {
        width: 66vw;
        text-align: center;
    } 
    .getCovidData .yesterdayNum .addNumBox {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .getCovidData .Riskarea {
        width: 66vw;
        text-align: center;        
    }
</style>