const router = require("express").Router();
const { addProductController } = require("../controllers");
const { multerUpload } = require("../middleware/multer");

router.post(
  "/",
  multerUpload().single("urlProductImg"),
  addProductController.createProducts
);
router.get("/", addProductController.getAll);
router.delete("/:id", addProductController.deleteProducts);
router.patch("/:id", addProductController.updateProducts);

module.exports = router;
