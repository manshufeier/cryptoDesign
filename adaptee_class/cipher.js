var crypto = require('crypto');
module.exports = function() {
    this.encode = function() {
        var algorithm = arguments[0] ? arguments[0] : null;
        var enstring = arguments[1] ? arguments[1] : '';
        var returnType = arguments[2] ? arguments[2] : '';
        var encodeKey = arguments[3] ? arguments[3] : '';
        var encodeType = arguments[4] ? arguments[4] : '';
        var cipher = crypto.createCipher(algorithm, encodeKey);
        cipher.update(enstring, encodeType, returnType);
        var encryptedPassword = cipher.final(returnType);
        return encryptedPassword;
    };
    this.decode = function() {
        var algorithm = arguments[0] ? arguments[0] : null;
        var enstring = arguments[1] ? arguments[1] : '';
        var encodeType = arguments[2] ? arguments[2] : '';
        var encodeKey = arguments[3] ? arguments[3] : '';
        var returnType = arguments[4] ? arguments[4] : '';
        var decipher = crypto.createDecipher(algorithm, encodeKey);
        decipher.update(enstring, returnType, encodeType);
        var decryptedPassword = decipher.final(encodeType);
        return decryptedPassword;
    };
};