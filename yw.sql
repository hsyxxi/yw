SET NAMES UTF8;
DROP DATABASE IF EXISTS yw;
CREATE DATABASE yw CHARSET=UTF8;
USE yw;

/**用户信息表**/
CREATE TABLE yw_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  user_name VARCHAR(32),
  gender INT
);

INSERT INTO yw_user VALUES
(NULL,'hsyxxi','a123456','81767375@qq.com','13873146241','黄思洋','0'),
(NULL,'skyda','xiaoda123','62346789@qq.com','13762346789','刘小达','1');

SELECT * FROM yw_user;