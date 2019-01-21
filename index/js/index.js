//轮播图
var imgs=document.getElementsByClassName("pic");
var dots=document.getElementsByClassName("dot");
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
//尾部左边一个二维码
$(".footLogoWx").mouseover(function (){ 
    $(".footLogoWxDown").show();  
 }).mouseout(function (){  
    $(".footLogoWxDown").hide();  
 }); 

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
$(".newImg1").mouseover(function(){
   $newImgBig=$(".newImg1>.newImgBig");
   $newImgP=$(".newImg1>.newImgP");
   $newImgP.css("display","block")
}).mouseout(function(){
   $newImgP.css("display","none")
})
}
getDiv(".newImg1","newImgBig","newImgP");
getDiv(".newImg2",);










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

//鼠标移入时显示左右隐藏部分，并且左边所有元素左移Xpx，右边所有元素右移Xpx
//鼠标移出时所有效果取消，归原
//文字部分始终定位在中间

//滚轮向下滑动时。nav字体颜色变黑，并上移，nav边框同时上移
//上移时搜索框隐藏，白色部分高度变少，左边字体消失。右边文字和|消失
//始终固定在顶部