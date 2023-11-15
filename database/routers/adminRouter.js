const router = require("express").Router();
const { adminController } = require("../controllers");
const { verifyToken } = require("../middleware/auth");

router.get("/cashiers", adminController.getCashier);
router.post("/register-cashier", adminController.registerCashier);
router.delete("/delete-cashier/:id", adminController.deleteCashier)
router.patch("/update-status-cashier/:id", adminController.updateStatusCashier)

module.exports = router