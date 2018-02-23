<template>
    <div>
        <div class="edit">
            <My_header title="添加收货地址"></My_header>
            <form v-model="user_address">
                <div class="form_item">
                    <label for="Receive" style="display:inline-block;width:1.3rem">收货人 :</label>
                    <input type="text"
                           id="receive"
                           v-model.trim="user_address.name"
                           autocomplete="off"
                           >
                </div>
                <div class="form_item">
                    <label for="phone" style="display:inline-block;width:1.3rem">手机号码 :</label>
                    <input type="text"
                           id="phone"
                           v-model.trim="user_address.phone"
                           autocomplete="off">
                </div>
                <div class="form_item">
                    <label for="area" style="display:inline-block;width:1.3rem">所在区域 :</label>
                    <ul class="address_box" id="area"
                         @click="get_Province()">
                        <li id="province">
                            {{myProvince?myProvince:'请选择'}}
                        </li>
                        <li id="city">
                            {{myCity?myCity:'请选择'}}
                        </li>
                        <li id="district">
                            {{myCounty?myCounty:'请选择'}}
                        </li>
                    </ul>
                </div>
                <div class="form_item">
                    <label for="address" style="display:inline-block;width:1.3rem">详细地址 :</label>
                    <input type="text"
                           id="address"
                           v-model.trim="user_address.address_detail"
                           autocomplete="off">
                </div>
            </form>
            <div class="mask" v-show="showChose">
                <div class="ok">
                    <div class="sure" @click="close">
                        确定
                    </div>
                </div>
                <mt-picker :slots="slots" value-key="name" @change="onValuesChange">

                </mt-picker>
            </div>
            <div class="save" @click="save">保存地址</div>
        </div>
    </div>
</template>
<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    import { MessageBox } from 'mint-ui';
    export default{
        data(){
            return {
                showChose: false,
                address:"",
                myAddress:"",
                user_address:{
                    name:"",
                    phone:"",
                    Province_code:"",
                    City_code:"",
                    County_code:"",
                    address_detail:""
                },
                slots: [
                    {
                        flex: 1,
                        values:[],
                        defaultIndex:10,
                        className: 'slot1',
                        textAlign: 'center'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values:[],
                        defaultIndex:0,
                        className: 'slot3',
                        textAlign: 'center'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot4'
                    }, {
                        flex: 1,
                        values: [],
                        defaultIndex:0,
                        className: 'slot5',
                        textAlign: 'center'
                    }
                ],
                myProvince: '',
                myCity: '',
                myCounty: '',
            }
        },
        components: {
            My_header
        },
        methods: {
            //获取地址
            all_address(){
                this.$fetch.region().then(res => {
                    if(res.status===200){
                        this.address=res.data.data;
                    }
                });
            },
            //关闭选择地址框
            close(){
                this.showChose = false;
            },
            get_Province(){
                this.showChose = true;
                let ProvinceList=[];
                for(let i=0;i<this.address.length;i++){
                    this.user_address.Province_code=this.address[i].region_code;
                    ProvinceList.push(this.address[i].region_name)
                }
                this.slots[0].values= ProvinceList
            },
            onValuesChange(picker, values) {
                for(let i=0;i<this.address.length;i++){
                    if(values[0]===this.address[i].region_name){
                        let cityList=[];
                        for(let j=0;j<this.address[i].child.length;j++){
                            this.user_address.City_code=this.address[i].child[j].region_code;
                            cityList.push(this.address[i].child[j].region_name);
                            let CountyList=[];
                            if(values[1]===this.address[i].child[j].region_name){
                                for(let h=0;h<this.address[i].child[j].child.length;h++){
                                    this.user_address.County_code=this.address[i].child[j].child[h].region_code;
                                    CountyList.push(this.address[i].child[j].child[h].region_name);
                                }
                                picker.setSlotValues(2,CountyList);
                            }
                        }
                        picker.setSlotValues(1,cityList);
                    }
                }
                this.myProvince=values[0];
                this.myCity=values[1];
                this.myCounty=values[2];
            },

            save(){
                var num=/^[1][3,4,5,7,8][0-9]{9}$/;
                if(!this.user_address.name){
                    MessageBox.alert('请输入收件人').then(action => {});
                }else if(!num.test(this.user_address.phone)){
                    MessageBox.alert('请输入正确手机号').then(action => {});
                }else if(!this.user_address.phone){
                    MessageBox.alert('请输入手机号码').then(action => {});
                }else if(!this.user_address.Province_code){
                    MessageBox.alert('请选择所在区域').then(action => {});
                }else if(!this.user_address.City_code){
                    MessageBox.alert('请选择所在区域').then(action => {});
                }else if(!this.user_address.County_code){
                    MessageBox.alert('请选择所在区域').then(action => {});
                }else if(!this.user_address.address_detail){
                    MessageBox.alert('请输入详细地址').then(action => {});
                }else{
                    this.$fetch.address_add(this.user_address.name,
                        this.user_address.phone,
                        this.user_address.Province_code,
                        this.user_address.City_code,
                        this.user_address.County_code,
                        this.user_address.address_detail)
                        .then(res=>{
                        if(res.data.status==="200"){
                            this.$router.push({path:"/me/address/management"})
                        }
                    })
                }
            }
        },
        mounted(){
            this.all_address()
        }
    }
</script>
<style type="text/css" lang="sass" >
    @import "./add.scss"
</style>