"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.ProductCategories),
      Products.hasMany(models.TransactionDetails);
    }
  }
  Products.init(
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urlProductImg: {
        type: DataTypes.STRING
      },
      productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
