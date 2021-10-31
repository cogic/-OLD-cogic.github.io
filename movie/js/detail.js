$(function () {
  var movieId = getUrlParam("mid");
  var type;
  fetchMovieDetail(movieId, function (detail) {
    // 详情信息
    $("title").html(detail.movieName);
    $("#title").html(detail.movieName);
    imageTag = "<img  referrerpolicy ='never' src=" + detail.imgurl + " alt=" + detail.movieName + " onerror=\"this.src='images/lost.png';this.onerror=null\" />";
    $("#img-box").append(imageTag);
    $("#director").html(detail.director.replaceAll("/", " / "));
    $("#screenwriter").html(detail.screenwriter.replaceAll("/", " / "));
    $("#actor").html(detail.actor.replaceAll("/", " / "));
    type = detail.type;
    $("#type").html(detail.type.replaceAll("/", " / "));
    $("#area").html(detail.area.replaceAll("/", " / "));
    $("#language").html(detail.language.replaceAll("/", " / "));
    $("#length").html(detail.length + "分钟");
    for (let i = 0; i < detail.recommendMovie.length; i++) {
      imageTag = "<img  referrerpolicy ='never' src=" + detail.recommendMovie[i].imgurl + " alt=" + detail.recommendMovie[i].movieName + " onerror=\"this.src='images/lost.png';this.onerror=null\" />";
      nameTag = "<h1>" + detail.recommendMovie[i].movieName + "</h1>";
      var swiperSlide = "<div class='swiper-slide'><a href='/movie/pages/detail.html?mid=" + detail.recommendMovie[i].movieId + "' >" + imageTag + nameTag + "</a></div>";
      $(".swiper-wrapper").append(swiperSlide);
    }

    // 用户打分
    var markstar;
    $("#mark .iconfont")
      .on("mouseover", function () {
        var $mouseover = $(this);
        markstar = $mouseover;
        $("#mark .iconfont").each(function (index, element) {
          if (parseInt($(element).attr("data")) <= parseInt($mouseover.attr("data"))) {
            $(element).css("color", "#fad83e");
          } else {
            $(element).css("color", "#ffffff");
          }
        });
        $("#mark .mark-tip").html($mouseover.attr("tip"));
      })
      .on("click", function () {
        // alert("该功能尚未实现");
        if($("#nav ul li a").attr("isl") == "true"){
          var flag = confirm("确定要提交你对《"+$("#title").html()+"》的 “"+markstar.attr("data")+"星” 评价 “"+markstar.attr("tip")+"” 吗？");
          if(flag == true){
            markMovie(movieId, type, markstar.attr("data"), function(flag){
              if(flag == "true"){
                alert("评分成功！");
              } else {
                alert("评分失败，请重试！");
              }
            })
          } else {

          }
        } else{
          alert("请先登录再评分！");
        }
        
      });

    // echart评分展示
    var star = detail.star.split(",");
    var perStar = new Array();
    var sum = 0;
    var score = 0;
    star.forEach((e) => {
      sum += parseInt(e);
    });
    for (let i = 0; i < star.length; i++) {
      perStar[i] = ((parseInt(star[i]) / sum) * 100).toFixed(1);
    }
    for (let i = 0; i < perStar.length; i++) {
      score += (perStar[i] * (i + 1)) / 100;
    }
    $("#rate-tip .score").html((score * 2).toFixed(1));
    $("#rate-tip .back").css("width", score * 20 + "%");
    drawChart(perStar);

    //Swiper
    new Swiper(".swiper-container", {
      slidesPerView: 5,
      spaceBetween: 50,
      slidesPerGroup: 3,
      fillGroupWithBlank: true,
      speed: 800,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
});

function getUrlParam(keyName) {
  var reg = new RegExp("(^|&)" + keyName + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return decodeURI(r[2]);
  return null; //返回参数值
}

function drawChart(starData) {
  var chartDom = document.getElementById("rate-chart");
  var myChart = echarts.init(chartDom);
  var option = {
    xAxis: {
      type: "value",
      show: false,
      max: 150,
    },
    yAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisTick: {
        lineStyle: {
          opacity: 0,
        },
      },
      axisLine: {
        lineStyle: {
          opacity: 0,
        },
      },
      axisLabel: {
        interval: 0,
        fontSize: 12,
        color: "#7B7B7B",
      },
      data: ["1星", "2星", "3星", "4星", "5星"],
    },
    series: [
      {
        type: "bar",
        // barWidth :20,
        // barCategoryGap :"50%",
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          emphasis: {
            fontSize: 16,
          },
        },
        itemStyle: {
          color: "#FDD395",
        },
        emphasis: {
          blurScope: "coordinateSystem",
          itemStyle: {
            color: "#FFC165",
            // shadowColor: "rgba(0,0,0,1)",
            // shadowBlur: 3,
          },
        },
        data: starData,
      },
    ],
  };

  myChart.setOption(option);
}
