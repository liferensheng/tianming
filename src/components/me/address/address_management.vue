<template>
    <div class="background">
        <My_header title="地址管理"></My_header>
        <div class="address">
            <ul class="address_box">
                <li class="items" v-for="value in address_list">
                    <div class="items_top">
                        <i class="iconfont " id="add">&#xe611;</i>
                        <div class="user_info">
                            <div class="user_info_top">
                                <div class="user_name">
                                   {{value.receive_name}}
                                </div>
                                <div class="phone">
                                    {{value.receive_phone}}
                                </div>
                            </div>
                            <div class="user_info_address">
                               {{value.region_full_name+value.address_detail}}
                            </div>
                        </div>
                        <i class="iconfont" id="go">&#xe643;</i>
                    </div>
                    <div class="items_bottom">
                        <div class="item_bottom_left" @click="isDefault(value.address_id)">
                            <i class="iconfont"
                               v-if="value.is_default===1"
                            >
                                &#xe639;
                            </i>
                            <i class="iconfont"
                              v-else
                            >
                                &#xe603;
                            </i>
                            <div class="acquiescence">设为默认</div>
                        </div>
                        <ul class="item_bottom_right">
                            <li class="edit_box" @click="edit(value.address_id)">
                                <i class="iconfont">&#xe61f;</i>
                                <div class="editAdd">
                                    编辑
                                </div>
                            </li>
                            <li class="delete_box" @click="address_del(value.address_id)">
                                <i class="iconfont">&#xe664;</i>
                                <div class="delete" >
                                    删除
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="add" @click="add_address">新增收货地址</div>
    </div>
</template>
<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    export default{
        name:"management",
        components:{
            My_header
        },
        data(){
            return{
                address_list:"",
                isChoose:true,
            }
        },
        methods:{
            //修改地址
            edit(editId){
                this.$router.push({path:"/me/address/edit",query: {id: editId}})
            },
            //添加地址
            add_address(){
                this.$router.push({path:"/me/address/add"})
            },
            //获取地址列表
            get_address(){
                this.$fetch.address_list().then(res=>{
                    if(res.data.status==="200"){
                        this.address_list=res.data.data
                    }
                })
            },
            //删除地址
            address_del(id){
                this.$fetch.address_del(id).then(res=>{
                    if(res.data.status==="200"){
                        this.get_address()
                    }
                })
            },
            //选择默认地址
            isDefault(address_id){
                this.$fetch.address_edit(address_id,1).then(res=>{
                    if(res.data.status==="200"){
                        this.get_address()
                    }
                })
            }

        },
        mounted(){
            this.get_address();
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "address_management"
</style>