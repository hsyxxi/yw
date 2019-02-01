//滚动时头部效果
$(document).scroll(function(){
   $(".header").css({ //顶部定位
      "position":"fixed","top":"0px","z-index":"999","height":"46px"
   }),$(".logo2").css({   //logo缩小
      "margin-top":"10px","height":"28px","width":"auto"
   }),$(".header2").css(   //导航栏上移消失
      "height","0px",
   ),$(".header-1,.wenzi,.codeShow,.headResLog,.headCar").css({   //搜索框和文字消失
      "display":"none"
   }),$(".header5,.header-5>li,.header2_1,.header2_1>li").css({  //右边图片和文字变小
      "height":"46px","line-height":"46px"
   }),$(".header-5").css(
      "width","160px"
   ),$(".blockImg,.headResLogImg").css({
      "margin-right":"25px"
   }),$(".header2_1").css({
      "top":"0px","color":"#000","background-color":"#fff",
      "z-index":"9999","margin":"0"
   })
})


//轮播图
var imgs=document.getElementsByClassName("pic");
var dots=document.getElementsByClassName("dot");
var liDot=document.getElementsByClassName("liDot");
var i=0;
function change(){
   for(var key in imgs){
      imgs[key].className="pic";
      dots[key].className="dot";
   }
   if(i<imgs.length){
      imgs[i].className="show pic";
      dots[i].className="dot active";
      i++;
      if(i==8){
         i=0; 
      }
   }
}
change();
setInterval(change,3000);



//鼠标移入移出隐藏效果
//尾部左边一个二维码，头部右边的二维码
function getCode(x,y){
   $(x).mouseover(function (){ 
      $(y).show();  
   }).mouseout(function (){  
      $(y).hide();  
   }); 
}
getCode(".footLogoWx",".footLogoWxDown");
getCode(".codeShow",".headHover");
getCode(".blockImg",".headHover");

//尾部右边两个二维码
function getDownPic(x,y){
   $(x).mouseover(function (){ 
      $(".downCode").show(),$(y).show();
   }).mouseout(function (){  
      $(".downCode").hide(),$(y).hide();
   }) 
   }
   getDownPic("#footDownDarkIos","#codeIos");
   getDownPic("#footDownDarkAnd","#codeAndroid");

//推荐点击切换div效果
function getTjPart(u,i){
   $(u).click(function(){
      $(i).css({
         "display":"block",
      }).siblings("div").css({
         "display":"none"
      }),$(u).css({
         "border-top":"1px solid #ddd",
         "border-left": "1px solid #ddd",
         "border-right": "1px solid #ddd",
         "border-bottom":"1px solid #fff"
      }),$(u).siblings("div").css({
         "border-top": "1px solid #fff",
         "border-left": "1px solid #fff",
         "border-right": "1px solid #fff",
         "border-bottom":"1px solid #ddd",
      })
   })
}  
getTjPart("#tjLink2","#tjPart2");
getTjPart("#tjLink3","#tjPart3");
getTjPart("#tjLink4","#tjPart4");
getTjPart("#tjLink1","#tjPart1");

//最新上架简介显示效果
function getDiv(x,m){
   $(x).mouseover(function(){
      var $x=$(this);
      $x.children("img").css({
         "transform":"scale(1.07,1.07)"
      }),$x.children(m).css("opacity","1")
   }).mouseout(function(){
      var $x=$(this);
      $x.children("img").css({
         "transform":"scale(1,1)"
      }),$x.children(m).css("opacity","0")
   })
   }
getDiv(".front",".newImgP");
getDiv(".front",".newImgPs");
getDiv(".back",".newImgP");
getDiv(".back",".newImgPs");

//最新上架点击按钮翻转切换图片效果
function getRotate(n){
   $(".tjChange").click(function(){  
      $(n).children(".front").css({
         "transform":"rotate3D(0,1,0,-180deg)"
      })
      .removeClass("front").addClass("back").siblings("div.back").css({

         "transform":"rotate3D(0,1,0,-360deg)"
      })
      .removeClass("back").addClass("front")  
   })
}
getRotate(".newImg1");  
getRotate(".newImg2");







//圆点移动并放大效果
function getMove(z,x,c){
$(z).mouseover(function (){ 
   $(x).css("left","55px"),$(c).css("right","55px"),
   $(x).css("width","7.5px"),$(x).css("height","7.5px"),
   $(c).css("width","7.5px"),$(c).css("height","7.5px")
}).mouseout(function (){  
   $(x).css("left","45px"),$(c).css("right","45px"),
   $(x).css("width","6px"),$(x).css("height","6px"),
   $(c).css("width","6px"),$(c).css("height","6px")
}); 
}
getMove(".whyUsPic1",".whyUsPicL>.whyUsPicDotL",".whyUsPicL>.whyUsPicDotR");
getMove(".whyUsPic2",".whyUsPicC>.whyUsPicDotL",".whyUsPicC>.whyUsPicDotR");
getMove(".whyUsPic3",".whyUsPicR>.whyUsPicDotL",".whyUsPicR>.whyUsPicDotR");

//开始GO的移动变色效果
$(".startText").mouseover(function (){ 
   $(".changeColor").css("width","100%"),
   $(".startText>p").css("left","51%");
}).mouseout(function (){  
   $(".changeColor").css("width","0%");
   $(".startText>p").css("left","40%");
}) 

//艺术家左边div鼠标移入移动效果
function getMoveDiv(n,m,k){
   $(n).mouseover(function (){ 
      var $n=$(this);
      $(m).css({"transform":"translate(15px,15px)"}),
      $(k).css({"transform":"translate(20px,20px)"})
   }).mouseout(function (){  
      var $n=$(this);
      $(m).css({"transform":"translate(0px,0px)"}),
      $(k).css({"transform":"translate(0px,0px)"})
   });
   }
   getMoveDiv(".artistImgs1",".artistImgs1>.movePic1",".artistImgs1>.movePic2");
   getMoveDiv(".artistImgs2",".artistImgs2>.movePic1",".artistImgs2>.movePic2");
   getMoveDiv(".artistImgs3",".artistImgs3>.movePic1",".artistImgs3>.movePic2");

//专题左右移动效果
   $(".specialBodyDiv").mouseover(function (){ 
      var spI=$(this).children(".specialImg");
      spI.css("left","0px")
   }).mouseout(function (){  
      var spI=$(this).children(".specialImg");
      spI.css("left","-60px")
   });

   //专题左右按钮点击效果
   var pageW=document.body.clientWidth;  //获取网页显示区域宽度
   var math=Math.floor(pageW/352);  //计算当前显示区可显示的完整div数
   var pics=$(".specialBodyDiv").length;  //div总数
   var num=Math.floor(352*pics/pageW);
   var $spDiv=$(".specialBody");   
   var move=0;  
   //点击右键的移动效果
   $(".specialRight").click(function (){ 
      if(move>-num){
         move--;  
         var k=move*math*352;   //获取每次移动的右边距数值
         $spDiv.css("margin-left",k);   
         if(-move==num){    
            var mrL=pageW-math*352;   //页面上除能完成显示的div以外的显示边距值
            $spDiv.css("margin-left",k+(mrL+32))   //最后一次距离
         }
      }
   })   
   //点击左键的移动效果
   $(".specialLeft").click(function (){ 
      if(move<0){
         move++;  
         var k=move*math*352;
         $spDiv.css("margin-left",k);   
         if(move==0){    
            var mrL=pageW-math*352;  
            $spDiv.css("margin-left",0)
         }
      }
   })

