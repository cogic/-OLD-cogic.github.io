<template>
  <div class="main">
    <div class="header">
      <img src="@/assets/img/home/logo.png" alt="书流" />
      <div class="search">
        <input type="text" placeholder="书名 作者 出版社 ISBN" />
      </div>
    </div>
    <div class="swiper">
      <mt-swipe :auto="2000">
        <mt-swipe-item
          ><img src="@/assets/img/home/swipe/sw01.jpg" alt="sw" />
        </mt-swipe-item>
        <mt-swipe-item
          ><img src="@/assets/img/home/swipe/sw02.jpg" alt="sw" />
        </mt-swipe-item>
        <mt-swipe-item
          ><img src="@/assets/img/home/swipe/sw03.jpg" alt="sw" />
        </mt-swipe-item>
        <mt-swipe-item
          ><img src="@/assets/img/home/swipe/sw04.jpg" alt="sw" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="zone">
      <ul>
        <li>
          <div>文</div>
          <p>文学书籍</p>
        </li>
        <li>
          <div>史</div>
          <p>历史书籍</p>
        </li>
        <li>
          <div>传</div>
          <p>传记书籍</p>
        </li>
        <li>
          <div>哲</div>
          <p>哲学书籍</p>
        </li>
        <li>
          <div>艺</div>
          <p>艺术书籍</p>
        </li>
        <li>
          <div>政</div>
          <p>政治书籍</p>
        </li>
        <li>
          <div>童</div>
          <p>儿童书籍</p>
        </li>
        <li>
          <div>教</div>
          <p>教育书籍</p>
        </li>
        <li>
          <div>科</div>
          <p>科学书籍</p>
        </li>
        <li>
          <div>生</div>
          <p>生活书籍</p>
        </li>
        <li>
          <div>医</div>
          <p>医学书籍</p>
        </li>
        <li>
          <div>经</div>
          <p>经济书籍</p>
        </li>
      </ul>
    </div>
    <div class="model">
      <div>
        <div class="title">
          <h5>今日上新</h5>
          <h6>发现新上好书</h6>
        </div>
        <img src="@/assets/img/home/model/model01.png" alt="model" />
      </div>
      <div>
        <div class="title">
          <h5>书店排行</h5>
          <h6>发现口碑好店</h6>
        </div>
        <img src="@/assets/img/home/model/model02.png" alt="model" />
      </div>
      <div>
        <div class="title">
          <h5>新书频道</h5>
          <h6>发现书流新书</h6>
        </div>
        <img src="@/assets/img/home/model/model03.png" alt="model" />
      </div>
      <div>
        <div class="title">
          <h5>藏书单</h5>
          <h6>为你推荐好书</h6>
        </div>
        <img src="@/assets/img/home/model/model04.png" alt="model" />
      </div>
    </div>
    <div class="bigtitle"><h1>好书推荐</h1></div>
    <div class="bookbox">
      <ul>
        <li>
          <img src="@/assets/img/home/book/b01.jpg" alt="" />
          <div class="info">
            <h5>有本事</h5>
            <h6>冯唐</h6>
            <p>
              <span>￥25</span>
              <span>起</span>
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/home/book/b02.jpg" alt="" />
          <div class="info">
            <h5>我的天才女友</h5>
            <h6>埃莱娜·费兰特</h6>
            <p>
              <span>￥26</span>
              <span>起</span>
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/home/book/b03.jpg" alt="" />
          <div class="info">
            <h5>虚无时代</h5>
            <h6>彼得·沃森</h6>
            <p>
              <span>￥30</span>
              <span>起</span>
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/home/book/b04.jpg" alt="" />
          <div class="info">
            <h5>字母表谜案</h5>
            <h6>大山诚一郎</h6>
            <p>
              <span>￥40.5</span>
              <span>起</span>
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/home/book/b05.jpg" alt="" />
          <div class="info">
            <h5>麦田里的守望者</h5>
            <h6>杰罗姆·大卫·塞林格</h6>
            <p>
              <span>￥32</span>
              <span>起</span>
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/home/book/b06.jpg" alt="" />
          <div class="info">
            <h5>下沉年代</h5>
            <h6>乔治·帕克</h6>
            <p>
              <span>￥28</span>
              <span>起</span>
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/home/book/b07.jpg" alt="" />
          <div class="info">
            <h5>山之四季</h5>
            <h6>高村光太郎</h6>
            <p>
              <span>￥26.5</span>
              <span>起</span>
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/home/book/b11.jpg" alt="" />
          <div class="info">
            <h5>智人之路</h5>
            <h6>托马斯·特拉佩</h6>
            <p>
              <span>￥34.5</span>
              <span>起</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style  scoped>
.main {
  margin-bottom: 50px;
}
.header {
  width: 100%;
  height: 60px;
}
.header > img {
  float: left;
  height: 30px;
  padding: 15px 10px;
}
.search {
  padding-top: 10px;
  overflow: hidden;
}
.search input {
  width: 80%;
  height: 40px;
  padding-left: 35px;
  color: #000000;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  background-image: url("~@/assets/img/home/search.png");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 10px;
  background-color: #f5f5f5;
}
.search input:focus {
  outline: none;
}
.swiper {
  height: 40vw;
}
.swiper img {
  width: 100vw;
}
.zone {
  border-radius: 7px;
  overflow: scroll;
}
.zone ul {
  width: 151vw;
}
.zone ul li {
  float: left;
  width: 25vw;
  margin: 2vw 0;
  text-align: center;
}

.zone ul li div {
  display: inline-block;
  width: 11vw;
  height: 11vw;
  margin: 1vw;
  line-height: 11vw;
  color: #ffffff;
  font-size: 5vw;
  text-align: center;
  border-radius: 50%;
  background: linear-gradient(to right top, #bb8b4d, #cfa670, #dfb784);
}
.zone ul li p {
  color: #8d8d8d;
  font-size: 3vw;
}
.model {
  margin: 20px;
  overflow: hidden;
}
.model > div {
  float: left;
  width: 48%;
  margin: 1%;
  border-radius: 7px;
  background-color: #fafafa;
  overflow: hidden;
}
.model .title {
  float: left;
}
.model div h5 {
  line-height: 8vw;
  padding-left: 4vw;
  font-size: 4vw;
}
.model div h6 {
  padding-left: 4vw;
  font-size: 2vw;
  color: #8d8d8d;
  font-weight: lighter;
}
.model div img {
  float: right;
  width: 30%;
}
.bigtitle h1 {
  margin-top: 5vw;
  line-height: 50px;
  color: #525252;
  text-align: center;
  font-size: 6vw;
  border-top: 10px solid #e6e6e6;
}
.bookbox {
  /* height: 200px;*/
  margin: 20px;
  overflow: hidden;
}
.bookbox li {
  float: left;
  width: 47%;
  height: 50%;
  margin-bottom: 5%;
  padding-bottom: 5%;
  text-align: center;
  border-radius: 7px;
  background-color: #fafafa;
  box-shadow: inset 0px 0px 1px 0px #d8d8d8;
}
.bookbox li:nth-of-type(2n) {
  margin-left: 5%;
}
.bookbox li img {
  width: 85%;
  height: 47vw;
  margin: 2vw 0;
  border: 1px solid #5a5a5a;
  border-radius: 6px;
}
.bookbox .info {
  width: 100%;
}
.bookbox .info h5 {
  width: 100%;
  text-align: center;
  font-size: 4vw;
}
.bookbox .info h6 {
  width: 100%;
  text-align: center;
  font-size: 2vw;
  font-weight: lighter;
}
.bookbox .info p {
  text-align: center;
}
.bookbox .info p span:nth-of-type(1) {
  color: #c52f2f;
  font-size: 4vw;
}
.bookbox .info p span:nth-of-type(2) {
  color: #909090;
  font-size: 3vw;
}
</style>
