module.exports = {

    redeemVoucher(voucherCode, customerId) {
        for (let i = 0; i < this.vouchers.length; i++) {
            if (this.vouchers[i].code === voucherCode) {
                this.vouchers[i].customerId = customerId;
                break;
            }
        }


    },

    generateArrayOfVouchers(codes) {
        for (let code of codes) {
            this.vouchers.push({code});
        }

        return codes.map(code => ({code}));
    },

    getAvailable() {
        return this.vouchers.filter(voucher => !voucher.customerId);
    },

    findVoucherByCode(code) {
        return this.vouchers.find(voucher => voucher.code === code);
    },



    vouchers: [
        {
            "code": "123",
        }, {
            "code": "456",
        }, {
            "code": "789",
        }
    ],

    customers: [
        {
            "id": "1",
            "name": "sam"
        },
        {
            "id": "2",
            "name": "kero"
        },
        {
            "id": "3",
            "name": "mona"
        }
    ],

};