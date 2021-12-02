<template>
    <div id="beforeLog">
        <div class="login-box">
            <h1>登录</h1>
            <div class="input-box">
                <div class="input-text">
                    <span class='iconfont icon-mine'></span>
                    <input type="text" placeholder="手机号">
                </div>
                <div class="input-text">
                    <span class='iconfont icon-lock'></span>
                    <input type="password" placeholder="密码">
                </div>
                <div class="input-btn">
                    登录
                </div>
                <div class="sign-up">
                    还没账户？<a href="#">立即注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BeforeLog"
}
</script>

<style scoped>
#beforeLog {
    min-height: 100vh;
    background-image: url("../assets/beforeLogBg.jpg");
    background-size: cover;
    border-top: 0.1px solid black;
}
.login-box{
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    width: 600px;
    height: 400px;
    background-color: rgba(0,0,0,.5);
    border: 10px;
    padding: 20px 50px;
    border-radius: 20px;
    transition: all 0.5s;
}
.login-box:hover {
    transform: scale(1.1);
}
.login-box h1{
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 30px;
}
.login-box .input-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transform: translateY(-35px);
}
.login-box .input-box .input-text{
    width: 100%;
    display: flex;
    justify-content: center;
}
.login-box .input-box .input-text span{
    color: white;
    font-size: 18px;
    margin-top: 20px;
}
.login-box .input-box .input-text input{
    border: 0;
    padding: 6px;
    border-bottom: 1px solid white;
    background-color: #ffffff00;
    color: #fff;
    margin-top: 20px;
}
.login-box .input-box .input-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 145px;
    height: 25px;
    color: #fff;
    background: linear-gradient(120deg,#a6c0fe 0%,#f68084 100%);
    border-radius: 25px;
    cursor: pointer;
}
.login-box .input-box .input-btn:hover{
    background: transparent;
    color: white;
    border: 1px solid white;
}
.login-box .input-box .sign-up{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    color: white;
    font-size: 15px;
}
.login-box .input-box .sign-up a{
    color: #3498db;
    text-decoration: none;
    cursor: pointer;
}
</style>