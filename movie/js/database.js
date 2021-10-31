$(function () {
  $("#nav ul li a").attr("href", "pages/userlogin.html" + "?preurl=" + window.location.pathname + window.location.search);////
  $("#nav ul li a").removeAttr("target");
  /************
   * 此处写向后台返回用户是否已登录的代码，然后将结果复制给下面的islogin
   * **********
   * */
  var islogin = false; //若已登录则为true
  if (islogin) {
    $("#nav ul li a").html("已登录");
    $("#nav ul li a").attr("isl", "true");
    $("#nav ul li a").removeAttr("href");

    var exit = "<div id='exit'>退出登录</div>";
    $("#nav ul li").append(exit);
    $("#exit").off("click");
    $("#exit").on("click", function () {
      /************
       * 此处写让后台把用户退出登录的代码
       * **********
       * */
      location.reload();
    });
  } else {
    $("#exit").remove();
    $("#nav ul li a").html("登录/注册");
    $("#nav ul li a").attr("isl", "false");
    $("#nav ul li a").attr("href", "pages/userlogin.html" + "?preurl=" + window.location.pathname + window.location.search);////
  }
});

function markMovie(movieId, type, rate, callback) {
  /*
   把评分信息传给后台，返回评分是否成功
  */
  var result = true;
  if (result) callback("true");
  else callback("false");
}

function fetchMovies(begin, num, callback) {
  /*
    传入开始序号begin，总条数num，传回从begin开始的num条电影数据
    传回的json格式如下：
    [
      {
        "movieId": "10047547",
        "movieName": "饥饿游戏3：嘲笑鸟(下)",
        "rate": "59",
        "imgurl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2282434035.jpg"
      },
      {
        "movieId": "10355625",
        "movieName": "壳中少女：排气",
        "rate": "77",
        "imgurl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1666780812.jpg"
      }
    ]
  */
  // 下面的get为前端测试用，请删除
  $.get("/movie/data/home-movies-temp.json", function (movies) {
    console.log("传入begin=" + begin + " num=" + num);
    var part = movies.slice(begin, begin + num);
    console.log(part);
    callback(part);
  });
}

function fetchSearchMovies(content, callback) {
  /*
  传入搜索框的内容content，传回名字中带有content的电影
  传回的json格式同fetchMovies()中传回的格式
  */
  // 下面的get为前端测试用，请删除
  $.get("/movie/data/home-search-temp.json", function (movies) {
    console.log("传入content=" + content);
    console.log(movies);
    callback(movies);
  });
}

function fetchMovieDetail(movieId, callback) {
  /*
    传入开始电影id movieId，传回该电影的详情信息
    传回的json格式如下：
    {
      "movieId": "10047547",
      "movieName": "饥饿游戏3：嘲笑鸟(下)",
      "rate": "59",
      "director": "弗朗西斯·劳伦斯",
      "screenwriter": "丹尼·斯特朗/彼得·克莱格",
      "actor": "詹妮弗·劳伦斯/乔什·哈切森/利亚姆·海姆斯沃斯/伍迪·哈里森/伊丽莎白·班克斯/朱丽安·摩尔/菲利普·塞默·霍夫曼/杰弗里·怀特/斯坦利·图齐/唐纳德·萨瑟兰/托比·琼斯/山姆·克拉弗林/吉娜·马隆/娜塔莉·多默尔/伊万·罗斯",
      "type": "动作/科幻/冒险",
      "area": "美国",
      "language": "英语",
      "length": "136",
      "imgurl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2282434035.jpg",
      "star": "6,33,96,20,10",
      "recommendMovie": [
        {
          "movieId": "25945280",
          "movieName": "我的特工爷爷",
          "imgurl": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2325687277.jpg"
        },
        {
          "movieId": "25820460",
          "movieName": "美国队长3",
          "imgurl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2332503406.jpg"
        }
      ]
    }
  */
  // 下面的get为前端测试用，请删除
  $.get("/movie/data/detail-movie-temp.json", function (detail) {
    console.log("传入movieId=" + movieId);
    console.log(detail);
    callback(detail);
  });
}

function checkLogin(username, password, callback) {
  /*
  用于验证用户登录
  传入用户名username和密码password，传回验证结果"true"或"false"
  */
  console.log("传入username=" + username + " password=" + password);
  var result = true; // result为验证结果
  console.log(result);
  if (result) callback("true");
  else callback("false");
}

function checkRegist(username, password, callback) {
  /*
  用于用户注册
  传入用户名username和密码password，
  如果用户名存在则传回"false"，反之"true"
  （在前端已经做了重复输入密码的校验）
  */
  console.log("传入username=" + username + " password=" + password);
  var result = true; // result为验证结果
  console.log(result);
  if (result) callback("true");
  else callback("false");
}
