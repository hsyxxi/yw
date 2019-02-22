const pool = require('../pool.js');
const express = require('express');
var router = express.Router();

//查询商品详情
router.get('/details', (req, res) => {
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
    });
    var pid=req.query.pid;
    if(pid!==undefined){
    var sql = "select * from yw_product where pid=?";
    pool.query(sql,[pid],(err, result) => {
        if (err) console.log(err);
        if (result.length != 0) {
            res.write(JSON.stringify(result))
            res.end();
        }else{
            res.write(JSON.stringify(result)) 
            res.end();
        }
    });
    }
})

router.get('/detailsBorder', (req, res) => {
    var sql = "select * from yw_border";
    pool.query(sql, (err, result) => {
        if (err) console.log(err);
        if (result.length != 0) {
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"*"
            });
            res.write(JSON.stringify(result))
            res.end();
        }
    });
})

router.get('/detailsLike', (req, res) => {
    var sql = "select * from yw_product";
    pool.query(sql, (err, result) => {
        if (err) console.log(err);
        if (result.length != 0) {
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"*"
            });
            res.write(JSON.stringify(result))
            res.end();
        }
    });
})

module.exports = router;

