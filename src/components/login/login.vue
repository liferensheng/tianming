<template>
    <div>
        <header>
            <h3 class="title">登录页</h3>
        </header>
        <div class="logo">
            logo
        </div>
        <el-form :model="user_info"
                 status-icon
                 :rules="UserRule"
                 ref="user_info"
                 label-width="1.2rem"
                 class="demo-ruleForm"
                 label-position="left">
            <el-form-item label="手机号" prop="phone">
                <el-input type="phone"
                          v-model="user_info.phone"
                          auto-complete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password"
                          v-model="user_info.password"
                          auto-complete="off">
                </el-input>
            </el-form-item>
        </el-form>
        <div class="Update_password" @click="forget_password">忘记密码</div>
        <div class="foot">
            <div class="login" @click="login('user_info')">登录</div>
            <div class="register" @click="register()">注册</div>
        </div>
    </div>
</template>
<script>
    import router from "../../router/index"
    import {MessageBox} from 'mint-ui';
    export default{
        name: 'Login',
        data(){
            var validateUser = (rule, value, callback) => {
                var num = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (value === '') {
                    callback(new Error('请输入您手机号'))
                } else if (!num.test(value)) {
                    callback(new Error('请输入正确手机号'));
                } else {
                    callback()
                }
            };
            var validatePwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                user_info: {
                    phone: '',
                    password: '',
                },
                UserRule: {
                    phone: [
                        {validator: validateUser, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePwd, trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            login(){
                if (!this.user_info.phone) {
                    MessageBox.alert('请输入手机号').then(action => {
                    });
                } else if (!this.user_info.password) {
                    MessageBox.alert('请输入密码').then(action => {
                    });
                } else {
                    this.$fetch.login(this.user_info).then(res => {
                        if (res.data.status === "200") {
                            let token = 'Bearer' + ' ' + res.data.data
                            sessionStorage.setItem("token", token);
                            if (res.data.is_validate === "0") {
                                MessageBox.alert('正在审核中……').then(action => {
                                });
                            } else {
                                this.$router.push({path: "/home"})
                            }
                        } else {
                            MessageBox.alert('账号或者密码输入错误').then(action => {
                            });
                        }
                    });
                }
            },
            register(){
                this.$router.push({path: "/Register"})
            },
            forget_password(){
                this.$router.push({path: "/update_password"})
            },
            init(){
                this.phone='';
                this.password='';
            }
        },
        mounted(){
            this.init();
        }
    }
</script>
<style type="text/css" lang="sass">
    @import "./login.scss"
</style>