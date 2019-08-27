//连接数据库
let mysql_connect = require('../mysql_connect');
var client = mysql_connect.connectServer();

module.exports = {
    //测试用例
    //注册
    regist(data, callback) {
        var sql = `insert into user
        (user_password,user_name,regist_time)
        values(?,?,?);`
        var params = [
            data.user_pwd,
            data.user_name,
            data.regist_time
        ];
        client.query(sql, params, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(result);
            }
        })
    }
}