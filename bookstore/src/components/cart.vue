<template>
  <div class="main">
    <div class="header">
      <h1>购物车</h1>
      <h2>共({{ goods.length }})件</h2>
      <span>编辑</span>
    </div>
    <div class="content">
      <div>
        <ul class="goods" v-for="(item, index) in goods">
          <li>
            <img class="circle" :src="item.select" alt="n" @click="change(index)" />
            <span>
              <img class="circle" src="@/assets/img/cart/store.png" alt="n" />
              <h5>{{ item.store }}&nbsp;〉</h5>
            </span>
          </li>
          <li>
            <img class="circle" :src="item.select" alt="n" @click="change(index)" />
            <span>
              <img :src="item.bookimg" alt="n" />
              <div class="right">
                <div>{{ item.bookinfo }}</div>
                <div>包邮</div>
                <div>
                  ￥{{ item.bookprice }}
                  <span @click="add(index)">+</span>
                  <input type="text" :value="item.booknum" />
                  <span @click="sub(index)">-</span>
                </div>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [
        {
          store: '燕青1234的书摊',
          bookimg: require('@/assets/img/cart/b01.png'),
          bookinfo: '约翰·克利斯朵夫（2、3、4）三本合售',
          bookprice: 15,
          booknum: 5,
          select: require('@/assets/img/cart/circle.png'),
        },
        {
          store: '品翰墨书香',
          bookimg: require('@/assets/img/cart/b02.png'),
          bookinfo: '傅雷家书（三联初版纪念本）',
          bookprice: 7.8,
          booknum: 2,
          select: require('@/assets/img/cart/circle-s.png'),
        },
        {
          store: '松竹轩',
          bookimg: require('@/assets/img/cart/b03.png'),
          bookinfo: '袁世硕文集',
          bookprice: 235,
          booknum: 1,
          select: require('@/assets/img/cart/circle.png'),
        },
        {
          store: '智胜图书专营店',
          bookimg: require('@/assets/img/cart/b04.png'),
          bookinfo: '乡下人：沈从文与近代中国（1902——1947）',
          bookprice: 55,
          booknum: 6,
          select: require('@/assets/img/cart/circle.png'),
        },
      ],
    };
  },
  methods: {
    sub(i) {
      if (this.goods[i].booknum > 1) this.goods[i].booknum--;
    },
    add(i) {
      this.goods[i].booknum++;
    },
    change(i) {
      if (this.goods[i].select == require('@/assets/img/cart/circle-s.png'))
        this.goods[i].select = require('@/assets/img/cart/circle.png');
      else this.goods[i].select = require('@/assets/img/cart/circle-s.png');
    },
  },
};
</script>
<style scoped>
.main {
  background-color: #f2f2f2;
}
.main .header {
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 10px 0;
  text-align: center;
  background-color: #ffffff;
  overflow: hidden;
}
.main .header h1 {
  display: inline-block;
  padding-left: 50px;
  font-size: 20px;
  font-weight: normal;
  vertical-align: middle;
}
.main .header h2 {
  display: inline-block;
  font-size: 12px;
  font-weight: normal;
  vertical-align: bottom;
}
.main .header span {
  vertical-align: middle;
  float: right;
  font-size: 16px;
  margin-right: 20px;
}
.main .goods {
  margin: 20px 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}
.content {
  padding: 40px 0 55px 0;
}
.circle {
  width: 20px;
  margin-right: 8px;
}
.main .goods li * {
  vertical-align: middle;
}
.main .goods li:nth-of-type(1) {
  margin-bottom: 20px;
}
.main .goods li:nth-of-type(1) h5 {
  display: inline-block;
  line-height: 20px;
  font-size: 14px;
  font-weight: normal;
}
.main .goods li:nth-of-type(2) span img {
  width: 100px;
  height: 100px;
  border-radius: 7px;
}
.main .goods .right {
  float: right;
  width: 60%;
}
.main .goods .right div:nth-of-type(1) {
  font-size: 16px;
}
.main .goods .right div:nth-of-type(2) {
  display: inline-block;
  margin: 10px 0;
  padding: 0px 4px;
  color: #bd5c5b;
  font-size: 14px;
  border: 1px solid #bd5c5b;
  border-radius: 7px;
}
.main .goods .right div:nth-of-type(3) {
  color: #b1413f;
  font-size: 14px;
  border-radius: 7px;
}
.main .goods .right div:nth-of-type(3) span {
  float: right;
  width: 20px;
  height: 20px;
  text-align: center;
  border: 1px solid #dbdbdb;
}

.main .goods .right div:nth-of-type(3) span:active {
  background-color: #dddddd;
}

.main .goods .right div:nth-of-type(3) span:nth-of-type(1) {
  border-radius: 0 5px 5px 0;
}
.main .goods .right div:nth-of-type(3) span:nth-of-type(2) {
  border-radius: 5px 0 0 5px;
}
.main .goods .right div:nth-of-type(3) input {
  float: right;
  width: 40px;
  height: 20px;
  text-align: center;
  border: none;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  border-radius: 0;
}
.search input:focus {
  outline: none;
}
</style>