const express = require("express");
const router = express.Router();
const voucherController = require("../controllers/VoucherController");


router.get('/generate', voucherController.generate);
router.get('/available', voucherController.available);
router.get('/redeem/:code/:customerId', voucherController.redeem);

module.exports = router;