//点击跳转首页
$(".toIndex").click(function(){
    window.open("../regLogin/regLogin.html");
 });

 $(".headLeft>button").click(function(){
    window.open("../index/index.html");
 });
//作品点击切换价格与信息
function getShow(x,m,l){
    $(x).click(function(){
        $(x).css(
            "border-bottom","solid 4px #000"
        ).siblings().css(
            "border-bottom","none"
        ),$(m).css(
            "display","block"
        ),$(l).css(
            "display","none"
        )
    })
}
getShow(".productPriceTitle2",".productBodyTextDiv2",".productBodyTextDiv1")
getShow(".productPriceTitle1",".productBodyTextDiv1",".productBodyTextDiv2")

//点击切换背景框
function getBorderPic(x,m,k){
    $(x).click(function(){
        $("#btnNo").text(k),
        $(x).css("border","solid 2px #CF680A").siblings().css("border","solid 2px #fff")
        $(".productBodyPicBig>img").attr("src",m),
        $(".productBodyPicBig").css("filter","drop-shadow(2px 3px 6px rgba(0,0,0,0.5))")
    })
}
getBorderPic(".choice1","./img/border1pic.png","无框")
getBorderPic(".choice2","./img/border2pic.jpg","黑色细框")
getBorderPic(".choice3","./img/border3pic.jpg","白色细框")
getBorderPic(".choice4","./img/border4pic.jpg","原木细框")
getBorderPic(".choice5","./img/border5pic.jpg","金色现代")
getBorderPic(".choice6","./img/border6pic.jpg","碳木简约")
getBorderPic(".choice7","./img/border7pic.jpg","金色简约")
getBorderPic(".choice8","./img/border8pic.jpg","黑色古典")
getBorderPic(".choice9","./img/border9pic.jpg","金色古典")

