var mongoose = require('mongoose');

module.exports = {
    connectServer() {
        mongoose.connect('mongodb://localhost:27017/vue3temp', {
            useNewUrlParser: true
        }, function(err) {
            if (err) {
                console.log('数据库连接失败');
            } else {
                console.log('数据库连接成功')
            }
        });
    }
}