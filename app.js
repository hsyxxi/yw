const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const indexRouter=require('./routes/index.js');
const detailsRouter=require('./routes/details.js');
var server=express();
server.listen(3000);
server.use(express.static('regLogin'));
server.use(express.static('index'));
server.use(express.static('details'));
server.use(bodyParser.urlencoded({
  extended:false
}));
//路由托管/user ->userRouter
server.use('/user',userRouter);//127.0.0.1:3000/user
server.use('/',indexRouter);
server.use('/details',detailsRouter);

