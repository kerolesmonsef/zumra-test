const database = require("../database/Database");

class Voucher {
    static createArray(codes) {
        return database.generateArrayOfVouchers(codes);
    }

    static getAvailable() {
        return database.getAvailable();
    }

    static findByCode(code) {
        return database.findVoucherByCode(code);
    }

    static redeem(code, customerId) {
        return database.redeemVoucher(code, customerId);
    }
}

module.exports = Voucher;