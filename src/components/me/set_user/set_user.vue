<template>
    <div class="aa">
        <My_header title="设置"></My_header>
        <div class="set">
            <ul class="my_content">
                <li class="change_pic">
                    <div class="text">更换头像</div>
                    <div class="img_box">
                        <img :src="user_info.wx_img" alt="">
                    </div>
                </li>
                <li class="account_num">
                    <div class="account">账号</div>
                    <div class="num">{{user_info.account}}</div>
                </li>
                <li class="update_passWord" @click="updatePassword">
                    <div class="password">修改密码</div>
                    <i class="iconfont go_to">&#xe643;</i>
                </li>
            </ul>
            <div class="exit" @click="to_login">退出当前账号</div>
        </div>
    </div>
</template>
<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    export default{
        name:"set",
        components:{
            My_header
        },
        data(){
            return{
                user_info:""
            }
        },
        methods:{
            //退出登录
            to_login(){
                this.$fetch.user_logout().then(res=>{
                    if(res.data.status==="200"){
                        alert(1)
                        this.$router.push({path:"/"});
                        sessionStorage.removeItem("token");
                    }
                })
            },
            //修改密码
            updatePassword(){
                this.$router.push({path:"/update_password"})
            },
            //获取用户信息
            get_user_info(){
                this.$fetch.user_info().then(res=>{
                    if(res.data.status==="200"){
                        this.user_info=res.data.data
                    }
                })
            }
        },
        mounted(){
            this.get_user_info()
        }
    }
</script>
<style type="text/css" scoped="" lang="sass">
    @import "set_user"
</style>