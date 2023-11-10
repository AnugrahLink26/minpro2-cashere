const router = require("express").Router();
const { adminController } = require("../controllers");
const { verifyToken } = require("../middleware/auth");

router.get("/", adminController.getAll);
router.post("/register-cashier", adminController.registerCashier);

module.exports = router