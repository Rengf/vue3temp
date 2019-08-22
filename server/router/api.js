let express = require('express');
let router = express.Router();

//时间格式化插件
let moment = require('moment');

//测试用例
let User = require('../CRUD/user');

//注册
router.post('/user/regist', function(req, res, next) {
    var userdata = req.body.data;
    var date = new Date();
    var user_tel=userdata.user_tel;
    var user_pwd = userdata.password;
    var regist_time = moment(date).format("YYYY-MM-DD HH:mm:ss")
    if (user_pwd) {
        data = {
            user_name: 'csm' + user_tel,
            user_pwd: user_pwd,
            regist_time: regist_time,
        }
        User.regist(data, function(err,result) {
            console.log(err,result)
            res.json({
                code: 0,
                message: '注册成功',
            })
        })
    } else {
        return res.json({
            code: 1,
            message: '信息不完整',
        })
    }

})

module.exports =router;