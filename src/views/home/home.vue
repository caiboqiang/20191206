<template>
    <!-- <div class="home">
        <span>DDDDDDDDDDDDDD</span>   
       <div class="home_1">
        
       </div>
    </div> -->
    <el-container class="home_container">
        <!-- 头部区 -->
        <el-header class="header">
            <div class="div_img">
                <img src="../../assets/logo.png">
                <span>蔡伯强 论坛管理系统</span>
            </div>
           <el-button type="primary" plain @click="logOut">退出</el-button>
        </el-header>
        <!-- 页面主体区 -->
        <el-container>

            <!-- 左侧区 -->
            <el-aside class="aside" width="200px">
                <!-- 侧边栏菜单 -->
                <el-menu
                    background-color="#333744"
                    text-color="#fff"
                    active-text-color="#409BFF">
                    <!-- 一级菜单 -->
                    <!-- <el-submenu index="1"> -->
                        <!-- 一级菜单模板 -->
                        <!-- <template slot="title"> -->
                        <!-- <i class="el-icon-location"></i>
                        <span>导航一</span>
                        </template> -->
                        <!-- 二级菜单 -->
                        <!-- <el-menu-item index="二级菜单">
                            <i class="el-icon-message-solid"></i>
                        <span>二级菜单</span>
                        </el-menu-item> -->
                    <!-- </el-submenu> -->

                    <el-submenu :index="k.id+''" v-for="k in da" :key="k.id">
                        <!-- 一级菜单模板 -->
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{k.name}}</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item v-for="kk in k.data" :key="kk.id"  :index="kk.id+''">
                            <i class="el-icon-message-solid"></i>
                        <span>{{kk.name}}</span>
                        </el-menu-item>
                    </el-submenu>        
                </el-menu>
            </el-aside>

            <!-- 数据显示区 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
      data () {
        return {
         da: [
             {id:1,name:'蔡',data:[{id:1,name:'蔡1'},{id:2,name:'博'},{id:3,name:'强'}]},
             {id:2,name:'博',data:[{id:1,name:'蔡1'},{id:2,name:'博'},{id:3,name:'强'}]},
             {id:3,name:'强',data:[{id:1,name:'蔡1'},{id:2,name:'博'},{id:3,name:'强'}]}
         ]   
        }
    },
    methods: {
        logOut () {
            this.$router.push('/')
            this.$message.success('退出成功')
        }
    }
    
}
</script>

<style lang="less" scoped>
.home{
    width: 100%;
    height: 100%;
    background-color: #2b4b6b;
    
}
.home_container{
    height: 100%;
}
.header{
    height: 25px;
    background-color: #373d41;
    padding-left: 0;
    display: flex;

    justify-content: space-between;
    align-items: center;
    color: aliceblue;
    font-size: 15px;
    > div {
        display: flex;
        align-items: center;
        span{
            margin-left: 20px;
        }
        
    }
}
.aside{
    height: 100%;
    background-color: #333744;
}
.el-main{
    background-color: #EAEDF1;
}
.div_img{
    width: 50%;
    height: 100%;
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
}
</style>