const Voucher = require("../models/Voucher");

module.exports = {


    generate(number) {
        const codes = Array.from({length: number}, () => Math.random().toString(36).substr(2, 8));
        return Voucher.createArray(codes);
    },

    availableVouchers() {
        return Voucher.getAvailable();
    },

    redeem(code, customerId) {
        const voucher = Voucher.findByCode(code);
        if (!voucher) {
            return {msg: "voucher not found", status: "fail"}
        }
        if (voucher.customerId) {
            return {msg: "voucher is used before", status: "fail"}
        }

        Voucher.redeem(code, customerId);

        return {
            status: "success",
            voucher,
            msg: "success",
        };
    }

};