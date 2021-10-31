$(function () {
  var content = getUrlParam("content");
  console.log(content);
  fetchSearchMovies(content, function (searchData) {
    $("#result h1").html('"' + content + '"的搜索结果');
    if (searchData.length != 0) {
      showMovies(searchData);
    } else {
      $("#result h2").html("无结果");
    }
  });

  function showMovies(moviesData) {
    for (let i = 0; i < moviesData.length; i++) {
      imageTag = "<img  referrerpolicy ='never' src=" + moviesData[i].imgurl + " alt=" + moviesData[i].movieName + " onerror=\"this.src='images/lost.png';this.onerror=null\" />";
      nameTag = "<h1>" + moviesData[i].movieName + "</h1>";
      console.log();
      rateTag = "<h2>评分：" + (moviesData[i].rate / 10).toFixed(1) + "</h2>";
      filmTag = "<div class='film'><a href='/movie/pages/detail.html?mid=" + moviesData[i].movieId + "' target='_blank' >" + imageTag + nameTag + "</a>" + rateTag + "</div>";
      $("#films").append(filmTag);
    }
  }

  // 返回首页
  $("#tool > span").on("click", function () {
      window.open("pages/home.html",target="_self");
  });

  // 返回顶部按钮
  $(window).scroll(function () {
    //只要窗口滚动,就触发下面代码
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
    if (scrollt > 500) {
      //判断滚动后高度超过200px,就显示
      $("#gotop").stop().fadeIn(200); //淡出
    } else {
      $("#gotop").stop().fadeOut(100); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
    }
  });
  $("#gotop").on("click", function () {
    console.log("ddd");
    //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      200
    );
  });
});

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return decodeURI(r[2]);
  return null; //返回参数值
}
