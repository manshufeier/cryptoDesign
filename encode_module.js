var AdapterClass = require('./adapter');
exports.encode = function() {
    var encodeModule = arguments[0] ? arguments[0] : null;
    var algorithm = arguments[1] ? arguments[1] : null;
    var enstring = arguments[2] ? arguments[2] : '';
    var returnType = arguments[3] ? arguments[3] : '';
    var encodeKey = arguments[4] ? arguments[4] : '';
    var encodeType = arguments[5] ? arguments[5] : '';

    //创建Adapter类，适配器调用加密解密
    var Adapter = new AdapterClass();
    return Adapter.encode(encodeModule, algorithm, enstring, returnType, encodeKey, encodeType);
};

exports.decode = function() {
    var encodeModule = arguments[0] ? arguments[0] : null;
    var algorithm = arguments[1] ? arguments[1] : null;
    var enstring = arguments[2] ? arguments[2] : '';
    var returnType = arguments[3] ? arguments[3] : '';
    var decodeKey = arguments[4] ? arguments[4] : '';
    var encodeType = arguments[5] ? arguments[5] : '';

    //创建Adapter类，适配器调用加密解密
    var Adapter = new AdapterClass();
    return Adapter.decode(encodeModule, algorithm, enstring, returnType, decodeKey, encodeType);
};