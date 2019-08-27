let express = require("express");
let router = express.Router();

//时间格式化插件
let moment = require("moment");

// //mysql测试用例
// let User = require('../mysql/CRUD/user');

//mongodb测试用例
let User = require("../mongodb/CRUD/user");

//注册
router.post("/user/regist", function(req, res, next) {
    var userdata = req.body.data;
    var date = new Date();
    var user_tel = userdata.username;
    var user_pwd = userdata.password;
    var regist_time = moment(date).format("YYYY-MM-DD HH:mm:ss");
    if (user_pwd) {
        data = {
            user_name: "csm" + user_tel,
            user_pwd: user_pwd,
            regist_time: regist_time
        };
        User.regist(data, function(result) {
            res.json(result);
        });
    } else {
        return res.json({
            code: 1,
            message: "信息不完整"
        });
    }
});

//查询
router.post("/search", function(req, res, next) {
    var searchmsg = req.body.data;
    User.search(searchmsg, function(result) {
        res.json(result);
    });
});

module.exports = router;