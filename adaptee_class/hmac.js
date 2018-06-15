var crypto = require('crypto');
module.exports = function() {
    this.encode = function() {
        var algorithm = arguments[0] ? arguments[0] : null;
        var enstring = arguments[1] ? arguments[1] : '';
        var returnType = arguments[2] ? arguments[2] : '';
        var encodeKey = arguments[3] ? arguments[3] : '';
        var hmac = crypto.createHmac(algorithm, encodeKey);
        hmac.update(enstring);
        return hmac.digest(returnType);
    };
    this.decode = function() {
        console.log('no this function exist');
    };
};