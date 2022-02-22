<template>
    <div class="login">
        <div class="loginBox">
            <div class="sideBar">
                <div class="photo">
                    <el-avatar id="photo" :size="150" fit="fill" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi4%2F847727577%2FO1CN01arx62E25qJYjLoM7H_%21%21847727577.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644487724&t=4f1282249f23c4aa4a06d04022161fe2.jpg"></el-avatar>
                    <p></p> 
                </div>
                <el-row class="tac">
                    <el-col>
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo">
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title" @click="setInfor">个人信息</span>
                        </el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>我的收藏</span>
                            </template>
                            <el-menu-item index="1-3" @click="setArea">景点</el-menu-item>
                            <el-menu-item index="1-3" @click="setClothes">穿搭</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">设置</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-document"></i>
                            <span slot="title" @click="quit">退出</span>
                        </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div class="infor" v-if="sideNavIsInfor">
                <h2>个人信息</h2>
                <el-divider></el-divider>            
                <el-descriptions>
                    <el-descriptions-item label="用户名">{{userInfro.name}}</el-descriptions-item>
                    <el-descriptions-item label="手机号">{{userInfro.phone}}</el-descriptions-item>
                    <el-descriptions-item label="居住地">{{userInfro.city}}</el-descriptions-item>
                    <el-descriptions-item label="备注">
                    <el-tag size="small">{{userInfro.extra}}</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="联系地址">{{userInfro.address}}</el-descriptions-item>
                </el-descriptions>
                <el-button id="modify" type="info" plain @click="dialog = true">编辑信息</el-button>  
                <el-drawer
                title="请修改您的个人信息"
                :before-close="handleClose"
                :visible.sync="dialog"
                direction="ltr"
                custom-class="demo-drawer"
                ref="drawer"
                >
                <div class="demo-drawer__content">
                    <el-form :model="form">
                    <el-form-item label="您的昵称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off" placeholder="请输入您的昵称"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" :label-width="formLabelWidth">
                        <el-input v-model="form.phone" autocomplete="off" placeholder="请输入您的手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="居住城市" :label-width="formLabelWidth">
                        <el-input v-model="form.city" autocomplete="off" placeholder="请输入您现在居住的城市"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" :label-width="formLabelWidth">
                        <el-select v-model="form.extra" placeholder="请选择">
                        <el-option label="学校" value="学校"></el-option>
                        <el-option label="家" value="家"></el-option>
                        <el-option label="公司" value="公司"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="家庭住址" :label-width="formLabelWidth">
                        <el-input v-model="form.address" autocomplete="off" placeholder="请输入您的家庭住址"></el-input>
                    </el-form-item>                    
                    </el-form>
                    <div class="demo-drawer__footer">
                    <el-button @click="cancelForm">取 消</el-button>
                    <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
                    </div>
                </div>
                </el-drawer>
                <h2>动态</h2>
                <el-divider></el-divider>  
                <el-empty description="暂无数据" :image-size="100"></el-empty>       
            </div>
            <div class="loved" v-if="sideNavIsArea">
                <div class="area">
                    <h2>收藏景点</h2>
                    <el-divider></el-divider>
                    <el-table
                        :data="areaTableData.filter(data => !search1 || data.areaName.toLowerCase().includes(search1.toLowerCase()))"
                        style="width: 100%">
                        <el-table-column
                        label="收藏日期"
                        prop="signDate">
                        </el-table-column> 
                        <el-table-column
                        label="景点"
                        prop="areaName">
                        </el-table-column>
                        <el-table-column
                        label="位置"
                        prop="areaAddress">
                        </el-table-column>
                        <el-table-column
                        align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                            v-model="search1"
                            size="mini"
                            placeholder="输入关键字搜索"
                            @click="handleEdit(scope.$index, scope.row)"/>
                        </template>
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">移除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>  
                </div>
            </div>
            <div class="loved" v-if="sideNavIsClothes">
                <div class="clothes">
                    <h2>收藏穿搭</h2>
                    <el-divider></el-divider>
                    <el-table
                        :data="clothesTableData.filter(data => !search2 || data.name.toLowerCase().includes(search2.toLowerCase()))"
                        style="width: 100%">
                        <el-table-column
                        label="收藏日期"
                        prop="signDate">
                        </el-table-column> 
                        <el-table-column
                        label="穿搭编号"
                        prop="clothesNum">
                        </el-table-column>
                        <el-table-column
                        label="穿搭名称"
                        prop="clothesName">
                        </el-table-column>
                        <el-table-column
                        align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                            v-model="search2"
                            size="mini"
                            placeholder="输入关键字搜索"
                            @click="handleEdit(scope.$index, scope.row)"/>
                        </template>
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="seeClothes(scope.$index, scope.row)">查看</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="deleteClothes(scope.$index, scope.row)">移除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>  
                </div>
            </div> 
            <div class="clothes_details" v-if="showClothes">
                <el-button type="info" plain icon="el-icon-close" circle @click="closeClothes"></el-button>
                <div class="clothes_details_box">
                    <img :src="clothesData.path" :alt="clothesData.path" width="60%" height="50%">
                    <div class="title">{{clothesData.name}}</div>
                    <div class="text">{{clothesData.text}}</div>                    
                </div>
            </div>           
        </div>

    </div>

</template>

<script>
export default {
    name: "login",
    data() {
        return {
            //决定初始页面展示的内容
            sideNavIsArea : false,
            sideNavIsInfor : true,
            sideNavIsClothes : false,
            showClothes: false,
            //各个页面的信息，初始没有从数据库获取，都为空置
            userInfro: {
                infor_user: "",
                name: "",
                phone: "",
                city: "",
                extra: "",
                address: "",
            },
            areaTableData: [{

            }],
            clothesTableData: [{

            }],
            clothesData: {
                path: "",
                name: "",
                text: ""
            },
            //搜索功能
            search1: '',
            search2: '',
            //编辑用户信息时的表单要用
            table: false,
            dialog: false,
            loading: false,
            form: {
                name: '',
                phone: '',
                city: '',
                address: '',
                extra: "",
            },
            formLabelWidth: '80px',
            timer: null,
            //引入图片资源
            imgurl20220100: require("../assets/clothes/cold/20220100.jpg"),
            imgurl20220101: require("../assets/clothes/cold/20220101.jpg"),
            imgurl20220102: require("../assets/clothes/cold/20220102.jpg"),
            imgurl20220103: require("../assets/clothes/cold/20220103.jpg"),
            imgurl20220104: require("../assets/clothes/cold/20220104.jpg"),
            imgurl20220200: require("../assets/clothes/cool/20220200.jpg"),
            imgurl20220201: require("../assets/clothes/cool/20220201.jpg"),
            imgurl20220202: require("../assets/clothes/cool/20220202.jpg"),
            imgurl20220203: require("../assets/clothes/cool/20220203.jpg"),
            imgurl20220204: require("../assets/clothes/cool/20220204.jpg")
        }
    },
    methods: {
        //表单自带的方法
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        //设置当前展示的页面
        setInfor() {
            this.sideNavIsArea=false;
            this.sideNavIsInfor=true;
            this.sideNavIsClothes=false;
            this.showClothes = false; 
        },
        setArea() {
            this.sideNavIsArea=true;
            this.sideNavIsInfor=false;
            this.sideNavIsClothes=false;
            this.showClothes = false; 
        },
        setClothes() {
            this.sideNavIsArea=false;
            this.sideNavIsInfor=false;
            this.sideNavIsClothes=true;
            this.showClothes = false; 
        },
        //退出登录
        quit() {
            this.$store.dispatch('changeIfLogin', "false")
            this.$message({
                message: '退出成功',
                type: 'success'
            });
            window.location.href="http://localhost:8080/#/Main"
        },
        //向服务端发送新的用户信息
        addUserInfor() {
            this.$axios.post("http://127.0.0.1:20001/addUserInfor", {
                    "infor_user": this.$store.state.currentUser, 
                    "name": this.form.name, 
                    "phone": this.form.phone,
                    "city": this.form.city,
                    "extra": this.form.extra,
                    "address": this.form.address,
                }
            )            
        },
        //提交用户信息表单的方法
        handleClose(done) {
        if (this.loading) {
            return;
        }
        this.$confirm('确定要提交表单吗？')
            .then(() => {
                this.addUserInfor();
                this.loading = true;
                this.timer = setTimeout(() => {
                    done();
                    // 动画关闭需要一定的时间
                    setTimeout(() => {
                        this.loading = false;
                        this.$axios.get("http://127.0.0.1:20001/getInfor?infor_user=" + this.$store.state.currentUser)
                        .then( res => {
                            console.log(res.data);
                            this.userInfro = res.data[0];
                        });                        
                    }, 400);
                    this.$message({
                        message: '修改成功！',
                        type: 'success'
                    }); 
                }, 1000);
            })
            .catch(() => {});
        },
        cancelForm() {
            this.loading = false;
            this.dialog = false;
            clearTimeout(this.timer);
        },
        //查看细节与取消收藏的记录的方法
        seeClothes(index, row) {
            console.log(index, row.clothesNum)
            this.$axios.get("http://127.0.0.1:20001/getClothesData?clo_num=" + row.clothesNum)
            .then(res => {
                console.log(res.data)
                this.clothesData.name = res.data[0].clo_name;
                this.clothesData.path = this["imgurl"+res.data[0].clo_num];
                this.clothesData.text = res.data[0].clo_text;
                this.sideNavIsClothes = false;
                this.showClothes = true;
            })  
        },
        deleteClothes(index, row) {
            console.log(index, row.clothesNum)
            this.$axios.post("http://127.0.0.1:20001/deleteClothes", {
                "clothesNum": row.clothesNum,  
                "area_user": this.$store.state.currentUser
                }
            )
            this.clothesTableData.splice(index, 1)//删除该行数据
            this.$message({
                message: '取消收藏成功！',
                type: 'success'
            });                        
        },
        closeClothes() {
            this.sideNavIsClothes = true;
            this.showClothes = false;
        },        
    },
    mounted() {
        this.$axios.get("http://127.0.0.1:20001/getInfor?infor_user=" + this.$store.state.currentUser)
        .then( res => {
            this.userInfro = res.data[0];
        });
        this.$axios.get("http://127.0.0.1:20001/getArea?areaUser=" + this.$store.state.currentUser)
        .then( res => {
            this.areaTableData = res.data;
        });
        this.$axios.get("http://127.0.0.1:20001/getClothes?clothesUser=" + this.$store.state.currentUser)
        .then( res => {
            this.clothesTableData = res.data;
        });
    }
}
</script>

<style>
    .login {
        width: 100vw;
        height: 100vh;
        background: url("../assets/bg1.jpg");
        /* background-color: rgb(242,242,242); */

    }
    .loginBox {
        padding-top: 15vh;
        display: flex;
        flex-direction: row;
        font-family: "Microsoft Yahei";        
    }
    .sideBar {
        width: 15vw;
        height: 80vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 15vw;
        border-radius: 1rem;
    }
    .sideBar .photo {
        width: 15vw;
        height: 30vh;
        text-align: center;
    }
    .sideBar .photo #photo {
        display: block;
        margin: 5vh auto;
    }
    .sideBar .tac {
        width: 15vw;
    }
    .infor {
        box-sizing: border-box;
        width: 60vw;
        height: 80vh;
        background-color: white;
        padding: 2rem;
        margin-left: 2vw;
        border-radius: 1rem;
    }
    .infor h2 {
        font-size: 1.5rem;
        font-weight: 400;
    }
    .infor #modify {
        margin-top: 3vh;
    }
    .loved {
        box-sizing: border-box;
        width: 60vw;
        height: 80vh;
        background-color: white;
        padding: 2rem;
        margin-left: 2vw;
        border-radius: 1rem;
    }
    .clothes_details {
        box-sizing: border-box;
        width: 60vw;
        height: 80vh;
        background-color: white;
        padding: 2rem;
        margin-left: 2vw;
        border-radius: 1rem;
    }
    .clothes_details_box {
        box-sizing: border-box;
        width: 50vw;
        height: 60vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .clothes_details img {
        cursor: pointer;
    }
    .clothes_details .title {
        font-size: 1.5rem;
        font-weight: 200;
    }
    .clothes_details .text {
        font-size: 1.15rem;
        font-weight: 100;
    }
</style>