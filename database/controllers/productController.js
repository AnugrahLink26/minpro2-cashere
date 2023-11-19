const db = require("../models");
const Products = db.Products;
const Categories = db.ProductCategories;
const { Op } = require("sequelize");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Products.findAll({
        include: [{ model: Categories, attributes: ["category"] }],
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  // getAll: async (req, res) => {
  //   try {
  //     const page = req.query.page || 1;
  //     const limit = 8;
  //     const { count, rows } = await Products.findAndCountAll({
  //       include: [{ model: Categories, attributes: ["category"] }],
  //       offset: (page - 1) * limit,
  //       limit: limit,
  //       order: [["createdAt", "DESC"]], // Adjust the order as needed
  //     });

  //     const totalPages = Math.ceil(count / limit);

  //     res.status(200).json({
  //       products: rows,
  //       currentPage: parseInt(page),
  //       totalPages: totalPages,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).send({ message: err.message });
  //   }
  // },
  getById: async (req, res) => {
    try {
      const result = await Products.findAll({
        where: {
          ProductCategoryId: req.params.id,
        },
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  createProducts: async (req, res) => {
    try {
      const {
        productName,
        productPrice,
        productDescription,
        productStock,
        productCategory,
      } = req.body;
      const checkProductName = await Products.findOne({
        where: { productName },
      });

      console.log(checkProductName);

      if (checkProductName) {
        return res.status(400).send({ message: "Product name already exist" });
      }
      const category = await Categories.findOne({
        where: { category: productCategory },
      });

      if (!category) {
        return res.status(400).send({ message: "Category not found" });
      }

      const resultProducts = await Products.create({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productStock: productStock,
        ProductCategoryId: category.id,
//      productCategory: productCategory,
        urlProductImg: req.file?.path,
      });

      return res.status(200).send({ message: "Create product successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  deleteProducts: async (req, res) => {
    try {
      await Products.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send({ message: "Delete successful" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  updateProducts: async (req, res) => {
    try {
      const {
        productName,
        productPrice,
        productDescription,
        productStock,
        productCategory,
      } = req.body;
      console.log(req);

      const category = await Categories.findOne({
        where: { category: productCategory },
      });

      if (!category) {
        return res.status(400).send({ message: "Category not found" });
      }

      await Products.update(
        {
          productName,
          productPrice,
          productDescription,
          productStock,
          ProductCategoryId: category.id,
          urlProductImg: req.file?.path,
//        productCategory,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).send({ message: "Update successful" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  updateProductStatus: async (req, res) => {
    try {
      const { isActive } = req.body;

      const updatedProduct = await Products.update(
        {
          isActive,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      if (updatedProduct[0] === 0) {
        return res.status(404).send({ message: "Product not found" });
      }

      res.status(200).send({ message: "Update status successful" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  getBySearch: async (req, res) => {
    try {
      const { search } = req.params;

      const whereClause = {
        productName: {
          [Op.like]: `%${search}%`,
        },
      };

      const result = await Products.findAll({
        where: whereClause,
        include: [{ model: Categories, attributes: ["category"] }],
      });

      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  getCheapestToExpensive: async (req, res) => {
    try {
      const result = await Products.findAll({
        include: [{ model: Categories, attributes: ["category"] }],
        order: [["productPrice", "ASC"]],
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  getExpensiveToCheapest: async (req, res) => {
    try {
      const result = await Products.findAll({
        include: [{ model: Categories, attributes: ["category"] }],
        order: [["productPrice", "DESC"]],
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  getByNameAsc: async (req, res) => {
    try {
      const result = await Products.findAll({
        include: [{ model: Categories, attributes: ["category"] }],
        order: [["productName", "ASC"]],
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  getByNameDesc: async (req, res) => {
    try {
      const result = await Products.findAll({
        include: [{ model: Categories, attributes: ["category"] }],
        order: [["productName", "DESC"]],
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};

// const db = require("../models");
// const Products = db.Products;

// module.exports = {
//   getAll: async (req, res) => {
//     try {
//       const result = await Products.findAll();
//       res.status(200).send(result);
//     } catch (err) {
//       console.log(err);
//       res.status(400).send({ message: err.message });
//     }
//   },
//   createProducts: async (req, res) => {
//     try {
//       const {
//         productName,
//         productPrice,
//         productDescription,
//         productStock,
//         productCategory,
//       } = req.body;

//       const checkProductName = await Products.findOne({
//         where: { productName },
//       });

//       if (checkProductName) {
//         return res.status(400).send({ message: "Product name already exists" });
//       }

//       const resultProducts = await Products.create({
//         productName,
//         productPrice,
//         productDescription,
//         productStock,
//         productCategory,
//       });

//       console.log(resultProducts);

//       return res.status(200).send({ message: "Create product successfully" });
//     } catch (err) {
//       console.log(err);
//       res.status(400).send({ message: err.message });
//     }
//   },
//   deleteProducts: async (req, res) => {
//     try {
//       await Products.destroy({
//         where: {
//           id: req.params.id,
//         },
//       });
//       res.status(200).send({ message: "Delete successful" });
//     } catch (err) {
//       console.log(err);
//       res.status(400).send({ message: err.message });
//     }
//   },
//   updateProducts: async (req, res) => {
//     try {
//       const {
//         productName,
//         productPrice,
//         productDescription,
//         productStock,
//         productCategory,
//       } = req.body;

//       await Products.update(
//         {
//           productName,
//           productPrice,
//           productDescription,
//           productStock,
//           productCategory,
//         },
//         {
//           where: {
//             id: req.params.id,
//           },
//         }
//       );

//       res.status(200).send({ message: "Update successful" });
//     } catch (err) {
//       console.log(err);
//       res.status(400).send({ message: err.message });
//     }
//   },
// };
