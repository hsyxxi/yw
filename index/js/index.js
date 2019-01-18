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

 /*$(".headDown").mouseover(function (){ 
    $("").show();  
 }).mouseout(function (){  
    $("").hide();  
 }); */

function getDownPic(x,y){
$(x).mouseover(function (){ 
    $(".downCode").show(),$(y).show();
 }).mouseout(function (){  
    $(".downCode").hide(),$(y).hide();
 }) 
}
getDownPic("#footDownDarkIos","#codeIos");
getDownPic("#footDownDarkAnd","#codeAndroid");

