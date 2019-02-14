const pool = require('../pool.js');
const express = require('express');
var router = express.Router();

//查询商品详情
router.get('/details', (req, res) => {
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

