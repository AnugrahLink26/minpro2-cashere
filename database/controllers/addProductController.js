const db = require("../models");
const Products = db.Products;

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Products.findAll();
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
      const resultProducts = await Products.create({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productStock: productStock,
        productCategory: productCategory,
        urlProductImg: req.file?.path,
      });

      // console.log(resultProducts);

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
      await Products.update(
        {
          productName,
          productPrice,
          productDescription,
          productStock,
          productCategory,
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
