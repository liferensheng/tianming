<template>
    <div class="background">
        <My_header title="注册"></My_header>
        <el-form :model="user_info"
                 status-icon
                 :rules="UserRule"
                 ref="user_info"
                 label-width="1.5rem"
                 class="demo-ruleForm"
                 label-position="left">
            <el-form-item label="手机号" prop="phone">
                <el-input type="phone"
                          v-model="user_info.phone"
                          auto-complete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="password">
                <el-input type="password"
                          v-model="user_info.password"
                          auto-complete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="retpassword">
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
        <div class="uploadBox">
            <input type="file" id="upload" accept="image" @change="upload">
        </div>
        <div class="read">
            <input type="checkbox" @click="read(checked)">
            <span class="agreed">我已阅读并同意</span> <span class="agreement">《设计师联盟用户协议》</span>
        </div>
        <div class="foot" @click="success_register()"><p>注册</p></div>
    </div>
</template>
<script>
    import Exif from 'exif-js'
    import router from "../../router/index"
    import My_header from "../my_header"
    import {MessageBox} from 'mint-ui';
    export default{
        name: 'Register',
        components: {
            My_header
        },
        data(){
//             手机号验证
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
                var reg = /^\d{4}$/;
                if (value === '') {
                    callback(new Error('请输入验证码'))
                } else if (!reg.test(value)) {
                    callback(new Error('请输入正确验证码'));
                } else {
                    callback()
                }
            };
            return {
                checked: false,
                dialogVisible: false,
                headerImage: '',
                picValue: '',
                backCode: "",
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
                },
            };
        },
        methods: {
            read(checked){
                if (checked === false) {
                    this.checked = true
                } else {
                    this.checked = false
                }
            },
            success_register(){
                if (!this.user_info.phone) {
                    MessageBox.alert('请输入手机号').then(action => {
                    });
                } else if (!this.user_info.password) {
                    MessageBox.alert('请输入密码').then(action => {
                    });
                } else if (!this.user_info.retpassword) {
                    MessageBox.alert('请输入再次密码').then(action => {
                    });
                } else if (!this.user_info.code) {
                    MessageBox.alert('请输入验证码').then(action => {
                    });
                } else if (this.user_info.code !== this.backCode) {
                    MessageBox.alert('验证码错误').then(action => {
                    });
                } else if (!this.user_info.license) {
                    MessageBox.alert('请上传营业执照').then(action => {
                    });
                } else if (this.checked === false) {
                    MessageBox.alert('请阅读设计师联盟用户协议').then(action => {
                    });
                } else {
                    this.$fetch.register(this.user_info.phone,
                        this.user_info.password,
                        this.user_info.retpassword,
                        this.user_info.code,
                        this.user_info.license)
                        .then(res => {
                            if (res.data.status === "200") {
                                this.$router.push({path: "/success_register"})
                            }
                        })
                }
            },
            //发送验证码
            send(){
                if (!this.user_info.phone) {
                    MessageBox.alert('请输入手机号').then(action => {
                    });
                } else {
                    this.$fetch.code(this.user_info.phone, 1).then(res => {
                        if (res.data.status === "200") {
                            this.backCode = res.data.data
                        } else if (res.data.status === "404") {
                            MessageBox.alert("五分钟内只能发送一次").then(action => {
                            });
                        }
                    });
                    var send = document.querySelector(".obtain");
                    var num = 300;
                    var timer = setInterval(function () {
                        num--;
                        if (num > 0) {
                            send.innerHTML = '重新获取(' + num + "s)";
                            send.style.color = ' #ccc';
                            send.disabled = ' disabled';
                        } else if (num === 0) {
                            send.disabled = '';
                            send.style.color = '#2D2D2D';
                            send.innerHTML = '获取验证码';
                            clearInterval(timer);
                        }
                    }, 1000)
                }
            },
            upload (e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                this.picValue = files[0];
                this.imgPreview(this.picValue);
            },
            imgPreview (file) {
                let self = this;
                let Orientation;
                //去获取拍照时的信息，解决拍出来的照片旋转问题
                Exif.getData(file, function () {
                    Orientation = Exif.getTag(this, 'Orientation');
                });
                // 看支持不支持FileReader
                if (!file || !window.FileReader) return;

                if (/^image/.test(file.type)) {
                    // 创建一个reader
                    let reader = new FileReader();
                    // 将图片2将转成 base64 格式
                    reader.readAsDataURL(file);
                    // 读取成功后的回调
                    reader.onloadend = function () {
                        let result = this.result;
                        let img = new Image;
                        img.src = result;
                        img.onload = function () {//必须onload之后再画
//                            strDataURI = cvs.toDataURL();//获取canvas base64数据
                        }
                        //判断图片是否大于100K,是就直接上传，反之压缩图片
                        if (this.result.length <= (100 * 1024)) {
                            self.user_info.license = this.result;
//                            let img = new Image();
//                            img.src = this.result;
//                            self.drawToCanvas(this.result)
                        } else {
                            img.onload = function () {
                                let data = self.compress(img, Orientation);
                                self.user_info.license = data;

                            }
                        }
                    }
                }
            },
//            drawToCanvas(imgData){
//                var cvs = document.querySelector('#cvs');
//                cvs.width = "300";
//                cvs.height = "400";
//                var ctx = cvs.getContext('2d');
//                var img = new Image;
//                img.src = imgData;
//                img.onload = function () {//必须onload之后再画
//                    ctx.drawImage(img, 0, 0, 300, 400);
//                    strDataURI = cvs.toDataURL();//获取canvas base64数据
//                }
//            },
            rotateImg (img, direction, canvas) {
                //最小与最大旋转方向，图片旋转4次后回到原方向
                const min_step = 0;
                const max_step = 3;
                if (img == null)return;
                //img的高度和宽度不能在img元素隐藏后获取，否则会出错
                let height = img.height;
                let width = img.width;
                let step = 2;
                if (step == null) {
                    step = min_step;
                }
                if (direction == 'right') {
                    step++;
                    //旋转到原位置，即超过最大值
                    step > max_step && (step = min_step);
                } else {
                    step--;
                    step < min_step && (step = max_step);
                }
                //旋转角度以弧度值为参数
                let degree = step * 90 * Math.PI / 180;
                let ctx = canvas.getContext('2d');
                switch (step) {
                    case 0:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0);
                        break;
                    case 1:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, 0, -height);
                        break;
                    case 2:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, -height);
                        break;
                    case 3:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, 0);
                        break;
                }
            },
            compress(img, Orientation) {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext('2d');
                //瓦片canvas
                let tCanvas = document.createElement("canvas");
                let tctx = tCanvas.getContext("2d");
                let initSize = img.src.length;
                let width = img.width;
                let height = img.height;
                //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
                let ratio;
                if ((ratio = width * height / 4000000) > 1) {
                    console.log("大于400万像素")
                    ratio = Math.sqrt(ratio);
                    width /= ratio;
                    height /= ratio;
                } else {
                    ratio = 1;
                }
                canvas.width = width;
                canvas.height = height;
                //        铺底色
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                //如果图片像素大于100万则使用瓦片绘制
                let count;
                if ((count = width * height / 1000000) > 1) {
                    console.log("超过100W像素");
                    count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
                    //            计算每块瓦片的宽和高
                    let nw = ~~(width / count);
                    let nh = ~~(height / count);
                    tCanvas.width = nw;
                    tCanvas.height = nh;
                    for (let i = 0; i < count; i++) {
                        for (let j = 0; j < count; j++) {
                            tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                        }
                    }
                } else {
                    ctx.drawImage(img, 0, 0, width, height);
                }
                //修复ios上传图片的时候 被旋转的问题
                if (Orientation != "" && Orientation != 1) {
                    switch (Orientation) {
                        case 6://需要顺时针（向左）90度旋转
                            this.rotateImg(img, 'left', canvas);
                            break;
                        case 8://需要逆时针（向右）90度旋转
                            this.rotateImg(img, 'right', canvas);
                            break;
                        case 3://需要180度旋转
                            this.rotateImg(img, 'right', canvas);//转两次
                            this.rotateImg(img, 'right', canvas);
                            break;
                    }
                }
                //进行最小压缩
                let ndata = canvas.toDataURL('image/jpeg', 0.1);
                tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
                return ndata;
            },
        },
        computed: {
            text: function () {
                return this.time > 0 ? '重新获取(' + this.time + ")" : '获取验证码';
            },
        },

    }
</script>
<style type="text/css" lang="sass">
    @import "./register.scss"
</style>