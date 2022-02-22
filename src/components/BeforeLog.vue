<template>
    <div class="login_body">
        <div id="login_box">
            <div id="h1">账号密码登录</div>
            <div id="h2">Account password login</div> 
            <div class="content">
                <p>请输入账号：</p>
                <input type="text" placeholder="手机号/邮箱(phone/email)" v-model="user"><br>
                <p>请输入密码：</p>
                <input type="password" placeholder="password" v-model="pwd">
                <div class="extra">
                    <div class="extra-info">
                        <p class="info-left"><a href="#">新用户注册</a></p>
                        <p class="info-right"><a href="#">忘记密码</a> </p>
                    </div>                     
                </div>
                <el-button id="submit" :plain="true" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BeforeLog",
    data() {
        return {
            user: "",
            pwd: "",
        }
    },
    methods: {
        login() {
            this.$axios.post("http://127.0.0.1:20001/login", {"user": this.user, "pwd": this.pwd})
            .then(response => {
                console.log((response.data).toString())
                this.$store.dispatch('changeIfLogin', (response.data).toString())
                this.$store.commit('AddUser', this.user)
                if((response.data).toString() == "true"){
                    this.$message({
                        message: '登陆成功',
                        type: 'success'
                    });
                    window.location.href="http://localhost:8080/#/Main"
                }   
                else{
                    this.$message({
                        message: '请输入正确的用户名和密码',
                        type: 'error'
                    });
                } 
            }).catch((error) => {
                console.log(error);
                this.$message({
                    message: '服务器未响应',
                    type: 'error'
                });                
            });               
        }
    }
}
</script>

<style scoped>
.login_body {
    width: 100vw;
    height: 100vh;
    background: url("../assets/bg1.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
a {
    text-decoration: none;
}

#login_box {
    height: 50vh;
    width: 22vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    border-radius: 2rem;
}
#h1 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1vh;
}
#h2 {
    font-size: 1.1rem;
    font-weight: bold;  
    margin-bottom: 4vh;  
}
.content {
    height: 25vh;
    width: 22vw;
    border-radius: 2rem;
}
.content p {
    font-size: 0.7rem;
    font-weight: bold;;
}
.content input{
    height: 5vh;
    width: 22vw;
    outline: none;
    border-radius: 0.5rem;
    border: rgb(220, 223, 230) 1px solid;
}
.content #submit {
    width: 22vw;    
    line-height: 3vh;
    font-size: 1rem;
    margin: 0 auto;
    background-color: #104f55;
    color: #fff;
    cursor: pointer;
    border-radius: 1rem;
    text-align: center;
    transition: all 0.5s;
}
.content #submit:hover {
    background-color: transparent;
    color: black;
    border: 0.1rem black solid;
    font-size: 1.1rem;
}
.extra {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.extra-info {
    line-height: 5vh;
    width: 100%;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
}

.extra-info a {
    color: #104f55;
}
</style>