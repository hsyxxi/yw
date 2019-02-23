//点击跳转首页
$(".toIndex").click(function(){
    window.open("login.html");
 });

 $(".headLeft>button").click(function(){
    window.open("index.html");
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



//ajax动态获取数据
$(function () {
    var search=location.search;
    //截取地址栏上的pid,根据pid查询数据库里对应的商品
    if(search!==""){
        var pid=search.split("=")[1];
    }
    $.ajax({
        url: "http://localhost:3000/details/details",
        type: "get",
        dataType: "json",
        data:{pid},
        success: function (result) {
            var p = result;

            var html=`<li>艺网</li>
            <li>${p[0].ptype}</li>
            <li>${p[0].partist}</li>
            <li>${p[0].ptitle}</li>`;
            var div=document.querySelector("#ajaxPart10");
            div.innerHTML=html;

            var html=`<div class="productBodyPicBig">
                <img src=${p[0].picdetbig} alt="">
            </div>
            <div class="productBodyPicSmall">
                <img src=${p[0].picdetsmall} alt="">
            </div>`;
            var div=document.querySelector("#ajaxPart4");
            div.innerHTML=html;

            var html=`<p class="price">¥${p[0].price}</p>`;
            var div=document.querySelector("#ajaxPart5");
            div.innerHTML=html;

            var html=`<p class="msgOfArt">${p[0].partist}</p>
            <p class="p1">${p[0].ptitle}, ${p[0].pyear}</p>
            <p class="p2">${p[0].papar}, ${p[0].psize}</p>
            <p class="p3">编辑推荐：</p>
            <p class="p4">${p[0].pestimate}</p>`;
            var div=document.querySelector("#ajaxPart6");
            div.innerHTML=html;

            var html=`<span>${p[0].partist}</span>
                <img src="../img/details/artistLevel.png" alt="">`;
            var div=document.querySelector("#ajaxPart7");
            div.innerHTML=html;

            var html=`<table>
            <tr>
                <td>作品名称：${p[0].ptitle}</td>
                <td>艺 术 家：${p[0].partist}</td>
                <td>材  质：${p[0].papar}</td>
            </tr>
            <tr>
                <td>尺  寸：${p[0].psize}</td>
                <td>创作时间：${p[0].pyear}</td>
                <td>作品类型：${p[0].ptype}</td>
            </tr>
            <tr>
                <td>风  格：${p[0].pstyle}</td>
                <td>题  材：${p[0].ptheme}</td>
                <td></td>
            </tr>
        </table>`;
            var div=document.querySelector("#ajaxPart8");
            div.innerHTML=html;     
        }
    })
})

//ajax传参 选择艺术品边框
$(function () {
    $.ajax({
        url: "http://localhost:3000/details/detailsBorder",
        type: "get",
        dataType: "json",
        success: function (result) {
            var b = result;
        //点击切换背景框
        function getBorderPic(x,m,k){
            $(x).click(function(){
                $("#btnNo").text(k),
                $(x).css("border","solid 2px #CF680A").siblings().css("border","solid 2px #fff")
                $(".productBodyPicBig>img").attr("src",m),
                $(".productBodyPicBig>img").css("filter","drop-shadow(2px 3px 6px rgba(0,0,0,0.5))")
            })
        }
        getBorderPic(".choice1",`${b[0].burl}`,`${b[0].btype}`);
        getBorderPic(".choice2",`${b[1].burl}`,`${b[1].btype}`);
        getBorderPic(".choice3",`${b[2].burl}`,`${b[2].btype}`);
        getBorderPic(".choice4",`${b[3].burl}`,`${b[3].btype}`);
        getBorderPic(".choice5",`${b[4].burl}`,`${b[4].btype}`);
        getBorderPic(".choice6",`${b[5].burl}`,`${b[5].btype}`);
        getBorderPic(".choice7",`${b[6].burl}`,`${b[6].btype}`);
        getBorderPic(".choice8",`${b[7].burl}`,`${b[7].btype}`);
        getBorderPic(".choice9",`${b[8].burl}`,`${b[8].btype}`);
        }
    })
})


$(function () {
    $.ajax({
        url: "http://localhost:3000/details/detailsLike",
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
            var div=document.querySelector("#ajaxPart9");
            div.innerHTML=html;
        }
    })
})