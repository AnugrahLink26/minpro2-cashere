const db = require("../models");
const Categories = db.ProductCategories;
// const { Op } = require("sequelize");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Categories.findAll();
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  postCategories: async (req, res) => {
    try {
      const category = req.body;
      const checkCategory = await Categories.findOne({
        where: { category: category.category },
      });

      if (checkCategory === null) {
        await Categories.create({
          category: category.category,
        });
        return res.status(200).send({ message: "Post success" });
      } else {
        return res.status(400).send({ message: "categories already exist" });
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  deleteCategories: async (req, res) => {
    try {
      await Categories.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send({ message: "delete success" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  editCategories: async (req, res) => {
    try {
      const { category } = req.body;
      await Categories.update(
        { category },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).send("edit success");
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
