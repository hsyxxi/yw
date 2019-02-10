const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
var server=express();
server.listen(3000);
server.use(express.static('regLogin'));
//server.use(express.static('index'));
server.use(bodyParser.urlencoded({
  extended:false
}));
server.use('/user',userRouter);

