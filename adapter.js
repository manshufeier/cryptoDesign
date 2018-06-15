var util = require('util');
var Target = require('./target');

function Adapter() {
    Target.call(this);
    this.encode = function() {
        var encodeModule = arguments[0] ? arguments[0] : null;
        var algorithm = arguments[1] ? arguments[1] : null;
        var enstring = arguments[2] ? arguments[2] : '';
        var returnType = arguments[3] ? arguments[3] : '';
        var encodeKey = arguments[4] ? arguments[4] : '';
        var encodeType = arguments[5] ? arguments[5] : '';
        //根据不同类型加密
        var AdapterClass = require('./adaptee_class/' + encodeModule);
        var adapteeObj = new AdapterClass();//获取加密模块对象
        return adapteeObj.encode(algorithm, enstring, returnType, encodeKey, encodeType);
    }
    this.decode = function() {
        var encodeModule = arguments[0] ? arguments[0] : null;
        var algorithm = arguments[1] ? arguments[1] : null;
        var enstring = arguments[2] ? arguments[2] : '';
        var returnType = arguments[3] ? arguments[3] : '';
        var encodeKey = arguments[4] ? arguments[4] : '';
        var encodeType = arguments[5] ? arguments[5] : '';
        var AdapterClass = require('./adaptee_class/' + encodeModule);
        //根据不同类型解密
        var adapteeObj = new AdapterClass();
        return adapteeObj.decode(algorithm, enstring, returnType, encodeKey, encodeType);
    }
}
util.inherits(Adapter, Target);
module.exports = Adapter;