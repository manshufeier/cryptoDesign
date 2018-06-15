//所有接口都是通过adapter来调用的，其父类为target
//adapter继承该父类，并重写方法
module.exports = function() {
    this.encode = function() {
        console.log('no this function exist');
    };
    this.decode = function() {
        console.log('no this function exist');
    };
};