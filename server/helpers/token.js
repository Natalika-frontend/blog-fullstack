const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config");

const sign = JWT_SECRET;

module.exports = {
    generate(data) {
        return jwt.sign(data, sign, {expiresIn: '30d'});
    },
    verify(token) {
        return jwt.verify(token, sign);
    }
}
