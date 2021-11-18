const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const userRouter = require("./user");
const adminRouter = require("./admin");

router.use("/user", userRouter);
router.use("/home", homeRouter);
router.use("/admin", adminRouter);

module.exports = router;
