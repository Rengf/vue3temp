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
    },

    //search查找
    search(data, callback) {
        if (data.searchmsg) {
            var countSql = `select count(*) as count from user where user_name like '%` + data.searchmsg + `\%'`
            var sql = `select * from user where user_name like '%` + data.searchmsg + `\%' limit ?,?`
        } else {
            var countSql = `select count(*) as count from user`
            var sql = `select * from user limit ?,?`
        }
        var params = [
            data.pages,
            data.limit
        ]
        client.query(countSql, (err, count) => {
            if (err) {
                console.log(err)
            } else {
                client.query(sql, params, (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        var total = JSON.parse(JSON.stringify(count))
                        var resdata = {
                            count: total[0].count,
                            data: result
                        }
                        callback(resdata)
                    }
                })
            }
        })
    }
}