<template>
    <div class="content">
        <div class="sub-cont">
            <div class="img">
                <div class="img__text m--in">
                    <h2>已有帐号？</h2>
                    <p>有帐号就登录吧，好久不见了！</p>
                </div>
                <div class="img__btn" @click="goLogin">
                    <span class="m--in">去 登 录</span>
                </div>
            </div>
            <div class="form sign-up">
                <h1>G-Cloud 云盘注册</h1>
                <label>
                    <span>用 户 名</span>
                    <input type="text" v-model="registerForm.username" @keyup.enter="doRegister" ref="usernameEl"/>
                </label>
                <label>
                    <span>密 码</span>
                    <input type="password" v-model="registerForm.password" @keyup.enter="doRegister"/>
                </label>
                <label>
                    <span>确 认 密 码</span>
                    <input type="password" v-model="registerForm.rePassword" @keyup.enter="doRegister"/>
                </label>
                <label>
                    <span>密 保 问 题</span>
                    <input type="text" v-model="registerForm.question" @keyup.enter="doRegister"/>
                </label>
                <label>
                    <span>密 保 答 案</span>
                    <input type="text" v-model="registerForm.answer" @keyup.enter="doRegister"/>
                </label>
                <el-button type="warning" class="submit" :loading="loading" @click="doRegister" round>注 册</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>

import {onMounted, reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import panUtil from '@/utils/common'
import {ElMessage} from 'element-plus'
import userService from '@/api/user'

const router = useRouter()

const loading = ref(false)

const usernameEl = ref(null)
onMounted(() => {
    usernameEl.value.focus()
})

const registerForm = reactive({
    username: '',
    password: '',
    rePassword: '',
    question: '',
    answer: ''
})

const doRegister = () => {
    if (checkRegisterForm()) {
        loading.value = true
        userService.register(registerForm, () => {
            ElMessage.success('注册成功！即将跳转至登录页面')
            setTimeout(goLogin, 1000)
            loading.value = false
        }, res => {
            ElMessage.error(res.message)
            loading.value = false
        })
    }
}

const checkRegisterForm = () => {
    if (!panUtil.checkUsername(registerForm.username)) {
        ElMessage.error('请输入6-16位只包含数字和字母的用户名')
        return false
    }
    if (!panUtil.checkPassword(registerForm.password)) {
        ElMessage.error('请输入8-16位的密码')
        return false
    }
    if (!registerForm.rePassword || registerForm.password !== registerForm.rePassword) {
        ElMessage.error('两次密码输入不一致')
        return false
    }
    if (!registerForm.question) {
        ElMessage.error('请输入密保问题')
        return false
    }
    if (!registerForm.answer) {
        ElMessage.error('请输入密保答案')
        return false
    }
    return true
}

const goLogin = () => {
    router.push({name: 'Login'})
}

</script>

<style scoped>
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

input {
    border: none;
    outline: none;
    background: none;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.content {
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 900px;
    height: 550px;
    margin: -300px 0 0 -450px;
    background: #fff;
    border: 1px solid #e3e3e4;
    border-radius: 20px;
}

.form {
    position: relative;
    width: 640px;
    height: 100%;
    padding: 35px 30px 0;
}

.sub-cont {
    overflow: hidden;
    position: absolute;
    left: 640px;
    top: 0;
    width: 900px;
    height: 100%;
    padding-left: 260px;
    background: #fff;
}

button {
    display: block;
    margin: 0 auto;
    width: 260px;
    height: 36px;
    border-radius: 30px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
}

.img {
    overflow: hidden;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 260px;
    height: 100%;
    padding-top: 360px;
}

.img:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 900px;
    height: 100%;
    background-image: url(@/assets/imgs/bg.jpg);
    background-size: cover;
}

.img:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}

.img__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
}

.img__text h2 {
    margin-bottom: 10px;
    font-weight: normal;
}

.img__text p {
    font-size: 14px;
    line-height: 1.5;
}

.img__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: 36px;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
}

.img__btn:after {
    content: '';
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 30px;
}

.img__btn span {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

h1 {
    width: 100%;
    font-size: 30px;
    text-align: center;
    font-weight: normal;
    color: coral; 
    font-weight: 700;
}

label {
    display: block;
    width: 260px;
    margin: 25px auto 0;
    text-align: center;
}

label span {
    font-size: 13px;
    color: #909399;
    text-transform: uppercase;
}

input {
    display: block;
    width: 100%;
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    text-align: center;
}

.submit {
    background:coral;
    margin-top: 40px !important;
}

.content .sub-cont {
    -webkit-transform: translate3d(-640px, 0, 0);
    transform: translate3d(-640px, 0, 0);
}

.content .img:before {
    -webkit-transform: translate3d(640px, 0, 0);
    transform: translate3d(640px, 0, 0);
}

</style>