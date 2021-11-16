const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();
const { errorHandle } = require("../middleware/errorhandle");

router.post("/register", Controller.postRegister);

router.post("/login", Controller.postLoginUser);

router.get("/test", Controller.sendEmailToken);

router.use(errorHandle);

module.exports = router;
