const express = require('express')
const router = express.Router()
const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user'
})
router.post('/user/adduser', function (req, res) {
    const datas = req.body
    const sqlStr = "insert into userinfo set username=?,password=?"
    db.query(sqlStr, [datas.username, datas.password], function (err, result) {
        if (err) return console.log(err.message);
        if (result.affectedRows === 1) {
            res.send({
                status: 200,
                msg: '添加数据成功',
            })
        }
    })
})
router.post('/user/updatauser', function (req, res) {
    const datas = req.body
    const sqlStr = "update userinfo set ? where id=?"
    db.query(sqlStr, [datas, datas.id], function (err, result) {
        if (err) return console.log(err.message);
        if (result.affectedRows === 1) {
            res.send({
                status: 200,
                msg: '更新数据成功',
            })
        }
    })
})
router.post('/user/deluser', function (req, res) {
const datas = req.body
const sqlStr = "delete from userinfo where id=?"
db.query(sqlStr, datas.id, function (err, result) {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) {
        res.send({
            status: 200,
            msg: '删除数据成功',
        })
    }
})
})
module.exports = router