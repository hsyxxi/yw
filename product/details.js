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

//ajax动态获取数据
$(function () {
    $.ajax({
        url: "http://localhost:3000/details/details",
        type: "get",
        dataType: "json",
        success: function (result) {
            var p = result;
            var html=`<div class="maybeULikePicDiv">
            <div class="maybeULikeImg">
                <a href="">
                    <img src=${p[36].purl} alt="">
                </a>
            </div>
            <div class="maybeULikeMsg">
                <p>${p[36].ptitle}  ${p[36].pyear}</p>
                <p>${p[36].papar}  ${p[36].psize}</p>
                <p class="likePrice">¥${p[36].price}</p>
            </div>
        </div>
        <div class="maybeULikePicDiv">
            <div class="maybeULikeImg">
                <a href="">
                    <img src=${p[37].purl} alt="">
                </a>
            </div>
            <div class="maybeULikeMsg">
                <p>${p[37].ptitle}  ${p[37].pyear}</p>
                <p>${p[37].papar}  ${p[37].psize}</p>
                <p class="likePrice">¥${p[37].price}</p>
            </div>
        </div>
        <div class="maybeULikePicDiv">
            <div class="maybeULikeImg">
                <a href="">
                    <img src=${p[38].purl} alt="">
                </a>
            </div>
            <div class="maybeULikeMsg">
                <p>${p[38].ptitle}  ${p[38].pyear}</p>
                <p>${p[38].papar}  ${p[38].psize}</p>
                <p class="likePrice">¥${p[38].price}</p>
            </div>
        </div>   
        <div class="maybeULikePicDiv lastPic">
            <div class="maybeULikeImg">
                <a href="">
                    <img src=${p[39].purl} alt="">
                </a>
            </div>
            <div class="maybeULikeMsg">
                <p>${p[39].ptitle}  ${p[39].pyear}</p>
                <p>${p[39].papar}  ${p[39].psize}</p>
                <p class="likePrice">¥${p[39].price}</p>
            </div>
        </div>   
        <div class="maybeULikePicDiv">
            <div class="maybeULikeImg">
                <a href="">
                    <img src=${p[40].purl} alt="">
                </a>
            </div>
            <div class="maybeULikeMsg">
                <p>${p[40].ptitle}  ${p[40].pyear}</p>
                <p>${p[40].papar}  ${p[40].psize}</p>
                <p class="likePrice">¥${p[40].price}</p>
            </div>
        </div>   
        <div class="maybeULikePicDiv">
            <div class="maybeULikeImg">
                <a href="">
                    <img src=${p[41].purl} alt="">
                </a>
            </div>
            <div class="maybeULikeMsg">
                <p>${p[41].ptitle}  ${p[41].pyear}</p>
                <p>${p[41].papar}  ${p[41].psize}</p>
                <p class="likePrice">¥${p[41].price}</p>
            </div>
        </div>
        <div class="maybeULikePicDiv">
            <div class="maybeULikeImg">
                <a href="">
                    <img src=${p[42].purl} alt="">
                </a>
            </div>
            <div class="maybeULikeMsg">
                <p>${p[42].ptitle}  ${p[42].pyear}</p>
                <p>${p[42].papar}  ${p[42].psize}</p>
                <p class="likePrice">¥${p[42].price}</p>
            </div>
        </div>  
        <div class="maybeULikePicDiv lastPic">
            <div class="maybeULikeImg">
                <a href="">
                    <img src=${p[43].purl} alt="">
                </a>
            </div>
            <div class="maybeULikeMsg">
                <p>${p[43].ptitle}  ${p[43].pyear}</p>
                <p>${p[43].papar}  ${p[43].psize}</p>
                <p class="likePrice">¥${p[43].price}</p>
            </div>
        </div>`;
            var div=document.querySelector("#ajaxPart4");
            div.innerHTML=html;
        }
    })
})