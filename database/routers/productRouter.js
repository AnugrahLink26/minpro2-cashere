const router = require("express").Router();
const { productController } = require("../controllers");
const { multerUpload } = require("../middleware/multer");

router.post(
  "/",
  multerUpload().single("urlProductImg"),
  productController.createProducts
);
router.get("/", productController.getAll);
router.get("/cheaper", productController.getCheapestToExpensive);
router.get("/expensive", productController.getExpensiveToCheapest);
router.get("/A-Z", productController.getByNameAsc);
router.get("/Z-A", productController.getByNameDesc);
router.get("/search/:search", productController.getBySearch);
router.delete("/:id", productController.deleteProducts);
router.patch(
  "/:id",
  multerUpload().single("urlProductImg"),
  productController.updateProducts
);
router.patch("/status/:id", productController.updateProductStatus);
router.get("/:id", productController.getById);
router.delete("/:id", productController.deleteProducts);
router.patch("/:id", productController.updateProducts);

module.exports = router;
