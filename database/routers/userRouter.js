const router = require("express").Router();
const { userController } = require("../controllers");
const { verifyToken } = require("../middleware/auth");

router.get("/", userController.getAll);
router.get("/login", userController.loginUser)
router.get("/keep-login", verifyToken, userController.keepLogin)

module.exports = router