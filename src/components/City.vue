<template>
    <div id="city">
        <el-dropdown @command="handleCommand" id="nav">
            <span class="el-dropdown-link">
            {{thisCity}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="西安"><router-link to="/City/Xian">西安</router-link></el-dropdown-item>
                <el-dropdown-item command="北京">北京</el-dropdown-item>
                <el-dropdown-item command="上海">上海</el-dropdown-item>
                <el-dropdown-item command="青岛">青岛</el-dropdown-item>
                <el-dropdown-item command="张家界">张家界</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <router-view></router-view>
    </div>
</template>
    
<script>
export default {
    name: "City",
    data(){
        return {
            thisCity: "切换城市"
        }
    },
    methods: {
      handleCommand(command) {
        this.thisCity = command;
      }
    }
}
</script>

<style scoped>
    #city {
        margin-top: 5rem;
        width: 100vw;
        overflow: hidden;  
        position: relative;      
    }
    #nav {
        position: absolute;
        left: 15rem;
        top: 1.5rem;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: black;
        font-size: 1.5rem;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>