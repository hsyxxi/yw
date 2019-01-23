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

//最新上架效果
function getDiv(x,y,z){
   $(x).mouseover(function(){
      var $x=$(this);
      $x.children(":first").css("width",y)
      $x.children(":first").css("height",y)
      $x.children(":last").css("display","block")
   }).mouseout(function(){
      var $x=$(this);
      $x.children(":first").css("width",z)
      $x.children(":first").css("height",z)
      $x.children(":last").css("display","none")
   })
   }
getDiv(".newImg1",290,280);
getDiv(".newImg2",140,140);



//圆点移动并放大效果
function getMove(n,m,k){
$(n).mouseover(function (){ 
   $(m).css("left","55px"),$(k).css("right","55px"),
   $(m).css("width","7.5px"),$(m).css("height","7.5px");
   $(k).css("width","7.5px"),$(k).css("height","7.5px");
}).mouseout(function (){  
   $(m).css("left","45px"),$(k).css("right","45px");
   $(m).css("width","6px"),$(m).css("height","6px");
   $(k).css("width","6px"),$(k).css("height","6px");
}); 
}
getMove(".whyUsPic1",".whyUsPicL>.whyUsPicDotL",".whyUsPicL>.whyUsPicDotR");
getMove(".whyUsPic2",".whyUsPicC>.whyUsPicDotL",".whyUsPicC>.whyUsPicDotR");
getMove(".whyUsPic3",".whyUsPicR>.whyUsPicDotL",".whyUsPicR>.whyUsPicDotR");

//开始GO的移动变色效果
$(".startText").mouseover(function (){ 
   $(".changeColor").css("width","100%"),
   $(".startText>p").css("left","47%");
   
}).mouseout(function (){  
   $(".changeColor").css("width","0%");
   $(".startText>p").css("left","42%");
}) 

//鼠标移入移动效果
function getMove(n,m,k){
   $(n).mouseover(function (){ 
      var $n=$(this);
      $(m).css("transform","translate(20,20)"),$(k),
      $(k).css("transform","translate(20,20)"),$(k);
   }).mouseout(function (){  
      var $n=$(this);
      $(m).css("transform","translate(-20,-20)"),$(k),
      $(k).css("transform","translate(-20,-20)"),$(k);
   }); 
   }
   getMove(".artistImgs1",".artistImgs1>.movePic",".artistImgs1>.movePic2");
   getMove(".artistImgs2",".artistImgs2>.movePic",".artistImgs2>.movePic2");
   getMove(".artistImgs3",".artistImgs3>.movePic",".artistImgs3>.movePic2");
   



//鼠标移入时显示左右隐藏部分，并且左边所有元素左移Xpx，右边所有元素右移Xpx
//鼠标移出时所有效果取消，归原
//文字部分始终定位在中间

//滚轮向下滑动时。nav字体颜色变黑，并上移，nav边框同时上移
//上移时搜索框隐藏，白色部分高度变少，左边字体消失。右边文字和|消失
//始终固定在顶部



 
  