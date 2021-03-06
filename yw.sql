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

/**产品信息表**/
CREATE TABLE yw_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  picdetbig VARCHAR(255),  /**详情页大图**/
  picdetsmall VARCHAR(255),   /**详情页小图**/
  ptype VARCHAR(10),   /**作品类型**/
  partist VARCHAR(32),  /**作者**/
  ptitle VARCHAR(128),  /**作品名**/
  pyear VARCHAR(32),  /**创作时间**/
  papar  VARCHAR(32),  /**纸张**/
  psize VARCHAR(128),  /**尺寸**/
  price DECIMAL(7,0),  /**价格**/
  purl VARCHAR(255),  /**底部方块推荐图**/
  pestimate VARCHAR(1024),  /**详情页作品评价**/
  pestshort VARCHAR(1024),  /**详情页作品短评**/
  pesturlone VARCHAR(255),  /**详情页图一**/
  pesturltwo VARCHAR(255),  /**详情页图二**/
  pstyle VARCHAR(32),  /**作品风格**/
  ptheme VARCHAR(32)  /**题材**/
);

/**专题信息表**/
CREATE TABLE yw_special(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  stitle VARCHAR(258),  /**专题简介标题**/
  section VARCHAR(1025),  /**专题简介内容**/
  surl VARCHAR(255)  /**专题封面图url**/
);

CREATE TABLE yw_border(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  btype VARCHAR(10), 
  burl VARCHAR(255)  /**边框图**/
);

/**用户信息数据库**/
INSERT INTO yw_user VALUES
(NULL,'hsyxxi','a123456','81767375@qq.com','13873146241','黄思洋','0'),
(NULL,'skyda','xiaoda123','62346789@qq.com','13762346789','刘小达','1'),
(NULL,'猪佩奇','peiqi233','490811430@qq.com','13812345678','朱佩琪','0'),
(NULL,'韩小信','hanxin666','hanxinkuaipao@qq.com','15852896513','韩鑫','1');

/**产品信息数据库**/
INSERT INTO yw_product VALUES
(NULL,NULL,NULL,'油画','邱黯雄','新山海经——黄浦云霄图','2018','布面丙烯','50x50cm','3500','../img/index/tj-img/tj1.png',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,'../img/details/product1.png@1.src','../img/details/product1.png@1.src','油画','严伟','水柚清山','2018','布面油画','30x30x2cm','2020','../img/index/tj-img/tj2.png','艺术家刻意制造出一种肌理的质感，运用颜色与肌理效果一起迸发出光怪陆离的美，像一阵清风徐来，绘画技法在艺术家这里把玩得如此高超，也给我们打开了一个新视野。','流动的状态具有不确定性，存在一种冒险的刺激，艺术家这种冒险的品质弥足珍贵，每件作品都是独一无二，不可复制的。','../img/details/arter1.png','../img/details/artistLevel.png','抽象表现','风景'),
(NULL,NULL,NULL,'油画','张家玮','七月的天空','2017','档案级布面微喷','35x50cm','1320','../img/index/tj-img/tj3.png',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'油画','段晓刚','形状2号','2017','布面丙烯','90x130cm','40350','../img/index/tj-img/tj4.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'版画','郑伊华','你的信仰','2018','数码微喷','25x30cm','2120','../img/index/tj-img/tj5.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'版画','张占占','一点温暖','2018','丝网版画','79x98cm','4800','../img/index/tj-img/tj6.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'版画','李欣蔚','蓝⾊是最温暖的颜色','2018','博物馆收藏级美术纸','70x42cm','1099','../img/index/tj-img/tj7.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'版画','张鑫','月中行','2018','专业博物馆级艺术微喷','38x50cm','699','../img/index/tj-img/tj8.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'水墨','杨志刚','幽居','2013','纸本设色','69x70cm','1260','../img/index/tj-img/tj9.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'水墨','韩健','江山平远入新秋','2018','纸本水墨','180x70cm','4950','../img/index/tj-img/tj10.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'水墨','左群','仁山智水-1','2018','纸本设色','240x69cm','7000','../img/index/tj-img/tj11.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'水墨','凌贵元','众香曼妙－29','2018','纸本水墨','46x19cm','1120','../img/index/tj-img/tj12.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'水彩','毛丽玲','如鱼得水','2018','纸本水彩','55x35cm','3520','../img/index/tj-img/tj13.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'水彩','周峰','华灯初上之一','2017','纸本水彩','54x72cm','6260','../img/index/tj-img/tj14.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'水彩','吴祥','城市之间','2018','纸本水彩','28x38cm','2520','../img/index/tj-img/tj15.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,'水彩','杨虎','MO（四）2','2017','纸本水彩','54x76cm','8260','../img/index/tj-img/tj16.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'刘海轮','寄居蟹','2017','纸本设色','33x33cm','2120','../img/index/new-img/new1.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'Cariueu Fena','菲格雷斯的白墙','2017','版画','46x66cm','1920','../img/index/new-img/new2.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'高波涛','萤火系','2016',NULL,NULL,'24350','../img/index/new-img/new3.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'RAMON TRIAS TIORRES','失去的芭蕉','不详',NULL,NULL,'2860','../img/index/new-img/new4.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'乔治-亨利-曼扎纳·毕沙罗','冬日街景','1950',NULL,NULL,'615070','../img/index/new-img/new5.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'孙榕宁','丝绸之路','2017',NULL,NULL,'10260','../img/index/new-img/new6.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'吕妹','塘','2017',NULL,NULL,'6260','../img/index/new-img/new7.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'丛培波','汉字艺术作品2013112833释文 叶','2013',NULL,NULL,'8400','../img/index/new-img/new8.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'徐昕','巴黎圣母院','2017',NULL,NULL,'5720','../img/index/new-img/new9.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'钟凌','遇见过去的自己','2015',NULL,NULL,'2100','../img/index/new-img/new10.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'段晓刚','无题','2015','布面丙烯','100x130cm','40350','../img/index/new-img/new11.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'葛雅静','书-2','2015','布面油画','65x85cm','11550','../img/index/new-img/new12.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'栗金阳','符号·江南小品之五','2017',NULL,NULL,'2120','../img/index/new-img/new13.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'魏盼盼','威尼斯水城','2017',NULL,NULL,'6120','../img/index/new-img/new14.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'房徽','涟漪','2016',NULL,NULL,'8120','../img/index/new-img/new15.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'王玲云','桃花五','2015',NULL,NULL,'2520','../img/index/new-img/new16.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'吴伟林','情人','2017',NULL,NULL,'12350','../img/index/new-img/new17.png',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'刘国义','意外怀孕生下银河','2017',NULL,NULL,'2370','../img/index/new-img/new18.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'李倩','玫瑰','2018',NULL,NULL,'2120','../img/index/new-img/new19.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,'林剑峰','迷景之二','2016',NULL,NULL,'2280','../img/index/new-img/new20.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,'洞·蓝调','2015','布面油画','60✕45cm','6520','../img/details/like1.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,'地中海','2013','布面油画','168✕120cm','120500','../img/details/like2.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,'须臾之二十三','2015','综合材料','80✕40cm','3860','../img/details/like3.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,'海滩2','2012','纸本水彩','75✕110cm','12400','../img/details/like4.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,'21克','2016','布面丙烯 ','100✕80cm','40350','../img/details/like5.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,'格里芬兽刻赤','2013','布面油画','70✕50cm','19260','../img/details/like6.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,'无题4','2016','纸面丙烯','24.50✕34.50cm','4120','../img/details/like7.jpg',NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,'印象欧洲系列作品No.2','2015','布面油画','40✕30cm','10120','../img/details/like8.jpg',NULL,NULL,NULL,NULL,NULL,NULL);

/**专题信息数据库**/
INSERT INTO yw_special VALUES
(NULL,'身体OR心灵，总有一个要在路上','当看过了山和大海，穿过了人山人海，不管是停下脚步还是继续前行，都会对曾经看过的风景见过的人，有种放不下忘不了的情感，而这种旅行情结，或许可以靠画作来治愈。','../img/index/special-img/1.jpg'),
(NULL,'红唇入画·性感不只裸露','选择一幅“红唇”，让艺术给你一个爱的么么哒。','../img/index/special-img/2.jpg'),
(NULL,'一见钟情','喂，我一见你就挺钟情的一见钟情要多久？答案是30秒。目光所及，赏心悦目，心生欢喜，然后便希望时时刻刻拥有在身边。','../img/index/special-img/3.jpg'),
(NULL,'城·事<br>一座城一个故事','每个人的记忆，或多或少都与一座城有关。万青在歌里唱到，住在我心里孤独的孤独的海怪，深海的光、停滞的海浪、站在能看到灯火的桥，描述的正是海滨之城。','../img/index/special-img/4.jpg'),
(NULL,'这些作品都叫<br>《无题》','很多艺术家，都有那么几件作品叫「无题」灵感来了，由心而作，这种纯粹的艺术感觉没有条条框框去束缚，也许就差这么一个机会把它带回家，给它一个专属ID','../img/index/special-img/5.jpg'),
(NULL,'当星空遇上画笔|给你永恒的灿烂','夜空中最亮的星，摘下来送给你。','../img/index/special-img/6.jpg'),
(NULL,'当艺术遇到设计','当科学不耐烦，便产生了艺术。设计总与时间挂钩并不是偶然所得，在人类时间的长河里，艺术来源于生活，设计来源于艺术。','../img/index/special-img/7.jpg'),
(NULL,'看艺术家如何大玩时尚元素','秀场是时装精的舞台，画布就是艺术家的T台。','../img/index/special-img/8.jpg'),
(NULL,'条纹X格子 | 强迫症的治愈良药','在众多强迫症中，艺术家是最奇妙的存在，他们将条纹和格子整齐的排列在画布之上，使整个画面都透露着工整严谨，让人看了，只觉舒服无比。','../img/index/special-img/9.jpg'),
(NULL,'风水配色帮您打造完美家居','风水与颜色搭配的进阶阶段，是将自己渴望的色彩运用风水的力量带入你的家庭起居，使得“天地人合一”。','../img/index/special-img/10.jpg'),
(NULL,'饥饿与爱<br>都是不治之症','爱情给人的安全感就像吃到好吃的食物一样，可以完全抵消掉焦虑情绪。','../img/index/special-img/11.jpg'),
(NULL,'摇滚x艺术 | 是态度，更是风格，都会上瘾','喜欢摇滚的你，除了买唱片，看现场，组band，还能如何让自己的生活更加摇滚呢~','../img/index/special-img/12.jpg'),
(NULL,'认识极简主义，享受精致生活','追求 minimalist life 的过程，就是深刻认识精致之美的过程。','../img/index/special-img/13.jpg'),
(NULL,'小白家居选画终极指南','怎么样才能在不砸钱不打脸的前提下，选出一款真正能够走心，提升逼格的绘画作品？下面小编就来给大家列出多种预算的解决方案，上到万元且不封顶，下到几百不忽悠的应有尽有。','../img/index/special-img/14.jpg'),
(NULL,'买一件雕塑，任何时候都不晚','如果你是一个热爱艺术的人，只有当你的家里摆上一件雕塑，你的艺术家装才算完成。','../img/index/special-img/15.jpg'),
(NULL,'中国风 | 那些比刺绣还美的国画','中国风的至美之物，刺绣算一个。但比绣娘的针更传神的，是画家的笔。真要比起来，刺绣还是仿画而作。','../img/index/special-img/16.jpg'),
(NULL,'艺术可通禅','倘若一个主体兼涉艺术与禅两种客体，则因缘斯起，本无缘之理体与有缘之事体遂达成一种相成的关系。','../img/index/special-img/17.jpg'),
(NULL,'这些作品有点<br />“污”','在家这样的私密空间里，多点蠢蠢欲动，证明你还很年轻。','../img/index/special-img/18.jpg'),
(NULL,'爵士俱乐部 | 浮光掠影的城市色彩','如果家里挂一幅这样的艺术品，恰如下着雨的都市夜晚，家中突然响起了小号的长鸣，大提琴的低呜，爵士钢琴的戏谑。摇着手中的威士忌，坐在沙发上，欣赏着如音乐一般的绘画。','../img/index/special-img/19.jpg'),
(NULL,'潘玉良收藏级别版画专场','潘玉良在中国现代美术史中拥有崇高地位，高质量的复制版画将是人们认识她的重要途径。','../img/index/special-img/20.jpg'),
(NULL,'红色作品精选 | 我的名字叫红','选择本身才是最至关重要的。如果你需要一款红色，我们可以为你提供最好的选择。','../img/index/special-img/21.jpg'),
(NULL,'诗经 | 美人如诗，草木如织','不读《诗经》，不知万物有灵，读过了《诗经》，不妨再看看这如诗之画。','../img/index/special-img/22.jpg'),
(NULL,'如何打造艺术感爆棚的LOFT','让为艺术而生的LOFT重新回归艺术。','../img/index/special-img/23.jpg'),
(NULL,'城事 | 霓虹初上的都市情结','在都市森林里穿行而过之后，不管是否选择回归宁静，对都市都有一种放不下忘不掉的感情，这种都市情结，或许可以靠画作治愈。','../img/index/special-img/24.jpg'),
(NULL,'少女之心馆','少女心是女人的自我取悦，是放下一切身份和角色，专心致志的做一件属于自己的事情。','../img/index/special-img/25.jpg');

INSERT INTO yw_border VALUES(NULL,'无框','../img/details/border1pic.png'),
(NULL,'黑色细框','../img/details/border2pic.jpg'),
(NULL,'白色细框','../img/details/border3pic.jpg'),
(NULL,'原木细框','../img/details/border4pic.jpg'),
(NULL,'金色现代','../img/details/border5pic.jpg'),
(NULL,'碳木简约','../img/details/border6pic.jpg'),
(NULL,'金色简约','../img/details/border7pic.jpg'),
(NULL,'黑色古典','../img/details/border8pic.jpg'),
(NULL,'金色古典','../img/details/border1pic.png');





