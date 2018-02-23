<template>
    <div class="background">
        <My_header title="忘记密码"></My_header>
        <el-form :model="user_info"
                 status-icon
                 :rules="UserRule"
                 ref="user_info"
                 label-width="2rem"
                 class="demo-ruleForm"
                 label-position="left">
            <el-form-item label="手机号" prop="phone">
                <el-input type="phone"
                          v-model="user_info.phone"
                          auto-complete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="新登录密码" prop="password">
                <el-input type="password"
                          v-model="user_info.password"
                          auto-complete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="确认确认密码" prop="password">
                <el-input type="password"
                          v-model="user_info.retpassword"
                          auto-complete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input type="code"
                          v-model="user_info.code"
                          auto-complete="off">
                </el-input>
                <button class="obtain" @click="send()">获取验证码</button>
            </el-form-item>
        </el-form>
        <div class="foot" @click="to_login
"><p>完成</p></div>
    </div>
</template>
<script>
    import router from "../../router/index"
    import My_header from "../my_header"
    import { MessageBox } from 'mint-ui';
    export default{
        name:'Update_password',
        components:{
            My_header
        },
        data(){
//            手机号验证
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
//            密码验证
            var validatePwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.user_info.retpassword !== '') {
                        this.$refs.UserRule.validateField('password');
                    }
                    callback();
                }
            };
//            再次密码验证
            var validateRet = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.user_info.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
//            验证码验证
            var validateCode = (rule, value, callback) => {
                var reg=/^\d{4}$/;
                if (value === '') {
                    callback(new Error('请输入验证码'))
                } else if (!reg.test(value)) {
                    callback(new Error('请输入正确验证码'));
                } else{
                    callback()
                }
            };
            return {
                checked:false,
                dialogVisible: false,
                user_info: {
                    phone: '',
                    password: '',
                    retpassword: "",
                    code: "",
                    license: '',
                },
                UserRule: {
                    phone: [
                        {validator: validateUser, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePwd, trigger: 'blur'}
                    ],
                    retpassword: [
                        {validator: validateRet, trigger: 'blur'}
                    ],
                    code: [
                        {validator: validateCode, trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            success_register(){
                if(!this.user_info.phone){
                    MessageBox.alert('请输入手机号').then(action => {});
                }else if(!this.user_info.password){
                    MessageBox.alert('请输入密码').then(action => {});
                }else if(!this.user_info.retpassword){
                    MessageBox.alert('请输入再次密码').then(action => {});
                }else if(!this.user_info.code){
                    MessageBox.alert('请输入验证码').then(action => {});
                }else if(!this.user_info.license){
                    MessageBox.alert('请上传营业执照').then(action => {});
                }else if(this.checked===false){
                    MessageBox.alert('请阅读设计师联盟用户协议').then(action => {});
                }else{
                    this.$fetch.register(this.user_info.phone, this.user_info.password, this.user_info.retpassword, this.user_info.code).then(res => {
                        console.log(JSON.stringify(res.user_info.code))
                    })
                }
            },
            send(){
                if(!this.user_info.phone){
                    MessageBox.alert('请输入手机号').then(action => {});
                }else{
                    this.$fetch.code(this.user_info.phone,3).then(res=>{
                    });
                    var send=document.querySelector(".obtain");
                    var num = 300;
                    var timer = setInterval(function () {
                        num--;
                        if(num>0){
                            send.innerHTML = '重新获取('+num+"s)";
                            send.style.color = ' #ccc';
                            send.disabled = ' disabled';
                        }else if (num === 0) {
                            send.disabled = '';
                            send.style.color = '#2D2D2D';
                            send.innerHTML = '获取验证码';
                            clearInterval(timer);
                        }
                    }, 1000)
                }

            },
            to_login(){
                this.$router.push({path:"/login"})
            }
        },
        computed: {
            text: function () {
                return this.time > 0 ? '重新获取('+this.time+")" : '获取验证码';
            }
        }
    }
</script>
<style type="text/css" lang="sass">
    @import "update_password"
</style>