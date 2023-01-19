const express = require("express");
const apiRouters = require("./routes/api");
const voucherService = require("./services/VoucherService");
voucherService.generate(10);


const app = express();
app.use(express.json());
app.use("/voucher", apiRouters);


app.listen(3000, () => {
    console.log("listen on port http://localhost:3000")
});