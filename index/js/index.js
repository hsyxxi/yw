//点击跳转到登录注册页
$(".headResLog").click(function () {
   window.open("../regLogin/regLogin.html");
});

//轮播图
var imgs = document.getElementsByClassName("pic");
var dots = document.getElementsByClassName("dot");
var liDot = document.getElementsByClassName("liDot");
var i = 0;
var getChange = setInterval(function () {
   for (var key in imgs) {
      imgs[key].className = "pic";
      dots[key].className = "dot";
   }
   if (i < imgs.length) {
      imgs[i].className = "show pic";
      dots[i].className = "dot active";
      i++;
      if (i == 8) {
         i = 0;
      }
   };
}, 2000);


//鼠标移入移出隐藏效果
//尾部左边一个二维码，头部右边的二维码
function getCode(x, y) {
   $(x).mouseover(function () {
      $(y).show();
   }).mouseout(function () {
      $(y).hide();
   });
}
getCode(".footLogoWx", ".footLogoWxDown");
getCode(".codeShow", ".headHover");
getCode(".blockImg", ".headHover");

//尾部右边两个二维码
function getDownPic(x, y) {
   $(x).mouseover(function () {
      $(".downCode").show(), $(y).show();
   }).mouseout(function () {
      $(".downCode").hide(), $(y).hide();
   })
}
getDownPic("#footDownDarkIos", "#codeIos");
getDownPic("#footDownDarkAnd", "#codeAndroid");

//页面加载后即执行
window.onload = function () {
   //点击跳转至产品页
   $("#hrefProduct").click(function () {
      window.open("../product/product.html");
   });

   //推荐鼠标移入放大效果
   $(".tj").mouseover(function () {
      var $x = $(this);
      $x.children("img.tjImg").css(
         "transform", "scale(1.06,1.06)"
      )
   }).mouseout(function () {
      var $x = $(this);
      $x.children("img.tjImg").css(
         "transform", "scale(1,1)"
      )
   })

   //推荐点击切换div效果
   function getTjPart(u, i) {
      $(u).click(function () {
         $(i).css({
            "display": "block",
         }).siblings("div").css({
            "display": "none"
         }), $(u).css({
            "border-top": "1px solid #ddd",
            "border-left": "1px solid #ddd",
            "border-right": "1px solid #ddd",
            "border-bottom": "1px solid #fff"
         }), $(u).siblings("div").css({
            "border-top": "1px solid #fff",
            "border-left": "1px solid #fff",
            "border-right": "1px solid #fff",
            "border-bottom": "1px solid #ddd",
         })
      })
   }
   getTjPart("#tjLink2", "#tjPart2");
   getTjPart("#tjLink3", "#tjPart3");
   getTjPart("#tjLink4", "#tjPart4");
   getTjPart("#tjLink1", "#tjPart1");

   //最新上架简介显示效果
   function getDiv(x, m) {
      $(x).mouseover(function () {
         var $x = $(this);
         $x.children("img").css({
            "transform": "scale(1.07,1.07)"
         }), $x.children(m).css("opacity", "1")
      }).mouseout(function () {
         var $x = $(this);
         $x.children("img").css({
            "transform": "scale(1,1)"
         }), $x.children(m).css("opacity", "0")
      })
   }
   getDiv(".front", ".newImgP");
   getDiv(".front", ".newImgPs");
   getDiv(".back", ".newImgP");
   getDiv(".back", ".newImgPs");

   //最新上架点击按钮翻转切换图片效果
   function getRotate(n) {
      $(".tjChange").click(function () {
         $(n).children(".front").css({
               "transform": "rotate3D(0,1,0,-180deg)"
            })
            .removeClass("front").addClass("back").siblings("div.back").css({

               "transform": "rotate3D(0,1,0,-360deg)"
            })
            .removeClass("back").addClass("front")
      })
   }
   getRotate(".newImg1");
   getRotate(".newImg2");

   //专题左右移动效果
   $(".specialBodyDiv").mouseover(function () {
      var spI = $(this).children(".specialImg");
      spI.css("left", "0px")
   }).mouseout(function () {
      var spI = $(this).children(".specialImg");
      spI.css("left", "-60px")
   });

   //专题左右按钮点击效果
   var pageW = window.innerWidth; //获取网页显示区域宽度
   var math = Math.floor(pageW / 352); //计算当前显示区可显示的完整div数
   var pics = $(".specialBodyDiv").length; //div总数
   var num = Math.ceil(352 * pics / pageW);
   var $spDiv = $(".specialBody");
   var move = 0;
   //点击右键的移动效果
   $(".specialRight").click(function () {
      if (move > -num) {
         move--;
         var k = move * math * 352; //获取每次移动的右边距数值
         $spDiv.css("margin-left", k);
         if (-move == num) {
            $spDiv.css("margin-left", -7245) //最后一次距离
         }
      }

   })
   //点击左键的移动效果
   $(".specialLeft").click(function () {
      if (move < 0) {
         move++;
         var k = move * math * 352;
         $spDiv.css("margin-left", k);
         if (move == 0) {
            var mrL = pageW - math * 352;
            $spDiv.css("margin-left", 0)
         }
      }
   })

}

//圆点移动并放大效果
function getMove(z, x, c) {
   $(z).mouseover(function () {
      $(x).css("left", "55px"), $(c).css("right", "55px"),
         $(x).css("width", "7.5px"), $(x).css("height", "7.5px"),
         $(c).css("width", "7.5px"), $(c).css("height", "7.5px")
   }).mouseout(function () {
      $(x).css("left", "45px"), $(c).css("right", "45px"),
         $(x).css("width", "6px"), $(x).css("height", "6px"),
         $(c).css("width", "6px"), $(c).css("height", "6px")
   });
}
getMove(".whyUsPic1", ".whyUsPicL>.whyUsPicDotL", ".whyUsPicL>.whyUsPicDotR");
getMove(".whyUsPic2", ".whyUsPicC>.whyUsPicDotL", ".whyUsPicC>.whyUsPicDotR");
getMove(".whyUsPic3", ".whyUsPicR>.whyUsPicDotL", ".whyUsPicR>.whyUsPicDotR");

//开始GO的移动变色效果
$(".startText").mouseover(function () {
   $(".changeColor").css("width", "100%"),
      $(".startText>p").css("left", "51%");
}).mouseout(function () {
   $(".changeColor").css("width", "0%");
   $(".startText>p").css("left", "40%");
})

//艺术家左边div鼠标移入移动效果
function getMoveDiv(n, m, k) {
   $(n).mouseover(function () {
      var $n = $(this);
      $(m).css({
            "transform": "translate(15px,15px)"
         }),
         $(k).css({
            "transform": "translate(20px,20px)"
         })
   }).mouseout(function () {
      var $n = $(this);
      $(m).css({
            "transform": "translate(0px,0px)"
         }),
         $(k).css({
            "transform": "translate(0px,0px)"
         })
   });
}
getMoveDiv(".artistImgs1", ".artistImgs1>.movePic1", ".artistImgs1>.movePic2");
getMoveDiv(".artistImgs2", ".artistImgs2>.movePic1", ".artistImgs2>.movePic2");
getMoveDiv(".artistImgs3", ".artistImgs3>.movePic1", ".artistImgs3>.movePic2");




//ajax动态获取数据  推荐/最新上架
//推荐部分传参
$(function () {
   $.ajax({
      url: "http://localhost:3000/indexProduct",
      type: "get",
      dataType: "json",
      success: function (result) {
         var p = result;
         //推荐部分传参
         var html = `<div id="tjPart1">
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[0].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[0].partist}</h3>
               <a href="">${p[0].ptitle}，${p[0].pyear}<br>${p[0].papar} ${p[0].psize}</a>
               <p>￥${p[0].price}</p>
            </div>
         </div>
         <div class="tjDiv">
            <div class="tj" id="hrefProduct">
               <img src=${p[1].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[1].partist}</h3>
               <a href="../product/product.html" target="_blank">${p[1].ptitle}，${p[1].pyear}<br>${p[1] .papar} ${p[1].psize}</a>
               <p>￥${p[1].price}</p>
            </div>
         </div>
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[2].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[2].partist}</h3>
               <a href="">${p[2].ptitle}，${p[2].pyear}<br>${p[2].papar} ${p[2].psize}</a>
               <p>￥${p[2].price}</p>
            </div>
         </div>
         <div class="tjDiv1">
            <div class="tj">
               <img src=${p[3].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[3].partist}</h3>
               <a href="">${p[3].ptitle}，${p[3].pyear}<br>${p[3].papar} ${p[3].psize}</a>
               <p>￥${p[3].price}</p>
            </div>
         </div>
      </div>
      <div id="tjPart2">
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[4].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[4].partist}</h3>
               <a href="">${p[4].ptitle}，${p[4].pyear}<br>${p[4].papar} ${p[4].psize}</a>
               <p>￥${p[4].price}</p>
            </div>
         </div>
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[5].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[5].partist}</h3>
               <a href="">${p[5].ptitle}，${p[5].pyear}<br>${p[5].papar} ${p[5].psize}</a>
               <p>￥${p[5].price}</p>
            </div>
         </div>
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[6].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[6].partist}</h3>
               <a href="">${p[6].ptitle}，${p[6].pyear}<br>${p[6].papar} ${p[6].psize}
               </a>
               <p>￥${p[6].price}</p>
            </div>
         </div>
         <div class="tjDiv1">
            <div class="tj">
               <img src=${p[7].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[7].partist}</h3>
               <a href="">${p[7].ptitle}，${p[7].pyear}<br>${p[7].papar} ${p[7].psize}
               </a>
               <p>￥${p[7].price}</p>
            </div>
         </div>
      </div>
      <div id="tjPart3">
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[8].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[8].partist}</h3>
               <a href="">${p[8].ptitle}，${p[8].pyear}<br>${p[8].papar} ${p[8].psize}</a>
               <p>￥${p[8].price}</p>
            </div>
         </div>
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[9].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[9].partist}</h3>
               <a href="">${p[9].ptitle}，${p[9].pyear}<br>${p[9].papar} ${p[9].psize}</a>
               <p>￥${p[9].price}</p>
            </div>
         </div>
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[10].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[10].partist}</h3>
               <a href="">${p[10].ptitle}，${p[10].pyear}<br>${p[10].papar} ${p[10].psize}</a>
               <p>￥${p[10].price}</p>
            </div>
         </div>
         <div class="tjDiv1">
            <div class="tj">
               <img src=${p[11].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[11].partist}</h3>
               <a href="">${p[11].ptitle}，${p[11].pyear}<br>${p[11].papar} ${p[11].psize}</a>
               <p>￥${p[11].price}</p>
            </div>
         </div>
      </div>
      <div id="tjPart4">
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[12].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[12].partist}</h3>
               <a href="">${p[12].ptitle}，${p[12].pyear}<br>${p[12].papar} ${p[12].psize}</a>
               <p>￥${p[12].price}</p>
            </div>
         </div>
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[13].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[13].partist}</h3>
               <a href="">${p[13].ptitle}，${p[13].pyear}<br>${p[13].papar} ${p[13].psize}</a>
               <p>￥${p[13].price}</p>
            </div>
         </div>
         <div class="tjDiv">
            <div class="tj">
               <img src=${p[14].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[14].partist}</h3>
               <a href="">${p[14].ptitle}，${p[14].pyear}<br>${p[14].papar} ${p[14].psize}</a>
               <p>￥${p[14].price}</p>
            </div>
         </div>
         <div class="tjDiv1">
            <div class="tj">
               <img src=${p[15].purl} alt="" class="tjImg">
            </div>
            <div class="tjText">
               <h3>${p[15].partist}</h3>
               <a href="">${p[15].ptitle}，${p[15].pyear}<br>${p[15].papar} ${p[15].psize}</a>
               <p>￥${p[15].price}</p>
            </div>
         </div>
      </div>`;
         //将片段填充回页面中原父元素内: 
         var div = document.querySelector("#ajaxPart1");
         div.innerHTML = html;

         //最新上架部分传参
         var html = `<div class="newImg1" id="nImg1">
         <div class="front move">
            <img src=${p[16].purl} alt="" class="newImgBig">
            <div class="newImgP">
               <p>${p[16].partist}<br>
                  ${p[16].ptitle}<br>
                  ${p[16].papar} ${p[16].psize}<br>
                  <b>￥${p[16].price}</b>
               </p>
            </div>
         </div>
         <div class="back move">
            <img src=${p[17].purl} alt="" class="newImgBig">
            <div class="newImgP">
               <p>${p[17].partist}<br>
                  ${p[17].ptitle}<br>
                  ${p[17].papar} ${p[17].psize}<br>
                  <b>￥${p[17].price}</b>
               </p>
            </div>
         </div>
      </div>
      <div class="newImg1" id="nImg2">
         <div class="front">
            <img src=${p[18].purl} alt="" class="newImgBig">
            <div class="newImgP">
               <p>${p[18].partist}<br>
                  ${p[18].ptitle}<br>
                  ${p[18].papar} ${p[18].psize}<br>
                  <b>￥${p[18].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[19].purl} alt="" class="newImgBig">
            <div class="newImgP">
               <p>${p[19].partist}<br>
                  ${p[19].ptitle}<br>
                  ${p[19].papar} ${p[19].psize}<br>
                  <b>￥${p[19].price}</b>
               </p>
            </div>	
         </div>
      </div>
      <div class="newImg2 nis" id="nImg3">
         <div class="front">
            <img src=${p[20].purl} alt="" class="newImgSmall" >
            <div class="newImgPs">
               <p>${p[20].partist}<br>
                  ${p[20].ptitle}<br>
                  ${p[20].papar} ${p[20].psize}<br>
                  <b>￥${p[20].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[21].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[21].partist}<br>
                  ${p[21].ptitle}<br>
                  ${p[21].papar} ${p[21].psize}<br>
                  <b>￥${p[21].price}</b>
               </p>
            </div>
         </div>
      </div>
      <div class="newImg2 nis" id="nImg4">
         <div class="front">
            <img src=${p[22].purl} alt="" class="newImgSmall" >
            <div class="newImgPs">
               <p>${p[22].partist}<br>
                  ${p[22].ptitle}<br>
                  ${p[22].papar} ${p[22].psize}<br>
                  <b>￥${p[22].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[23].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[23].partist}<br>
                  ${p[23].ptitle}<br>
                  ${p[23].papar} ${p[23].psize}<br>
                  <b>￥${p[23].price}</b>
               </p>
            </div>
         </div>
      </div>
      <div class="newImg2 nis" id="nImg5">
         <div class="front">
            <img src=${p[24].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[24].partist}<br>
                  ${p[24].ptitle}<br>
                  ${p[24].papar} ${p[24].psize}<br>
                  <b>￥${p[24].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[25].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[25].partist}<br>
                  ${p[25].ptitle}<br>
                  ${p[25].papar} ${p[25].psize}<br>
                  <b>￥${p[25].price}</b>
               </p>
            </div>
         </div>
      </div>
      <div class="newImg2 nis1" id="nImg6">
         <div class="front">
            <img src=${p[26].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[26].partist}<br>
                  ${p[26].ptitle}<br>
                  ${p[26].papar} ${p[26].psize}<br>
                  <b>￥${p[26].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[27].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[27].partist}<br>
                  ${p[27].ptitle}<br>
                  ${p[27].papar} ${p[27].psize}<br>
                  <b>￥${p[27].price}</b>
               </p>
            </div>
         </div>
      </div>
      <div class="newImg2 nis2" id="nImg7">
         <div class="front">
            <img src=${p[28].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[28].partist}<br>
                  ${p[28].ptitle}<br>
                  ${p[28].papar} ${p[28].psize}<br>
                  <b>￥${p[28].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[29].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[29].partist}<br>
                  ${p[29].ptitle}<br>
                  ${p[29].papar} ${p[29].psize}<br>
                  <b>￥${p[29].price}</b>
               </p>
            </div>
         </div>
      </div>
      <div class="newImg2 nis2" id="nImg8">
         <div class="front">
            <img src=${p[30].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[30].partist}<br>
                  ${p[30].ptitle}<br>
                  ${p[30].papar} ${p[30].psize}<br>
                  <b>￥${p[30].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[31].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[31].partist}<br>
                  ${p[31].ptitle}<br>
                  ${p[31].papar} ${p[31].psize}<br>
                  <b>￥${p[31].price}</b>
               </p>
            </div>
         </div>
      </div>
      <div class="newImg2 nis2" id="nImg9">
         <div class="front">
            <img src=${p[32].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[32].partist}<br>
                  ${p[32].ptitle}<br>
                  ${p[32].papar} ${p[32].psize}<br>
                  <b>￥${p[32].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[33].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[33].partist}<br>
                  ${p[33].ptitle}<br>
                  ${p[33].papar} ${p[33].psize}<br>
                  <b>￥${p[33].price}</b>
               </p>
            </div>
         </div>
      </div>
      <div class="newImg2" id="nImg10">
         <div class="front">
            <img src=${p[34].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[34].partist}<br>
                  ${p[34].ptitle}<br>
                  ${p[34].papar} ${p[34].psize}<br>
                  <b>￥${p[34].price}</b>
               </p>
            </div>
         </div>
         <div class="back">
            <img src=${p[35].purl} alt="" class="newImgSmall">
            <div class="newImgPs">
               <p>${p[35].partist}<br>
                  ${p[35].ptitle}<br>
                  ${p[35].papar} ${p[35].psize}<br>
                  <b>￥${p[35].price}</b>
               </p>
            </div>
         </div>
      </div>`;
         var div = document.querySelector("#ajaxPart2");
         div.innerHTML = html;

      }
   })
})

//专题部分传参
$(function () {
   $.ajax({
      url: "http://localhost:3000/indexSpecial",
      type: "get",
      dataType: "json",
      success: function (result) {
         var s = result;
         //推荐部分传参
         var html = `<div class="specialBody">
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[0].surl} alt="">
            <div class="specialText">
               <h2>${s[0].stitle}</h2>
               <p>${s[0].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[1].surl} alt="">
            <div class="specialText">
               <h2>${s[1].stitle}</h2>
               <p>${s[1].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[2].surl} alt="">
            <div class="specialText">
               <h2>${s[2].stitle}</h2>
               <p>${s[2].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[3].surl} alt="">
            <div class="specialText">
               <h2>${s[3].stitle}</h2>
               <p>${s[3].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[4].surl} alt="">
            <div class="specialText">
               <h2>${s[4].stitle}</h2>
               <p>${s[4].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[5].surl} alt="">
            <div class="specialText">
               <h2>${s[5].stitle}</h2>
               <p>${s[5].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[6].surl} alt="">
            <div class="specialText">
               <h2>${s[6].stitle}</h2>
               <p>${s[6].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[7].surl} alt="">
            <div class="specialText">
               <h2>${s[7].stitle}</h2>
               <p>${s[7].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[8].surl} alt="">
            <div class="specialText">
               <h2>${s[8].stitle}</h2>
               <p>${s[8].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[9].surl} alt="">
            <div class="specialText">
               <h2>${s[9].stitle}</h2>
               <p>${s[9].section} </p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[10].surl} alt="">
            <div class="specialText">
               <h2>${s[10].stitle}</h2>
               <p>${s[10].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[11].surl} alt="">
            <div class="specialText">
               <h2>${s[11].stitle}</h2>
               <p>${s[11].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[12].surl} alt="">
            <div class="specialText">
               <h2>${s[12].stitle}</h2>
               <p>${s[12].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[13].surl} alt="">
            <div class="specialText">
               <h2>${s[13].stitle}</h2>
               <p>${s[13].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[14].surl} alt="">
            <div class="specialText">
               <h2>${s[14].stitle}</h2>
               <p>${s[14].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[15].surl} alt="">
            <div class="specialText">
               <h2>${s[15].stitle}</h2>
               <p>${s[15].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[16].surl} alt="">
            <div class="specialText">
               <h2>${s[16].stitle}</h2>
               <p>${s[16].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[17].surl} alt="">
            <div class="specialText">
               <h2>${s[17].stitle}</h2>
               <p>${s[17].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[18].surl} alt="">
            <div class="specialText">
               <h2>${s[18].stitle}</h2>
               <p>${s[18].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[19].surl} alt="">
            <div class="specialText">
               <h2>${s[19].stitle}</h2>
               <p>${s[19].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[20].surl} alt="">
            <div class="specialText">
               <h2>${s[20].stitle}</h2>
               <p>${s[20].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[21].surl} alt="">
            <div class="specialText">
               <h2>${s[21].stitle}</h2>
               <p>${s[21].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[22].surl} alt="">
            <div class="specialText">
               <h2>${s[22].stitle}</h2>
               <p>${s[22].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[23].surl} alt="">
            <div class="specialText">
               <h2>${s[23].stitle}</h2>
               <p>${s[23].section}</p>
            </div>
         </div>
         <div class="specialBodyDiv">
            <img class="specialImg" src=${s[24].surl} alt="">
            <div class="specialText">
               <h2>${s[24].stitle}</h2>
               <p>${s[24].section}</p>
            </div>
         </div>
      </div>`;
         var div = document.querySelector("#ajaxPart3");
         div.innerHTML = html;
      }
   })
})