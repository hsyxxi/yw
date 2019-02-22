const express=require('express');
const bodyParser=require('body-parser');
const loginRouter=require('./routes/login.js');
const indexRouter=require('./routes/index.js');
const detailsRouter=require('./routes/details.js');
var server=express();
server.listen(3000);
server.use(express.static('./login'));
server.use(express.static('index'));
server.use(express.static('details'));
server.use(bodyParser.urlencoded({
  extended:false
}));
//路由托管/regLogin->regLoginRouter
server.use('/login',loginRouter);//127.0.0.1:3000/login
server.use('/',indexRouter);
server.use('/details',detailsRouter);

