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
$(".footLogoWx").mouseover(function (){ 
    $(".footLogoWxDown").show();  
 }).mouseout(function (){  
    $(".footLogoWxDown").hide();  
 }); 

function getDownPic(x,y){
$(x).mouseover(function (){ 
    $(".downCode").show(),$(y).show();
 }).mouseout(function (){  
    $(".downCode").hide(),$(y).hide();
 }) 
}
getDownPic("#footDownDarkIos","#codeIos");
getDownPic("#footDownDarkAnd","#codeAndroid");

//圆点移动并放大效果
function getMove(n,m,k){
$(n).mouseover(function (){ 
   $(m).css("left","55px"),
   $(k).css("right","55px");
}).mouseout(function (){  
   $(m).css("left","45px"),
   $(k).css("right","45px");
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