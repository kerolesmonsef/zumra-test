const voucherService = require("../services/VoucherService");

module.exports = {

    generate(req, res) {
        const number = req.body.numner || req.query.number || 10;
        const vouchers = voucherService.generate(number);
        res.json(vouchers);
    },


    available(req, res) {
        const vouchers = voucherService.availableVouchers();
        res.json(vouchers);
    },

    redeem(req, res) {
        const code = req.params.code, customerId = req.params.customerId;

        const redeemStatus = voucherService.redeem(code, customerId);
        if (redeemStatus.status === "fail") {
            return res.status(404).json({message: redeemStatus.msg});
        }
        res.json({
            voucher: redeemStatus.voucher,
        });

    },
};