const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const router=require('./allrouter')
app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api",router)
app.listen(3000,function(){
    console.log('启动成功')
})