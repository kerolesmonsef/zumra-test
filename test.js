const voucherService = require("./services/VoucherService");

describe('Our application', function() {

    it('should adding 10 vouchers service', function(done) {
        voucherService.generate(10);
        const availableVouchers = voucherService.availableVouchers();
        if (availableVouchers.length >= 10) {
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not Equal 10"));
        }
    });

    it('should get available vouchers', function(done) {
        const availableVouchers = voucherService.availableVouchers();
        if (availableVouchers.length >= 0) {
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not Equal 0"));
        }
    });


    it('should redeem voucher with valid code', function(done) {
        const redeemStatus = voucherService.redeem("123","1");

        if (redeemStatus.status === "success") {
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error(`error message ${redeemStatus.msg}`));
        }
    });

    it('should unredeem token with duplicate code', function (done) {
        const redeemStatus = voucherService.redeem("123","1");

        if (redeemStatus.status === "fail") {
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error(`error message ${redeemStatus.msg}`));
        }
    });
});