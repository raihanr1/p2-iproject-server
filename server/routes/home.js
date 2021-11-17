const express = require("express");
const Controller = require("../controllers/xenditController");
const { errorHandle } = require("../middleware/errorhandle");
const { authentication } = require("../middleware/authentication");
const AppController = require("../controllers/appController");
const router = express.Router();

router.use(authentication);

// router.get("/product", AppController.getAllProperty);

router.get("/product/list_bank", Controller.listAvailableBankFVA);

router.post(
  "/product/:book_mark_id/virtual_account",
  Controller.postCreateFixedVirtualAccount
);

router.post("/product/:book_mark_id/invoice", Controller.createInvoiceWithFVA);

router.post(
  "/product/:transaction_id/payment",
  Controller.virtualAccountPayment
);

router.use(errorHandle);
module.exports = router;
