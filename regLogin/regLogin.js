//切换账号登录和手机号登录
  resLogtitle2.onclick=function(){
    phoneLog.style.display="block";
    accountLog.style.display="none";
    resLogtitle1.style.fontWeight="normal";
	resLogtitle2.style.fontWeight="bold";
	resLogtitle1.style.borderBottom="0px solid #fff";
	resLogtitle2.style.borderBottom="3px solid #000";
  };
  resLogtitle1.onclick=function(){	 
      accountLog.style.display="block";
      phoneLog.style.display="none";
	  resLogtitle2.style.fontWeight="normal";
	  resLogtitle1.style.fontWeight="bold";
 	  resLogtitle1.style.borderBottom="3px solid #000";
	  resLogtitle2.style.borderBottom="0px solid #fff";
	}

//切换忘记密码和返回登录
  forgetLink.onclick=function(){
	resLogText.style.display="none";
    forgetUpwdDiv.style.display="block";
  };
  returnLog.onclick=function(){	 
	  forgetUpwdDiv.style.display="none";
      resLogText.style.display="block";
  }

//切换请登录和请注册
  pleaseRes.onclick=function(){
	resLogText.style.display="none";
    resDiv.style.display="block";
  };
  pleaseLog.onclick=function(){	 
	  resDiv.style.display="none";
      resLogText.style.display="block";
  }

//刷新随机切换背景图
function roll(){
var bgImgPic=document.getElementById("bgImgPic");
var rnd=Math.floor(Math.random()*6)+1;
bgImgPic.style.background="url('loginbg"+rnd+".jpg') no-repeat fixed center center";
bgImgPic.style.backgroundSize="cover";
}
window.onload=roll;


//表单框效果
  input1.onclick=function(){
  phone1.style.borderBottom="2px solid rgb(207, 104, 10)";
	inputMsg1.style.top="11px";
	inputMsg1.style.fontSize="12px";	
	inputMsg1.style.color="rgba(207, 104, 10,1)";
	phone1.placeholder=""; 
  };
  input2.onclick=function(){
    upwd.style.borderBottom="2px solid rgb(207, 104, 10)";
	inputMsg2.style.top="23px";
	inputMsg2.style.fontSize="12px";	
	inputMsg2.style.color="rgba(207, 104, 10,1)";
	upwd.placeholder="";
  };
  input3.onclick=function(){
	phone2.style.borderBottom="2px solid rgb(207, 104, 10)";
	inputMsg3.style.top="10px";
	inputMsg3.style.fontSize="12px";	
	inputMsg3.style.color="rgba(207, 104, 10,1)";
	phone2.placeholder="";
  };
  input4.onclick=function(){
    phone3.style.borderBottom="2px solid rgb(207, 104, 10)";
	inputMsg4.style.top="3px";
	inputMsg4.style.fontSize="12px";	
	inputMsg4.style.color="rgba(207, 104, 10,1)";
	phone3.placeholder="";
  };
  input5.onclick=function(){
    phone4.style.borderBottom="2px solid rgb(207, 104, 10)";
	inputMsg5.style.top="3px";
	inputMsg5.style.fontSize="12px";	
	inputMsg5.style.color="rgba(207, 104, 10,1)";
	phone4.placeholder="";
  };
  input6.onclick=function(){
    phone5.style.borderBottom="2px solid rgb(207, 104, 10)";
	inputMsg6.style.top="-15px";
	inputMsg6.style.fontSize="12px";	
	inputMsg6.style.color="rgba(207, 104, 10,1)";
	phone5.placeholder="";
  };

//登录交互
function post_Msg(){
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      var result=xhr.responseText;
      alert(result);
	  }
    } 
	xhr.open('post','/user/resLogin/resLogin',true);
	var formdata='$phone='+phone.value+'&upwd='+upwd.value;
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send(formdata);
	}

//注册交互
function resUserId(){
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      var result=xhr.responseText;
      alert(result);
	  }
  }
  xhr.open('post','/user/resLogin/resLogin',true);
  var formdata='$phone='+phone.value+'&upwd='+upwd.value;
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xhr.send(formdata);
}







