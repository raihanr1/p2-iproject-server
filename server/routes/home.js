const express = require("express");
const Controller = require("../controllers/xenditController");
const { errorHandle } = require("../middleware/errorhandle");
const router = express.Router();

router.post(
  "/product/:book_mark_id/virtual_account",
  Controller.postCreateFixedVirtualAccount
);

router.get("/product/list_bank", Controller.listAvailableBankFVA);

router.post("/product/:book_mark_id/invoice", Controller.createInvoiceWithFVA);

router.post(
  "/product/:transaction_id/payment",
  Controller.virtualAccountPayment
);

router.use(errorHandle);
module.exports = router;
