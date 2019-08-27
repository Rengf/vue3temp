var User = require("../schemas/user");

var index = require("./index");

var resData = {
    code: 0,
    message: ""
};
module.exports = {
    //测试用例
    //注册
    regist(data, callback) {
        var searchdata = {
            user_name: data.user_name
        };
        index.findData(User, searchdata, 1, function(result) {
            if (result == null) {
                index.insertData(User, data, function(result) {
                    resData.code = 0;
                    resData.message = "注册成功";
                    callback(resData);
                });
            } else {
                resData.code = 1;
                resData.message = "该账户已存在";
                callback(resData);
            }
        });
    },
    //查询
    search(data, callback) {
        var params = data;
        index.findData(User, params, 0, function(result) {
            resData.code = 0;
            resData.message = "查询成功";
            resData.data = result;
            callback(resData);
        });
    }
};