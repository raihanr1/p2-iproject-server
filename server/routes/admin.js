const express = require("express");
const router = express.Router();
const { authentication } = require("../middleware/authentication");
const { authorization } = require("../middleware/authorization");
const { errorHandle } = require("../middleware/errorhandle");
const Controller = require("../controllers/adminController");
router.use(authentication);
router.use(authorization);

router.get("/property", Controller.getAllProperty);
router.post("/property", authorization, Controller.postNewProperty);
router.put("/property/:id", authorization, Controller.putProperty);
router.patch("/property/:id", authorization, Controller.patchStatusNewProperty);
router.use(errorHandle);

module.exports = router;
