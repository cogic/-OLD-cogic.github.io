<template>
  <main>
    <router-view></router-view>
    <div class="dev">
      <router-link to="/home"
        ><img src="@/assets/img/dev/home.png" alt="" />
        <img src="@/assets/img/dev/home-s.png" alt="" />
        <p>首页</p>
      </router-link>
      <router-link to="/city">
        <img src="@/assets/img/dev/store.png" alt="" />
        <img src="@/assets/img/dev/store-s.png" alt="" />
        <p>书城</p>
      </router-link>
      <router-link to="/cart">
        <img src="@/assets/img/dev/cart.png" alt="" />
        <img src="@/assets/img/dev/cart-s.png" alt="" />
        <p>购物车</p>
      </router-link>
      <router-link to="/my">
        <img src="@/assets/img/dev/my.png" alt="" />
        <img src="@/assets/img/dev/my-s.png" alt="" />
        <p>我的</p>
      </router-link>
      <router-link to="/more">
        <img src="@/assets/img/dev/more.png" alt="" />
        <p>更多</p>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.dev {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
  border-top: 1px solid #eaeaea;
  background-color: rgb(255, 255, 255);
}
.dev a {
  float: left;
  width: 20%;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
}
.dev img {
  width: 27px;
}
.dev img:nth-of-type(1) {
  display: inline-block;
}
.dev img:nth-of-type(2) {
  display: none;
}
.dev .router-link-exact-active img:nth-of-type(1) {
  display: none;
}
.dev .router-link-exact-active img:nth-of-type(2) {
  display: inline-block;
}
.dev .router-link-exact-active p {
  color: #c21c2b;
}
</style>
