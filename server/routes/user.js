const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();
const { errorHandle } = require("../middleware/errorhandle");

router.post("/register", Controller.postRegister);

router.post("/login", Controller.postLoginUser);

router.patch("/login/token", Controller.validasiPayload);

router.patch("/login/:UserId", Controller.getTokenGmail);

router.use(errorHandle);

module.exports = router;
