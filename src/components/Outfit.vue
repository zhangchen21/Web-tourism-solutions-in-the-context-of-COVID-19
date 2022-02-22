<template>
    <div class="ootd">
        <div class="clothes" v-if="iscold">  
            <div class="clothesBox" id="coldBox">
                <el-carousel id="hotcards" :interval="3000" type="card" trigger="click" @change="changeImg">
                    <el-carousel-item v-for="item in imagesbox1" :key="item">
                        <img :src="item.idView" class="image" :fit="fit">
                    <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>       
            </div>
            <div id="sign" class="signBtn" @click="changeSign"><el-button :type="type" :icon="sign" circle></el-button></div>
            <div class="title">{{this.clothesName}}</div> 
            <div class="text">{{this.clothesText}}</div> 
        </div>
        <div class="clothes" v-if="iscool">  
            <div class="clothesBox" id="coolBox">
                <el-carousel id="hotcards" :interval="3000" type="card" trigger="click" @change="changeImg">
                    <el-carousel-item v-for="item in imagesbox2" :key="item">
                        <img :src="item.idView" class="image" :fit="fit">
                    <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>       
            </div>
            <div id="sign" class="signBtn" @click="changeSign"><el-button :type="type" :icon="sign" circle></el-button></div>
            <div class="title">{{this.clothesName}}</div> 
            <div class="text">{{this.clothesText}}</div> 
        </div>    
    </div>
</template>

<script>
export default {
    name: "clothes",
    props: {
        tem: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            ishot: false,
            iscool: false,
            iscold: true,
            sign: "el-icon-star-off",
            index: 0,
            clothesName: "",
            clothesText: "",
            clothespath: [],
            imagesbox1:[
                {id:0,idView:require("../assets/clothes/cold/20220100.jpg")},
                {id:0,idView:require("../assets/clothes/cold/20220101.jpg")},
                {id:0,idView:require("../assets/clothes/cold/20220102.jpg")},
                {id:0,idView:require("../assets/clothes/cold/20220103.jpg")},
                {id:0,idView:require("../assets/clothes/cold/20220104.jpg")}
            ],
            imagesbox2:[
                {id:0,idView:require("../assets/clothes/cool/20220200.jpg")},
                {id:0,idView:require("../assets/clothes/cool/20220201.jpg")},
                {id:0,idView:require("../assets/clothes/cool/20220202.jpg")},
                {id:0,idView:require("../assets/clothes/cool/20220203.jpg")},
                {id:0,idView:require("../assets/clothes/cool/20220204.jpg")}
            ],
        }
    },
    computed: {
        currentSignClothesNum() {
            if(this.ishot) return (20220300 + this.index);
            else if(this.iscool) return 20220200 + (this.index);
            else return 20220100 + (this.index);
        },
        type() {
            return (this.sign == "el-icon-star-off") ? "primary" : "success";
        }
    },
    methods: {
        getclothesData() {
            this.$axios.get("http://127.0.0.1:20001/getClothesData?clo_num=" + this.currentSignClothesNum)
            .then(res => {
                console.log(res.data)
                this.clothesName = res.data[0].clo_name;
                this.clothesText = res.data[0].clo_text;
            })            
        },
        changeImg(currentIndex) {
            this.sign = "el-icon-star-off"
            this.index = currentIndex;
            this.$axios.get("http://127.0.0.1:20001/getSignClothes?clothesUser=" + this.$store.state.currentUser)
                .then(res => {
                    console.log(res.data);
                    res.data.forEach(element => {
                        if(element.clothesNum == this.currentSignClothesNum) this.sign = "el-icon-check";
                        
                    });
            })
            this.getclothesData()
        },
        addclothes() {
            let date = new Date();
            let year = date.getFullYear().toString();
            let month = (date.getMonth()+1).toString();
            let day = date.getDate().toString();
            let time = year+"-"+month+"-"+day;
            this.$axios.post("http://127.0.0.1:20001/addClothes", {
                    "signDate": time, 
                    "clothesNum": this.currentSignClothesNum, 
                    "clothesName": this.clothesName, 
                    "clothesUser": this.$store.state.currentUser
                }
            )
            this.$message({
                message: '收藏成功！',
                type: 'success'
            }); 
        },
        deleteclothes() {
                this.$axios.post("http://127.0.0.1:20001/deleteClothes", {
                        "clothesNum": this.currentSignClothesNum,  
                        "area_user": this.$store.state.currentUser
                    }
                )
                this.$message({
                    message: '取消收藏成功！',
                    type: 'success'
                });              
        },
        changeSign() {
            if(this.sign == "el-icon-star-off"){
                this.sign = "el-icon-check";
                this.addclothes()                              
            }
            else {
                this.sign = "el-icon-star-off";
                this.deleteclothes()      
            }

        }
    },
    mounted() {
        this.ishot = (this.tem>=30) ? true : false;
        this.iscool = (this.tem<30 && this.tem>=15) ? true : false;
        this.iscold = (this.tem<15) ? true : false;
        //预先标记出用户已经收藏的穿搭
        this.$axios.get("http://127.0.0.1:20001/getSignClothes?clothesUser=" + this.$store.state.currentUser)
        .then(res => {
            console.log(res.data);
            res.data.forEach(element => {
                if(element.clothesNum == this.currentSignClothesNum) this.sign = "el-icon-check";
            });
        })
        //获取穿搭信息
        this.getclothesData()
    }
}
</script>

<style scoped>
.clothes {
    width: 78vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-around;   
}
.clothesBox {
    width: 78vw;
    height: 40vh;    
}
.title {
    font-size: 1.5rem;
}
.text {
    width: 60vw;
    height: 8vh;
    font-weight: 100;
    text-align: center;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
} 
img{
width:100%;
}
</style>