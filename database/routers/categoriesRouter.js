const router = require("express").Router();
const { categoriesController } = require("../controllers");

router.get("/", categoriesController.getAll);
router.post("/", categoriesController.postCategories);
router.delete("/:id", categoriesController.deleteCategories);
router.patch("/:id", categoriesController.editCategories);

module.exports = router;
