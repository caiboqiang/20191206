<template>
    <div class="login">
        <div class="login_box">
            <div class="touxiang_box">
                <img src="../../assets/logo.png" alt="头像">
            </div>

			<!-- 定义校验对象 :rules="rules"  ref="表单的引用" -->
			<el-form :rules="loginRules" ref="loginRef" label-width="0px" :model="loginForm" class="login_from">
				
				 <!-- 使用验证规则 prop="name"-->
                <el-form-item prop="name">
                    <el-input prefix-icon="el-icon-user" type="text" v-model="loginForm.name" ></el-input>
                </el-form-item>
               
			    <el-form-item prop="pass">
                    <el-input prefix-icon="el-icon-key" type="password" v-model="loginForm.pass"></el-input>
                </el-form-item>
                
				<el-form-item class="btns">
                    <el-button type="primary" @click="test">接口测试</el-button>
                    <el-button type="primary" @click="on">登入</el-button>
                    <el-button type="info" @click="resetLoginFields">重置</el-button>
                </el-form-item>
            
			</el-form>
        </div>
    </div>
</template>

<script>
import request from '../../util/request'
export default {
    data () {
        return {
			// 数据绑定
			loginForm: {
				name: '',
				pass: ''
			},
			// 表单验证规则对象
			loginRules: {
				// 验证用户名
				name: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
            		{ min: 3, max: 15, message: '长度在 3 到 10 个字符', trigger: 'blur' }
				],
				// 验证密码
				pass: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 6, max: 15, message: '长度在 3 到 10 个字符', trigger: 'blur' }
				]		
			}

		}
    },
    methods: {
        async test () {
            const user = await request.get('/users')
            // console.log(user)
        },
        on () {
			// 表单预验证
			this.$refs.loginRef.validate(valid => {
				console.log(valid)
				// 不发起请求
				// this.$http.get()	
			}) 
		},
		resetLoginFields () {
			console.log(this)
			// 表单重置 首先获取到表单对象的引用 resetFields()函数重置表单 
			this.$refs.loginRef.resetFields()
		}
    }
}
</script>

<style lang="less" scoped>
.login{
    height: 100%; 
    background-color: #2b4b6b;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    // 给边框加圆角
    border-radius: 2px;
    // 添加绝对定位
    position: absolute;
    left: 50%;
    top: 50%;
    // 减位移
    transform: translate(-50%,-50%);
    // 头像设置
    .touxiang_box{
        width: 130px;
        height: 130px;
        // 添加边框线
        border: 1px solid #eee;
        // 添加圆框
        border-radius: 50%;
        padding: 10px;
        // 添加边框阴影
        box-shadow: 0 0 13px #ddd;
        // 添加绝对定位
        position: absolute;
        left: 50%;
        // 减位移
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}
.login_from{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
}
.btns{
    //变成弹性盒模型
    display: flex;
    justify-content: flex-end;
}
</style>
