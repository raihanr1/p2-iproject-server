const express = require("express");
const Controller = require("../controllers/xenditController");
const { errorHandle } = require("../middleware/errorhandle");
const { authentication } = require("../middleware/authentication");
const AppController = require("../controllers/appController");
const router = express.Router();
const { User } = require("../models");
router.use(authentication);

router.get("/user", async (req, res, next) => {
  try {
    let data = await User.findByPk(+req.user.id);
    res.status(200).json({
      role: data.role,
    });
    console.log(data.role, ">>.");
  } catch (error) {
    next(error);
  }
});

router.get("/product", AppController.getAllProperty);
router.get("/product/list_bank", Controller.listAvailableBankFVA);

router.get("/bookmark", AppController.getBookMark);
router.post("/bookmark/:id", AppController.postBookMark);

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
