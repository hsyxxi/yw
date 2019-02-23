const pool = require('../pool.js');
const express = require('express');
var router = express.Router();

//查询商品信息表
router.get('/indexProduct', (req, res) => {
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

//查询专题信息表
router.get('/indexSpecial', (req, res) => {
    var sql = "select * from yw_special";
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

