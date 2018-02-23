const API={
    /*******************用户版块**********************/
    //登录
    login:"user/login",
    //注册
    register:"user/register",
    //获取验证码
    code:"sms/code",
    //获取用户信息
    user_info:"user/info",
    //退出登录
    user_logout:"user/logout",
    /*******************地址版块**********************/
    //获取地址
    region:"public/region",
    //添加地址
    address_add:"address/add",
    //修改地址
    address_edit:"address/edit",
    //删除地址
    address_del:"address/del",
    //获取用户地址列表
    address_list:"address/list",
    //查看地址详情
    address_detail:"address/detail",
    /*******************普通商品版块**********************/
    //获取普通商品列表
    commodity:"commodity/list",
    //获取商品信息
    commodity_detail:"commodity/detail",
    //获取店铺信息
    store:"shop/shop",
    //获取评价
    commodity_comment:"commodity/comment",

    /*******************众筹商品版块**********************/
    //获取众筹商品列表
    crowd_list:"crowd/list",
    /*******************商店版块**********************/
    //获取店铺列表
    shop_list:"shop/list",
    /*******************收藏版块**********************/
    //删除收藏
    love_del:"love/del",
    //加入收藏
    love_add:"love/add",
    /*******************消息版块**********************/
    //获取消息列表
    notice_list:"notice/list",
    //获取消息详情
    notice_detail:"notice/detail",
    /******************卡券中心***********************/
    //我的卡券中心
    coupon_list:"coupon/list",
    //卡券中心
    coupon_center:"coupon/center",
    //领取卡券
    coupon_order:"coupon/order",
    /*******************购物车版块**********************/
    //加入购物车
    cart_add:"cart/add",
    //获取购物车列表
    cart_list:"cart/list",
    //删除购物车
    cart_del:"cart/del",
    //修改购物车
    cart_edit:"cart/edit",
    /*******************订单版块**********************/
    //取消订单
    order_cancle:"order/cancle",
    //商品直接下单
    order_only:"order/only",
    //提交售后请求
    order_service:"order/service",
    //确认支付弹支付宝
    order_pay:"order/pay",
    //确认收货
    order_receipt:"order/receipt",
    //获取商品详情
    order_detail:"order/detail",
    //获取订单列表
    order_list:"order/list",
    //订单评价页面
    order_comment:"order/comment",
    //购物车预下单
    order_cart:"order/cart",
}
export default API;