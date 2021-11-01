<template>
  <main>
    <div class="header">
      <span @click="back()">〈</span>
      <h1>书城-全部分类</h1>
    </div>
    <section>
      <div class="left">
        <ul>
          <li
            v-for="(item, index) in list"
            :class="{ current: num == index }"
            @click="change(index)"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in menu[num % 3]">
            <router-link :to="'/details?id=' + item.id">{{
              item.con
            }}</router-link>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      num: 0,
      menu: [
        [
          {
            con: "研究生/本科/专科教材",
            id: "1",
          },
          {
            con: "高职高专教材",
            id: "2",
          },
          {
            con: "成人教育教材",
            id: "3",
          },
          {
            con: "英语工具书",
            id: "4",
          },
          {
            con: "英语读物",
            id: "5",
          },
          {
            con: "英语专项训练",
            id: "6",
          },
          {
            con: "小语种",
            id: "7",
          },
          {
            con: "新概念",
            id: "8",
          },
          {
            con: "口语",
            id: "9",
          },
          {
            con: "听力",
            id: "10",
          },
          {
            con: "英文版读物",
            id: "11",
          },
          {
            con: "日语",
            id: "12",
          },
          {
            con: "法语",
            id: "13",
          },
          {
            con: "韩语",
            id: "14",
          },
          {
            con: "翻译资格",
            id: "15",
          },
          {
            con: "对外汉语",
            id: "16",
          },
          {
            con: "计算机",
            id: "17",
          },
          {
            con: "医药卫生",
            id: "18",
          },
          {
            con: "公务员",
            id: "19",
          },
          {
            con: "学历考试",
            id: "20",
          },
          {
            con: "事业单位",
            id: "21",
          },
        ],
        [
          {
            con: "中国当代小说",
            id: "1",
          },
          {
            con: "中国新现代小说",
            id: "1",
          },
          {
            con: "中国古典小说",
            id: "1",
          },
          {
            con: "四大名著",
            id: "1",
          },
          {
            con: "外国小说",
            id: "1",
          },
          {
            con: "推理小说",
            id: "1",
          },
          {
            con: "恐怖小说",
            id: "1",
          },
          {
            con: "魔幻小说",
            id: "1",
          },
          {
            con: "军事小说",
            id: "1",
          },
          {
            con: "社会小说",
            id: "1",
          },
          {
            con: "都市小说",
            id: "1",
          },
          {
            con: "历史小说",
            id: "1",
          },
          {
            con: "财经小说",
            id: "1",
          },
          {
            con: "武侠小说",
            id: "1",
          },
          {
            con: "连衣裙",
            id: "1",
          },
          {
            con: "乡土小说",
            id: "1",
          },
          {
            con: "科幻小说",
            id: "1",
          },
          {
            con: "世界名著",
            id: "1",
          },
        ],
        [
          {
            con: "文集",
            id: "1",
          },
          {
            con: "纪实文学",
            id: "1",
          },
          {
            con: "文学理论",
            id: "1",
          },
          {
            con: "中国古诗词",
            id: "1",
          },
          {
            con: "外国诗歌",
            id: "1",
          },
          {
            con: "戏剧文学",
            id: "1",
          },
          {
            con: "民间文学",
            id: "1",
          },
          {
            con: "名家作品",
            id: "1",
          },
          {
            con: "文学评论",
            id: "1",
          },
          {
            con: "中国古代随笔",
            id: "1",
          },
          {
            con: "外国随笔",
            id: "1",
          },
          {
            con: "英文原版文学",
            id: "1",
          },
          {
            con: "人物传记",
            id: "1",
          },
          {
            con: "文学理论",
            id: "1",
          },
        ],
      ],
      list: [
        "教育",
        "小说",
        "文艺",
        "传记",
        "童书",
        "人文社科",
        "经管",
        "成功",
        "生活",
        "科技",
        "青春文学",
        "动漫",
        "励志",
        "英文原版",
      ],
    };
  },
  methods: {
    change(a) {
      this.num = a;
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.header {
  border-bottom: 2px solid #e4e4e4;
  background-color: #ffffff;
}
.header span {
  float: left;
  padding: 0 10px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.header h1 {
  line-height: 60px;
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
section .left {
  float: left;
  width: 30%;
  height: calc(100vh - 62px);
  background: #fafafa;
  overflow: scroll;
}
section .left li {
  margin: 10px 0;
  padding: 5px 0;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  border-left: 5px solid #fafafa;
}
section .left .current {
  color: #9e100e;
  border-left: 5px solid #9e100e;
  background: #ffffff;
}
section .right {
  width: 65%;
  margin: auto;
  height: calc(100vh - 62px);
  overflow: scroll;
}
section .right ul li a {
  display: block;
  margin: 5px;
  padding: 5px 0px;
  line-height: 50px;
  color: #000000;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  border-bottom: 1px solid #dddddd;
  background-color: #ffffff;
}
</style>