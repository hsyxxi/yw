const pool=require('../pool.js');
const express=require('express');
var router=express.Router();
//1.用户登录路由
//127.0.0.1:3000/login
router.post('/login',(req,res)=>{
  var $phone=req.body.phone;
  var $upwd=req.body.upwd;
  if(!$phone){
    res.send("您输入您的手机号或邮箱");
	  return;
  }
  if(!$upwd){
    res.send("登录密码不能为空");//数据发送到前端页面
	  return;
  }
  var sql="select * from yw_user where phone=? and upwd=?";
  pool.query(sql,[$phone,$upwd],(err,result)=>{
    if(err) throw err;
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("用户名或者密码错误");
		}
  });
});

//2.用户注册路由
router.post('/register',(req,res)=>{
  var obj=req.body;
  var $phone=obj.phone;
  if(!$phone){
    res.send('请输入手机号码');
    return;
  }
  var $upwd=obj.upwd;
  if(!$upwd){
    res.send('请输入注册账号的密码');
	return;
  }
  pool.query('INSERT INTO yw_user SET ?',[obj],(err,result)=>{
    if(err) throw err;
	//是否添加成功
	if(result.affectedRows>0){
	  console.log(result);
	  res.send('注册成功');
	}else{
	  res.send('注册失败');
	}
  });
});


module.exports=router;