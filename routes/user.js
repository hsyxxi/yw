const pool=require('../pool.js');
const express=require('express');
var router=express.Router();
//1.用户登录路由
router.post('/resLogin',(req,res)=>{
  var obj=req.body;
  var $phone=obj.phone;
  var $upwd=obj.upwd;
  if(!$phone){
    res.send({code:401,msg:'您输入的不是一个手机号或邮箱'});
	return;
  }
  if(!$upwd){
    res.send({code:402,msg:'登录密码不能为空'});
	return;
  }
  pool.query('SELECT * FROM yw_user WHERE phone=? AND upwd=? ',[$phone,$upwd],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send('登录成功');
	}else{
	  res.send('登陆失败');
	}
  });
});

//2.用户注册路由
router.post('/resLogin',(req,res)=>{
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