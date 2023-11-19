const router = require("express").Router();
const { transactionController } = require("../controllers");
const { verifyToken } = require("../middleware/auth");

router.post("/", transactionController.newTransaction);
router.post("/details", transactionController.sendOrderDetail);

module.exports = router