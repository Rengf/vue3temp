module.exports = {
    /**
     *
     * @param model : 模板名
     * @param params: 传入的数据
     * @param condition: 是否可以重复插入数据
     * @returns await : {length: 长度, data: 数据}
     */
    //插入数据
    insertData(model, params, callback) {
        new model(params).save(function(err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        });
    },

    /**
     *
     * @param model: 模板名
     * @param params: 查询的数据
     * @param condition: 查询条件
     * @returns await : {length: 长度, data: 数据}
     */
    //查找数据
    findData(model, params, condition, callback) {
        if (condition) {
            model.findOne(params, function(err, data) {
                if (err) {
                    callback(err);
                } else {
                    callback(data);
                }
            });
        } else {
            console.log(params)
            model.find(params).then(function(data) {
                callback(data);
            });
        }
    }
};