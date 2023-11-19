const router = require("express").Router();
const { userController } = require("../controllers");
const { verifyToken } = require("../middleware/auth");
const { checkLogin } = require("../middleware/validator");

router.get("/", userController.getAll);
router.get("/login", checkLogin, userController.loginUser)
router.get("/keep-login", verifyToken, userController.keepLogin)
router.get("/check-email", userController.checkEmail)
router.patch("/change-password", verifyToken, userController.changePassword)

module.exports = router