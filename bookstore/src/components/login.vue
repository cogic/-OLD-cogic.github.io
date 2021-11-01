<template>
  <div>
    <div class="login">
      <div class="top">
        <span @click="back()">×</span>
        <img src="@/assets/img/home/logo.png" alt="" />
        <!-- <h1>登录</h1> -->
      </div>
      <input type="text" placeholder="请输入用户名/手机号/邮箱" />
      <input type="password" placeholder="请输入密码" />
      <button>登录</button>
      <div class="more">
        <span>短信验证码登录</span>
        <span>注册</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.login {
  padding-top: 10px;
}
.login .top span {
  padding: 15px;
  font-weight: bold;
  font-size: 34px;
}
.login .top img {
  display: block;
  width: 80px;
  margin: 20px auto;
  padding: 22px 5px;
  border: 2px solid #917070;
  border-radius: 50%;
  background: linear-gradient(to right top, #dfdfdf, #e2e2e2, #ffffff);
}
.login input {
  display: block;
  width: 80%;
  padding: 20px 20px 10px 20px;
  margin: 10px auto;
  font-size: 18px;
  outline: none;
  border: none;
  border-bottom: 2px solid #d1d1d1;
  border-radius: 0;
}
.login button {
  display: block;
  margin: 40px auto;
  padding: 10px 30%;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  background-color: #db5e5e;
}
.login button:active {
  background-color: #c74c4c;
}
.login button:focus {
  outline: none;
}
.login .more span {
  margin: 0px 20px;
  color: #9b9b9b;
  font-size: 16px;
}
.login .more span:nth-of-type(2) {
  float: right;
}
</style>