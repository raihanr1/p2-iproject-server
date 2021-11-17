const express = require("express");
const router = express.Router();
const homeRouter = require("./home");
const userRouter = require("./user");

router.use("/user", userRouter);
router.use("/home", homeRouter);

module.exports = router;
