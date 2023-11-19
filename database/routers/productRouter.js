const router = require("express").Router();
const { productController } = require("../controllers");
const { multerUpload } = require("../middleware/multer");

router.post(
  "/",
  multerUpload().single("urlProductImg"),
  productController.createProducts
);
router.get("/", productController.getAll);
router.delete("/:id", productController.deleteProducts);
router.patch("/:id", productController.updateProducts);

module.exports = router;
