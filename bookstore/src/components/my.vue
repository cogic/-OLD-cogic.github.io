<template>
  <div class="main">
    <div class="top">
      <div>
        <img
          class="rightimg"
          src="@/assets/img/my/message.png"
          alt="message"
        />
        <img
          class="rightimg"
          src="@/assets/img/my/account.png"
          alt="account"
        />
        <img class="headimg" src="@/assets/img/my/user.png" alt="头像" />
        <h1>这是我的名字</h1>
        <h3>买家好评&nbsp;100.00%&nbsp;&nbsp;|&nbsp;&nbsp;信誉&nbsp;1</h3>
      </div>
      <ul class="mys">
        <li>
          10<br />
          <span>收藏</span>
        </li>
        <li>
          15<br />
          <span>订阅店铺</span>
        </li>
        <li>
          22<br />
          <span>足迹</span>
        </li>
      </ul>
      <ul class="order">
        <div>
          <h5>我的订单</h5>
          <h5>查看更多&nbsp;&nbsp;〉</h5>
        </div>
        <li>
          <img src="@/assets/img/my/order00.png" alt="order" /><br />待付款
        </li>
        <li>
          <img src="@/assets/img/my/order01.png" alt="order" /><br />待发货
        </li>
        <li>
          <img src="@/assets/img/my/order02.png" alt="order" /><br />待收货
        </li>
        <li>
          <img src="@/assets/img/my/order03.png" alt="order" /><br />待评价
        </li>
        <li>
          <img src="@/assets/img/my/order04.png" alt="order" /><br />退货退款
        </li>
      </ul>
      <ul class="order server">
        <div>
          <h5>我的服务</h5>
        </div>
        <li>
          <img src="@/assets/img/my/other00.png" alt="order" /><br />收货地址
        </li>
        <li>
          <img src="@/assets/img/my/other01.png" alt="order" /><br />我的订阅
        </li>
        <li>
          <img src="@/assets/img/my/other02.png" alt="order" /><br />联系客服
        </li>
        <li>
          <img src="@/assets/img/my/other03.png" alt="order" /><br />信誉档案
        </li>
        <li>
          <img
            src="@/assets/img/my/other04.png"
            alt="order"
          /><br />监督与建议
        </li>
        <li>
          <img src="@/assets/img/my/other05.png" alt="order" /><br />意见反馈
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.main {
  height: 100vh;
  margin-bottom: 50px;
  background-color: #f3f3f3;
  background-image: url("~@/assets/img/my/background.png");
  background-repeat: no-repeat;
  background-size: 100vw auto;
}
.main .top > div {
  padding: 40px 10px 0px 20px;
  overflow: hidden;
}
.main .top .headimg {
  float: left;
  width: 70px;
  margin-right: 15px;
  border-radius: 50%;
}
.main .top h1 {
  line-height: 45px;
  font-size: 22px;
  font-weight: normal;
}
.main .top h3 {
  float: left;
  font-size: 10px;
  font-weight: normal;
}
.main .top .rightimg {
  float: right;
  width: 30px;
  padding: 10px 2px;
}
.main .mys {
  margin: 20px 10px;
  padding: 10px 0px;
  color: #ffffff;
  border-radius: 10px;
  background-color: #d3595c;
  overflow: hidden;
}
.main .mys li {
  float: left;
  width: calc(100% / 3);
  text-align: center;
  font-size: 15px;
}
.main .order {
  margin: 20px 10px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}
.main .order div {
  padding: 15px 10px;
  border-bottom: 2px solid #f6f6f6;
  overflow: hidden;
}
.main .order div h5:nth-of-type(1) {
  float: left;
  font-size: 15px;
  font-weight: normal;
}
.main .order div h5:nth-of-type(2) {
  float: right;
  color: #a9a9a9;
  font-size: 15px;
  font-weight: normal;
}
.main .order li {
  float: left;
  width: calc(100% / 4);
  margin: 20px 0;
  text-align: center;
  font-size: 12px;
}
.main .order li img {
  width: 28px;
}
</style>